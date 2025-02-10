<template>
  
  <nav class="navbar navbar-expand-lg bg-white shadow-sm fixed-top w-100 px-5">
    <div class="container-fluid">

      <a class="navbar-brand " href="#">DOTT. Domenico Silvestri</a>


      <button class="navbar-toggler" type="button" @click="toggleNavbar" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>


      <div class="collapse navbar-collapse justify-content-center"  :class="{ 'show': isOpen }"  id="navbarNav">
        <ul class="navbar-nav gap-4"> 
          <li class="nav-item">
            <router-link class="nav-link fs-5" to="/" @click="closeNavbar">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link fs-5" to="/About" @click="closeNavbar">Chi sono</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link fs-5" to="/visite" @click="closeNavbar">Visite</router-link>
          </li>
         <!-- <li class="nav-item">
            <router-link class="nav-link fs-5" to="/partner">Partner e collaborazioni</router-link>
          </li> -->
          <li class="nav-item">
            <router-link class="nav-link fs-5" to="/faq" @click="closeNavbar">FAQ</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link fs-5" to="/contatti" @click="closeNavbar">Dove trovarmi</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>



<script setup>
import { ref } from "vue";

const isOpen = ref(false);

// Funzione per alternare apertura/chiusura della navbar
const toggleNavbar = () => {
  isOpen.value = !isOpen.value;
};

// Funzione per chiudere la navbar quando si clicca su un link
const closeNavbar = () => {
  isOpen.value = false;
};
</script>



<style scoped>
body {
  padding-top: 80px; 
}

.navbar {
  height: 80px;
  justify-content: space-between;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  white-space: nowrap; 
}

.navbar-nav {
  margin-left: 300px;
  display: flex;
  justify-content: left;
  flex-grow: 1; 
}

.nav-item {
  margin: 0 15px;
}

.nav-link {
  font-size: 1.2rem;
  font-weight: 500;
  color: #333;
  padding: 10px 15px;
}

.nav-link:hover {
  color: #4d774e;
}


@media (max-width: 768px) {
  .navbar {
    height: 50px; /* Ridotta l'altezza */
    padding: 5px 15px; /* Ridotto il padding */
    display: flex;
    justify-content: center; /* Assicura che il titolo e il bottone siano allineati */
    align-items: center; /* Centra verticalmente */
  }

  .navbar-brand {
    font-size: 0.8rem; /* Ridotto rispetto a prima */
    white-space: nowrap; /* Evita che vada su due righe */
    flex-grow: 1; /* Occupa lo spazio disponibile */
    text-align: left; /* Allineato a sinistra */
  }

  .navbar-toggler {
    font-size: 1.2rem; /* Ridotta la grandezza */
    padding: 5px 8px; /* Ridotto il padding */
    border: none; /* Rimosso il bordo */
  }

  .navbar-collapse {
    background-color: #6f716f;
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 999;
    padding: 10px 0;
  }

  .navbar-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .nav-link {
    display: block; 
    padding: 15px 20px;
    color: white !important;
    font-size: 1.2rem; /* Regolato per evitare che sia troppo grande */
    padding: 10px 0; /* Spazio uniforme tra i link */
    width: 100%;
    text-align: left; /* Allinea tutto a sinistra */
    margin-left: -280px;
    white-space: nowrap; /* Evita il capo automatico */
  }

  .nav-item {
    width: 100%; /* Fa sì che ogni voce di menu occupi l'intera larghezza */
  }
  .nav-link:hover {
    background-color: rgba(255, 255, 255, 0.2); /* Evidenzia la riga al passaggio del mouse */
  }
}




</style>