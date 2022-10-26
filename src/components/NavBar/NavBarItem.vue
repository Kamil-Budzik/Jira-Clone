<script setup lang="ts">
defineProps({
  to: String,
});
</script>

<template>
  <li class="text-lg text-zinc-700">
    <router-link :to="`${to}`">
      <slot />
    </router-link>
  </li>
</template>
