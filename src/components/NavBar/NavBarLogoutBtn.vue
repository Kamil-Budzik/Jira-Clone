<script setup lang="ts">
import LogoutIcon from '@/assets/nav-icons/logout.svg';
import { signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';
import auth from '../../auth';
import { LINKS } from '../../router';

const router = useRouter();

const handleLogout = async () => {
  signOut(auth);
  router.push(LINKS.SIGN_IN);
};
</script>

<template>
  <div
    class="my-6 p-2 rounded-2xl border-4 border-transparent transition hover:border-gray-500"
    title="Logout"
  >
    <button @click="handleLogout">
      <img :src="LogoutIcon" alt="Logout" class="w-8" />
    </button>
  </div>
</template>

<style scoped>
.active {
  @apply border-primary hover:border-primary;
}
</style>
