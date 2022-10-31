<script setup lang="ts">
import LogoutIcon from '@/assets/nav-icons/logout.svg';
import { signOut } from 'firebase/auth';
import auth from '../../auth';

const handleLogout = async () => {
  signOut(auth);
  console.log('siema');
};
</script>

<template>
  <li
    class="my-6 p-2 rounded-2xl border-4 border-transparent transition hover:border-gray-500"
    title="Logout"
  >
    <button @click="handleLogout">
      <img :src="LogoutIcon" alt="Logout" class="w-8" />
    </button>
  </li>
</template>

<style scoped>
.active {
  @apply border-primary hover:border-primary;
}
</style>
