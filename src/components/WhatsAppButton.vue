<template>
  <!-- Pulsante Email -->
  <a href="mailto:domenicosilvestri.1995@gmail.com" class="email-fixed"></a>

  <!-- Pulsante WhatsApp -->
  <a href="https://wa.me/393756836881" target="_blank" class="whatsapp-fixed"></a>
</template>

<style scoped>
/* Pulsante Email */
.email-fixed {
  position: fixed;
  bottom: 90px; /* 🔥 Posizionato sopra WhatsApp 🔥 */
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  text-decoration: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;

  background-image: url('/gmail'); /* 🔥 Sostituisci con l'icona della tua email 🔥 */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.email-fixed:hover {
  transform: scale(1.1);
}

/* Pulsante WhatsApp */
.whatsapp-fixed {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  text-decoration: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;

  background-image: url('/icons8-whatsapp-48.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.whatsapp-fixed:hover {
  transform: scale(1.1);
}
@media (max-width: 1024px) {
  .email-fixed {
    width: 50px;
    height: 50px;
  }
  .whatsapp-fixed {
    width: 50px;
    height: 50px;
  }
}

@media (max-width: 768px) {
  .email-fixed {
    width: 40px;
    height: 40px;
  }
  .whatsapp-fixed {
    width: 50px;
    height: 50px;
  }
}
</style>
