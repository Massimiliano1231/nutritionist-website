<script setup>
import Navbar from './components/navBar.vue';
import WhatsAppButton from "./components/WhatsAppButton.vue";
</script>

<template>
  <div>
    <Navbar />

    <!-- Qui verranno caricate le varie pagine -->
    <router-view />
    <WhatsAppButton />
  </div>
</template>

<style scoped>
</style>
