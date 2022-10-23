<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  to: String,
});
</script>

<template>
  <li class="text-lg text-red-200">
    <router-link :to="`${to}`">
      <slot />
    </router-link>
  </li>
</template>
