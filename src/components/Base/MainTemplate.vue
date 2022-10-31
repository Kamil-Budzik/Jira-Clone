<script setup lang="ts">
import NavBar from '@components/NavBar/NavBar.vue';
import Logo from '@components/Logo.vue';
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
const isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});
</script>

<template>
  <div class="main-template-wrapper mt-4">
    <div class="bg-gray-400 m-2">
      <Logo />
    </div>
    <div class="bg-white">Search bar</div>
    <section class="flex items-center">
      <header class="bg-white">
        <h1 class="text-4xl text-white font-bold">Page Title</h1>
      </header>
    </section>
    <nav
      class="nav h-full flex items-center flex-col justify-center bg-gray-400"
    >
      <Nav-bar :isLoggedIn="isLoggedIn" />
    </nav>
    <main class="main-content bg-gray-300">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.main-template-wrapper {
  height: 100vh;
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-template-rows: 76px 1fr;
}
.nav {
  grid-column: 1;
  grid-row: 2;
}
.main-content {
  grid-column: 2;
  grid-row: 2;
}
</style>
