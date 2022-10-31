<script setup lang="ts">
import { ref } from 'vue';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { LINKS } from '../router';
import auth from '../auth';

const email = ref('');
const password = ref('');
const router = useRouter();

const register = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    console.log('USER logged in');
    router.push(LINKS.BOARD);
  } catch (e: any) {
    console.log(e);
    alert(e.message);
  }
};
const signInWithGoogle = () => {};
</script>

<template>
  <section class="h-full flex flex-col items-center justify-center">
    <header>
      <h1 class="font-bold text-3xl uppercase text-primary">
        Create an account
      </h1>
    </header>
    <form class="flex flex-col max-w-2xl" @submit="register">
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
        Register
      </button>
    </form>
    <p class="py-2">
      You've already have account? Then
      <router-link :to="LINKS.SIGN_IN" class="text-primary"
        >sign in</router-link
      >
    </p>
  </section>
</template>
