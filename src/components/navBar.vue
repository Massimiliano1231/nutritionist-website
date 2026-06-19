<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <img src="/Logo_nuovo.jpeg" alt="Logo" class="logo">
        <div class="brand-text">
          <span class="name">Domenico Silvestri</span>
          <span class="subtitle">Biologo Nutrizionista</span>
        </div>
      </div>

      <button class="navbar-toggler" @click="toggleNavbar">
        ☰
      </button>

      <div class="navbar-links" :class="{ 'open': isOpen }">
        <ul>
          <li><router-link to="/" @click="closeNavbar">Home</router-link></li>
          <li><router-link to="/About" @click="closeNavbar">Chi sono</router-link></li>
          <li><router-link to="/visite" @click="closeNavbar">Visite</router-link></li>
          <li><router-link to="/faq" @click="closeNavbar">FAQ</router-link></li>
          <li><router-link to="/contatti" @click="closeNavbar">Dove trovarmi</router-link></li>
          <li>
            <a
              class="booking-link"
              href="https://www.miodottore.it/domenico-silvestri/biologo-nutrizionista/san-lazzaro-di-savena?utm_source=widget-null&utm_medium=link"
              target="_blank"
              rel="nofollow noopener noreferrer"
              @click="closeNavbar"
            >
              Prenota
            </a>
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
/* Navbar */
.navbar {
  background: #f4f4f4;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

/* Contenitore */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

/* Logo e testo */
.navbar-brand {
  display: flex;
  align-items: center;
}

.logo {
  height: 60px;
  margin-right: 12px;
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.name {
  font-size: 1.6rem;
  font-weight: bold;
  color: #333;
}

.subtitle {
  font-size: 1.2rem;
  color: #4d774e;
  font-style: italic;
}

/* Navbar link */
.navbar-links ul {
  list-style: none;
  display: flex;
  gap: 28px;
  padding: 0;
  align-items: center;
}

.navbar-links ul li {
  display: inline-block;
}

.navbar-links ul li a {
  text-decoration: none;
  font-size: 1.4rem; /* 🔥 TESTI PIÙ GRANDI 🔥 */
  font-weight: 600;
  color: #333;
  transition: color 0.3s ease-in-out;
}

.navbar-links ul li a:hover {
  color: #4d774e;
}

.navbar-links ul li a.booking-link {
  color: white;
  background-color: #4d774e;
  border: 2px solid #4d774e;
  border-radius: 8px;
  padding: 10px 16px;
}

.navbar-links ul li a.booking-link:hover {
  color: #4d774e;
  background-color: white;
}

/* Menu mobile & tablet */
.navbar-toggler {
  display: none;
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
}

/* 💻 MEDIA QUERY PER TABLET (max 1024px) */
@media (max-width: 1024px) {
  .navbar-toggler {
    display: block; /* Fa comparire il bottone ☰ anche su tablet */
  }

  .navbar-links {
    position: absolute;
    top:100%;
    right: 0;
    width: 100%;
    background: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 10px 0;
    display: none;
    flex-direction: column;
    text-align: left;
    padding-left: 20px; /* Allinea a sinistra il menu */
  }

  .navbar-links.open {
    display: flex;
  }

  .navbar-links ul {
    flex-direction: column;
    gap: 20px;
  }

  .navbar-links ul li a {
    font-size: 1.3rem;
    padding: 10px 0;
  }
}

/* 📱 MEDIA QUERY PER TELEFONO (max 768px) */
@media (max-width: 768px) {
  .navbar {
    padding: 10px 20px;
  }

  .logo {
    margin-right: 8px;
  }

  .name {
    font-size: 1.2rem;
  }

  .subtitle {
    font-size: 0.9rem;
  }

  .navbar-toggler {
    display: block;
  }

  .navbar-links {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    background: white;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 10px 0;
    display: none;
    flex-direction: column;
    text-align: left;
    padding-left: 20px; /* 🔥 ALLINEA A SINISTRA IL MENU 🔥 */
  }

  .navbar-links.open {
    display: flex;
  }

  .navbar-links ul {
    flex-direction: column;
    gap: 15px;
  }

  .navbar-links ul li {
    width: 100%;
  }

  .navbar-links ul li a {
    font-size: 1.3rem;
    padding: 12px 0;
  }
}
</style>
