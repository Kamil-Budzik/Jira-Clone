<script setup lang="ts">
import { ref } from 'vue';
import NavBarItem from './NavBarItem.vue';
import NavBarLogoutBtn from './NavBarLogoutBtn.vue';
import boardIcon from '@/assets/nav-icons/board-icon.svg';
import timelineIcon from '@/assets/nav-icons/timeline-icon.svg';
import chatIcon from '@/assets/nav-icons/chat-icon.svg';
import filesIcon from '@/assets/nav-icons/files-icon.svg';
import settingsIcon from '@/assets/nav-icons/settings-icon.svg';
import taskIcon from '@/assets/nav-icons/task-icon.svg';
import { LINKS } from '../../router';

const isActive = ref('/board');
const props = defineProps({
  isLoggedIn: Boolean,
});

const routes = [
  { to: LINKS.BOARD, icon: boardIcon, alt: 'Main board' },
  { to: LINKS.TIMELINE, icon: timelineIcon, alt: 'Timeline' },
  { to: LINKS.TASKS, icon: taskIcon, alt: 'Tasks' },
  { to: LINKS.CHAT, icon: chatIcon, alt: 'Chat' },
  { to: LINKS.FILES, icon: filesIcon, alt: 'Files' },
  { to: LINKS.SETTINGS, icon: settingsIcon, alt: 'Settings' },
];
</script>

<template>
  <ul class="h-1/2" v-if="isLoggedIn">
    <nav-bar-item
      v-for="route in routes"
      :to="route.to"
      :icon="route.icon"
      :key="route.to"
      :alt="route.alt"
      :is-active="isActive === route.to"
      @click="isActive = route.to"
    />
    <!-- <li>
      <nav-bar-logout-btn />
    </li> -->
  </ul>
</template>
