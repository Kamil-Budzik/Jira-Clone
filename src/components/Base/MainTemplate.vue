<script setup lang="ts">
import NavBar from '@components/NavBar/NavBar.vue';
import Logo from '@components/Logo.vue';
</script>

<template>
  <div class="main-template-wrapper mt-4">
    <div class="bg-gray-400 m-2">
      <Logo />
    </div>
    <section class="flex items-center">
      <header class="bg-white">
        <h1 class="text-4xl text-white font-bold">Page Title</h1>
      </header>
    </section>
    <div class="nav-container bg-gray-400">
      <Nav-bar />
    </div>
    <main class="main-content">
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
.nav-container {
  grid-column: 1;
  grid-row: 2;
}
.main-content {
  grid-column: 2;
  grid-row: 2;
}
</style>
