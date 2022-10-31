<script lang="ts">
import { getAuth } from 'firebase/auth';

const auth = getAuth();

console.log(auth.currentUser);
</script>

<template>
  <section>
    <h2>Board</h2>
  </section>
</template>
