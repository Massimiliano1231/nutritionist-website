<script setup>
import Navbar from './components/navBar.vue';
import WhatsAppButton from "./components/WhatsAppButton.vue";
</script>

<template>
  <div>


    <Navbar />
    <router-view />
    <WhatsAppButton />

    
  </div>
</template>

<style scoped>
@media (max-width: 768px) {

html, body {
    overflow-x: hidden;
    width: 100vw;
}



}
</style>
