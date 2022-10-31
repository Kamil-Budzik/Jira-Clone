<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { RouterLink, useRouter } from 'vue-router';
import { LINKS } from '../router';
import auth from '../auth';
import signInErrors from '../helpers/signInErrors';

const email = ref('');
const password = ref('');
const router = useRouter();
const error = ref('');

const signIn = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    console.log('USER Signed!');
    router.push(LINKS.BOARD);
    error.value = '';
  } catch (e: any) {
    error.value = signInErrors(e.code);
  }
};
const signInWithGoogle = () => {};

onMounted(() => {
  if (auth.currentUser) {
    router.push(LINKS.BOARD);
  }
});
</script>

<template>
  <section class="h-full flex flex-col items-center justify-center">
    <header>
      <h1 class="font-bold text-3xl uppercase text-primary">Sign in</h1>
    </header>
    <form class="flex flex-col max-w-2xl" @submit="signIn">
      <input
        type="text"
        placeholder="Email"
        v-model="email"
        class="outline-primary py-2 px-4 my-4 shadow"
      />
      <input
        type="password"
        placeholder="password"
        v-model="password"
        class="outline-primary py-2 px-4 shadow my-4"
      />
      <button
        type="submit"
        class="bg-primary text-white font-semibold text-lg border-2 py-2 px-4 transition border-primary hover:text-primary hover:bg-white hover:border-primary w-full"
      >
        Login
      </button>
      <p class="text-red-500 text-lg font-bold text-center" v-if="error">
        {{ error }}
      </p>
    </form>
    <p class="py-2">
      You don't have account? Then
      <router-link :to="LINKS.REGISTER" class="text-primary"
        >create a new one</router-link
      >
    </p>
  </section>
</template>
