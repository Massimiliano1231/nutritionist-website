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

const toggleNavbar = () => {
  isOpen.value = !isOpen.value;
};

const closeNavbar = () => {
  isOpen.value = false;
};
</script>



<style scoped>


.navbar {
  height: 10%;
  justify-content: space-between;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  white-space: nowrap; 
}

.navbar-nav {
  margin-left: -10%;
  display: flex;
  justify-content: center;
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
    height: 50px; 
    padding: 5px 15px; 
    display: flex;
    justify-content: center; 
    align-items: center; 
  }

  .navbar-brand {
    font-size: 0.8rem; 
    white-space: nowrap; 
    flex-grow: 1; 
    text-align: left; 
  }

  .navbar-toggler {
    font-size: 1.2rem; 
    padding: 5px 8px; 
    border: none; 
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
    margin-left: 15%;
    padding: 15px 20px;
    color: white !important;
    font-size: 1.2rem; 
    padding: 10px 0; 
    width: 100%;
    text-align: left; 
    white-space: nowrap; 
  }

  .nav-item {
    width: 100%;
  }
  .nav-link:hover {
    background-color: rgba(255, 255, 255, 0.2); 
  }
}

@media (max-width: 1024px) {
  .navbar {
    height: 50px; 
    padding: 5px 15px; 
    display: flex;
    justify-content: center; 
    align-items: center; 
  }

  .navbar-brand {
    font-size: 0.8rem; 
    white-space: nowrap; 
    flex-grow: 1; 
    text-align: left; 
  }

  .navbar-toggler {
    font-size: 1.2rem; 
    padding: 5px 8px; 
    border: none; 
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
    margin-left: 15%;
    padding: 15px 20px;
    color: white !important;
    font-size: 1.2rem; 
    padding: 10px 0; 
    width: 100%;
    text-align: left; 
    white-space: nowrap; 
  }

  .nav-item {
    width: 100%;
  }
  .nav-link:hover {
    background-color: rgba(255, 255, 255, 0.2); 
  }
}




</style>