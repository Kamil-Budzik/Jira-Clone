<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import MarketingPlan from './views/MarketingPlan.vue';
import PlatformLaunch from './views/PlatformLaunch.vue';
import Roadmap from './views/Roadmap.vue';

const routes = {
  '/': PlatformLaunch,
  '/marketing-plan': MarketingPlan,
  '/roadmap': Roadmap,
};

const currentPath = ref(window.location.hash);
const currentView = computed(() => {
  if (currentPath.value.slice(2) === 'marketing-plan') return MarketingPlan;
  if (currentPath.value.slice(2) === 'roadmap') return Roadmap;
  return PlatformLaunch;
});

onMounted(() => {
  window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash;
  });
});
</script>

<template>
  <a href="#/">Home</a> | <a href="#/marketing-plan">Marketing Plan</a> |
  <a href="#/roadmap">Roadmap</a>
  <component :is="currentView" />
</template>
