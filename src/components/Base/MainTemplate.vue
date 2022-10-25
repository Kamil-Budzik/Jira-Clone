<script setup lang="ts">
import NavBar from '@components/NavBar/NavBar.vue';
</script>

<template>
  <div class="main-template-wrapper">
    <div>
      <p>LOGO</p>
    </div>
    <div>Page title</div>
    <div class="nav-container">
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
  grid-template-columns: 300px 1fr;
  grid-template-rows: 100px 1fr;
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
