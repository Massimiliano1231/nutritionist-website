
  <template>
    <a href="https://wa.me/393756836881" target="_blank" class="whatsapp-fixed"></a>
  </template>
  
  <style scoped>
  .whatsapp-fixed {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px; /* Dimensione del bottone */
    height: 60px;
    border-radius: 50%;
    text-decoration: none;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease-in-out;
    
    /* Usa l'icona PNG come sfondo */
    background-image: url('/icons8-whatsapp-48.png'); /* Assicurati che il nome sia corretto */
    background-size: cover; /* Riempi tutto il bottone */
    background-position: center;
    background-repeat: no-repeat;
  }
  
  .whatsapp-fixed:hover {
    transform: scale(1.1);
  }
  </style>
  