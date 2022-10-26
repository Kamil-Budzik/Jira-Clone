<script setup lang="ts">
import NavBarItem from './NavBarItem.vue';
import boardIcon from '@/assets/nav-icons/board-icon.svg';
import timelineIcon from '@/assets/nav-icons/timeline-icon.svg';
import chatIcon from '@/assets/nav-icons/chat-icon.svg';
import filesIcon from '@/assets/nav-icons/files-icon.svg';
import settingsIcon from '@/assets/nav-icons/settings-icon.svg';
import taskIcon from '@/assets/nav-icons/task-icon.svg';

const routes = [
  { to: '/board', icon: boardIcon, alt: 'Main board link' },
  { to: '/timeline', icon: timelineIcon, alt: 'timeline link' },
  { to: '/chat', icon: chatIcon, alt: 'chat link' },
  { to: '/files', icon: filesIcon, alt: 'files link' },
  { to: '/settings', icon: settingsIcon, alt: 'settings link' },
  { to: '/tasks', icon: taskIcon, alt: 'tasks link' },
];
</script>

<template>
  <ul class="nav">
    <nav-bar-item v-for="route in routes" :to="route.to" :icon="route.icon" />
  </ul>
</template>
