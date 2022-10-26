<script setup lang="ts">
defineProps({
  to: String,
  icon: String,
  alt: String,
});
</script>

<template>
  <li class="text-lg text-zinc-700">
    <router-link :to="`${to}`">
      <img :src="icon" :alt="alt" />
    </router-link>
  </li>
</template>
