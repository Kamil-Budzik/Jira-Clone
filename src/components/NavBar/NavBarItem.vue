<script setup lang="ts">
defineProps({
  to: String,
  icon: String,
  alt: String,
  isActive: Boolean,
});
</script>

<template>
  <li
    class="my-6 p-2 rounded-2xl border-4 border-transparent transition hover:border-gray-500"
    :class="{ active: isActive }"
    :title="alt"
  >
    <router-link :to="`${to}`">
      <img :src="icon" :alt="alt" class="w-8" />
    </router-link>
  </li>
</template>

<style scoped>
.active {
  @apply border-primary hover:border-primary;
}
</style>
