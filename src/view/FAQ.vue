<template>
  <div class="FAQ">
    <div class="faq-header">
      <h1 class="title">FAQ</h1>
      <h2 class="subtitle">Domande frequenti</h2>
    </div>
    <div class="faq-container">
      <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
        <!-- Domanda cliccabile -->
        <button @click="toggleFAQ(index)" class="faq-question">
          {{ faq.question }}
        </button>

        <!-- Risposta con animazione più lenta e spostamento delle domande sotto -->
        <transition name="expand">
          <p v-if="activeIndex === index" class="faq-answer">
            {{ faq.answer }}
          </p>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Stato attivo per tracciare la domanda aperta
const activeIndex = ref(null);

// Funzione per alternare l'apertura delle domande
const toggleFAQ = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

// Lista delle domande frequenti con risposte
const faqs = ref([
  { question: "Lorem ipsum dolor sit amet?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique." },
  { question: "Curabitur eleifend nisl nec?", answer: "Curabitur eleifend nisl nec bibendum lobortis. Duis at augue sit amet ipsum viverra vehicula." },
  { question: "Pellentesque habitant morbi?", answer: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." },
  { question: "Fusce vehicula dolor ut?", answer: "Fusce vehicula dolor ut velit facilisis, in consectetur justo viverra. Integer ac orci eget ligula." },
  { question: "Quisque euismod nulla?", answer: "Quisque euismod nulla non eros aliquet, at vehicula risus viverra. Cras aliquet nunc sed nulla." },
  { question: "Nam fermentum magna?", answer: "Nam fermentum magna vel est venenatis, eget malesuada mi aliquet. Etiam eget magna a ligula." },
  { question: "In hac habitasse platea?", answer: "In hac habitasse platea dictumst. Sed facilisis eros sit amet lacus consectetur malesuada." },
  { question: "Vestibulum ante ipsum primis?", answer: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae." },
  { question: "Donec ullamcorper libero?", answer: "Donec ullamcorper libero eget eros cursus, eget cursus est facilisis. Nunc tincidunt suscipit." },
  { question: "Nulla facilisi?", answer: "Nulla facilisi. Integer nec magna sed nulla ornare vehicula a ut sapien. Ut at nisi sapien." }
]);
</script>

<style scoped>
/* Stile della sezione FAQ */
.FAQ {
  margin-left: -350px; 
  padding-top: 50px;
  width: 100vw;
  background-color: #ece2d0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Titolo */
.faq-header {
  background-color: rgb(214, 197, 174);; /* Verde oliva scuro */
  height: 400px;
  width: 100%;
  padding: 50px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

/* Titolo principale */
.title {
  font-size: 5.0rem; /* Titolo grande */
  font-weight: bold;
  color: #1f1f1f; /* Bianco */
  margin-bottom: 10px;
}

/* Sottotitolo */
.subtitle {
  font-size: 3.5rem;
  font-weight: normal;
  color: #1f1f1f;
}

/* Contenitore FAQ */
.faq-container {
  padding-top: 100px;
  width: 60%;
  max-width: 800px;
  text-align: center;
}

/* Singolo elemento FAQ */
.faq-item {
  margin-bottom: 15px;
  overflow: hidden;
  transition: all 2.0s ease-in-out; /* Spostamento fluido */
}

/* Stile per la domanda */
.faq-question {
  background: none;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  width: 100%;
  text-align: center;
}

.faq-question:hover {
  color: #4d774e;
}

/* Stile per la risposta */
.faq-answer {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  text-align: center;
  padding: 10px 20px;
}

/* Contenitore della risposta con altezza dinamica */
.expand-enter-active, .expand-leave-active {
  transition: height 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease-in-out, transform 0.6s ease-in-out;
  overflow: hidden;
}

/* Stato iniziale: risposta chiusa */
.expand-enter-from, .expand-leave-to {
  height: 0;
  opacity: 0;
  transform: translateY(-5px); /* Movimento delicato all'apertura */
}

/* Stato finale: risposta aperta */
.expand-enter-to, .expand-leave-from {
  height: auto; /* Altezza dinamica */
  opacity: 1;
  transform: translateY(0);
}


@media (max-width: 768px) {
  .FAQ {
    padding-left: -30px;
    margin-left: -30px;
    margin-right: 0;    
    width: 100vw;
    height: auto;
  }

  /* Riduzione altezza intestazione FAQ */
  .faq-header {
    height: 250px;
    padding: 30px 0;
    margin-top: -40px;
  }

  /* Titolo principale ridotto */
  .title {
    font-size: 3rem;
    margin-bottom: 5px;
  }

  /* Sottotitolo ridotto */
  .subtitle {
    font-size: 2rem;
  }

  /* Contenitore FAQ ottimizzato */
  .faq-container {
    padding-top: 50px;
    width: 90%;
    max-width: 100%;
  }

  /* Elementi della lista FAQ */
  .faq-item {
    margin-bottom: 20px;
  }

  /* Dimensione del testo della domanda */
  .faq-question {
    font-size: 1.3rem;
    text-align: left;
  }

  /* Dimensione del testo della risposta */
  .faq-answer {
    font-size: 1.1rem;
    text-align: left;
  }
}


</style>
