<template>
    <nav class="navbar navbar-expand-lg bg-white shadow-sm fixed-top w-100 px-5">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold fs-4" href="#">Dott. Domenico Silvestri</a>
  
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul class="navbar-nav mx-auto gap-5 px-5 flex-nowrap">
            <li class="nav-item">
              <router-link class="nav-link fs-5" to="/">Home</router-link>
            </li>
  <li class="nav-item">
    <router-link class="nav-link fs-5" to="/About">Chi sono</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link fs-5" to="/visite">Visite</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link fs-5" to="/faq">FAQ</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link fs-5" to="/contatti">Contatti</router-link>
  </li>
</ul>

  
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  body {
    padding-top: 80px; 
  }
  
  .navbar {
    height: 80px;
  }
  
  .navbar-brand {
    font-size: 1.5rem;
  }
  
  .nav-link {
    font-size: 1.2rem;
    font-weight: 500;
    color: #333;
    padding: 10px 20px;
  }
  
  .nav-link:hover {
    color: #4d774e;
  }
  
  .btn-success {
    background-color: #4d774e;
    border: none;
    padding: 10px 20px;
  }
  
  .btn-success:hover {
    background-color: #3e6240;
  }
  </style>
  