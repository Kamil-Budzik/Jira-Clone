<template>
  <h1>Sign in</h1>
  <form class="flex flex-col" @submit="register">
    <input type="text" placeholder="Email" v-model="email" class="max-w-sm" />
    <input
      type="text"
      placeholder="password"
      v-model="password"
      class="max-w-sm"
    />
    <button type="submit">Sign in</button>
  </form>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { LINKS } from '../router';

const email = ref('');
const password = ref('');
const router = useRouter();

const register = async () => {
  try {
    await signInWithEmailAndPassword(getAuth(), email.value, password.value);
    console.log('USER Signed!');
    router.push(LINKS.BOARD);
  } catch (e: any) {
    alert(e.message);
  }
};
const signInWithGoogle = () => {};

onMounted(() => {
  if (getAuth().currentUser) {
    router.push(LINKS.BOARD);
  }
});
</script>
