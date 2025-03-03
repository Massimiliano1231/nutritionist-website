<template>
  <div class="FAQ">
    <div class="faq-header">
      <h1 class="title">FAQ</h1>
      <h2 class="subtitle">Domande frequenti</h2>
    </div>
    <div class="faq-container">
      <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
        <button @click="toggleFAQ(index)" class="faq-question">
          {{ faq.question }}
        </button>

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

const activeIndex = ref(null);

const toggleFAQ = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const faqs = ref([
  { 
    question: "Come posso iniziare il mio percorso nutrizionale?", 
    answer: "È semplicissimo! Puoi prenotare il tuo primo appuntamento contattandomi direttamente su WhatsApp o via mail. Ti invierò un questionario iniziale per capire meglio le tue esigenze, i tuoi obiettivi e il tuo stile di vita. Dopo di che, fisseremo la prima visita per impostare il percorso più adatto a te." 
  },
  { 
    question: "Seguire un piano nutrizionale significa rinunciare ai miei cibi preferiti?", 
    answer: "Assolutamente no! Il segreto per un’alimentazione sana e duratura è l’equilibrio. Nessun alimento è vietato, l’importante è imparare a gestire le quantità e le frequenze con consapevolezza. Potrai continuare a gustare i tuoi piatti preferiti, senza sensi di colpa!" 
  },
  { 
    question: "Devo portare gli esami del sangue alla prima visita?", 
    answer: "Sì, sarebbe molto utile! Se hai esami del sangue recenti (preferibilmente degli ultimi 6 mesi), portali con te alla prima visita. Questo mi aiuterà a comprendere meglio il tuo stato di salute e a impostare un piano nutrizionale ancora più personalizzato." 
  },
  { 
    question: "Posso mangiare fuori senza compromettere il mio percorso?", 
    answer: "Certo! La socialità e il piacere del cibo non devono essere sacrificati. Ti fornirò strategie pratiche per gestire pranzi e cene fuori casa senza sensi di colpa e senza rinunciare ai tuoi progressi." 
  },
  { 
    question: "È possibile dimagrire senza soffrire la fame?", 
    answer: "Assolutamente sì! Un buon piano nutrizionale deve saziarti e darti energia. Ti aiuterò a scegliere gli alimenti giusti e a bilanciare i pasti in modo che tu non debba mai sentirti affamato/a o privato/a di qualcosa." 
  },
  { 
    question: "E se non ho tempo per cucinare?", 
    answer: "Nessun problema! Il piano sarà studiato anche in base ai tuoi ritmi di vita. Ti darò consigli su pasti semplici, veloci e pratici, perfetti per chi ha poco tempo ma vuole comunque mangiare in modo sano ed equilibrato." 
  },
  { 
    question: "Perché devo fare la bioimpedenziometria e altre misurazioni?", 
    answer: "La BIA (bioimpedenziometria) è uno strumento di analisi che mi permette di capire davvero come sta il tuo corpo, andando oltre il semplice numero sulla bilancia. Grazie a questa valutazione posso misurare idratazione, ritenzione idrica, composizione corporea e metabolismo basale. Queste informazioni mi aiuteranno a costruire un piano alimentare su misura per te!" 
  },
  { 
    question: "Il piano nutrizionale sarà uguale per sempre?", 
    answer: "No, il piano si adatterà ai tuoi progressi e ai cambiamenti della tua vita. Durante le visite di follow-up valuteremo insieme eventuali modifiche per rendere il percorso sempre più efficace e sostenibile." 
  },
  { 
    question: "Posso seguire il percorso anche se ho intolleranze o esigenze alimentari particolari?", 
    answer: "Certamente! Il piano sarà completamente personalizzato in base alle tue necessità, comprese intolleranze, allergie o scelte alimentari come vegetarianismo o veganismo." 
  },
  { 
    question: "Dopo aver raggiunto il mio obiettivo, cosa succede?", 
    answer: "Una volta raggiunti i tuoi obiettivi, ti guiderò nella fase di mantenimento, per evitare il classico effetto yo-yo. Imparerai a gestire la tua alimentazione in modo autonomo, mantenendo i risultati nel tempo senza sacrifici." 
  },
  { 
    question: "Quali sono le modalità di pagamento? La visita è detraibile?", 
    answer: "Accetto pagamenti con contanti, bancomat, carta di credito/debito e bonifico bancario. Secondo la nuova normativa fiscale, la visita nutrizionale è detraibile solo se pagata con strumenti tracciabili (quindi no contanti). Ti fornirò regolare fattura che potrai utilizzare per la dichiarazione dei redditi. Per maggiori dettagli, consulta il tuo commercialista o il CAF di riferimento." 
  }
]);

</script>

<style scoped>
.FAQ {
  padding-top: 7%;
  padding-bottom: 100px; 
  width: 100%;
  height: 100%;
  background-color: #f9f5f0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.faq-header {
  background-color: rgb(214, 197, 174);; 
  height: 400px;
  width: 100%;
  padding: 50px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 5.0rem; 
  font-weight: bold;
  color: #1f1f1f; 
  margin-bottom: 10px;
}

.subtitle {
  font-size: 3.5rem;
  font-weight: normal;
  color: #1f1f1f;
}

.faq-container {
  padding-top: 100px;
  width: 60%;
  max-width: 800px;
  text-align: center;
}

.faq-item {
  margin-bottom: 15px;
  overflow: hidden;
  transition: all 2.0s ease-in-out; 
}

.faq-question {
  background: none;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  width: 100%;
  text-align: left;
}

.faq-question:hover {
  color: #4d774e;
}

.faq-answer {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  text-align: left;
  padding: 10px 20px;
}

.expand-enter-active, .expand-leave-active {
  transition: height 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease-in-out, transform 0.6s ease-in-out;
  overflow: hidden;
}

.expand-enter-from, .expand-leave-to {
  height: 0;
  opacity: 0;
  transform: translateY(-5px); 
}

.expand-enter-to, .expand-leave-from {
  height: auto; 
  opacity: 1;
  transform: translateY(0);
}
@media (max-width: 1024px) {
  .FAQ {
    padding-top: 15%;
    width: 100%;
    height: 100%;
  }
}

@media (max-width: 768px) {
  .FAQ {
    padding-top: 40%;
    width: 100%;
    height: 100%;
  }

  .faq-header {
    height: 250px;
    padding: 30px 0;
    margin-top: -40px;
  }

  .title {
    font-size: 3rem;
    margin-bottom: 5px;
  }

  .subtitle {
    font-size: 2rem;
  }

  .faq-container {
    padding-top: 50px;
    width: 90%;
    max-width: 100%;
  }

  .faq-item {
    margin-bottom: 20px;
  }

  .faq-question {
    font-size: 1.3rem;
    text-align: left;
  }

  .faq-answer {
    font-size: 1.1rem;
    text-align: left;
  }
}


</style>
