<script setup>
import Navbar from './components/navBar.vue';
</script>

<template>
  <div>
    <Navbar />

    <!-- Qui verranno caricate le varie pagine -->
    <router-view />
  </div>
</template>

<style scoped>
</style>
