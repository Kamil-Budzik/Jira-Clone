<template>
  <h1>Create an account</h1>
  <form class="flex flex-col" @submit="register">
    <input type="text" placeholder="Email" v-model="email" class="max-w-sm" />
    <input
      type="text"
      placeholder="password"
      v-model="password"
      class="max-w-sm"
    />
    <button type="submit">Register</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { LINKS } from '../router';

const email = ref('');
const password = ref('');
const router = useRouter();

const register = async () => {
  try {
    await createUserWithEmailAndPassword(
      getAuth(),
      email.value,
      password.value
    );
    console.log('USER logged in');
    router.push(LINKS.BOARD);
  } catch (e: any) {
    console.log(e);
    alert(e.message);
  }
};
const signInWithGoogle = () => {};
</script>
