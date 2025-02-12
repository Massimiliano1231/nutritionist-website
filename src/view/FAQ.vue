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
.FAQ {
  padding-top: 3%;
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
  text-align: center;
}

.faq-question:hover {
  color: #4d774e;
}

.faq-answer {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  text-align: center;
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


@media (max-width: 768px) {
  .FAQ {
    padding-top: 25%;
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
