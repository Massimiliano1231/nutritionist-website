<template>
<div class="visit">
    <h1 class="title">SVOLGIMENTO DELLE VISITE</h1>

    <div class="container">
      <div v-for="(step, index) in steps" :key="index" class="step">
        <h2 class="step-title">{{ step.title }}</h2>
        <p class="step-description">{{ step.description }}</p>
        
        <div v-if="index === 0 || index === 3" class="separator">
          <img :src="step.image" alt="Separatore" class="separator-image">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const steps = [
  { 
    title: "1. Prima visita", 
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe doloribus quae quos repellendus labore, delectus autem nemo! Enim voluptas nobis maiores voluptatibus placeat earum inventore incidunt architecto nihil aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe doloribus quae quos repellendus labore, delectus autem nemo!", 
    image: "/home_banner.png" 
  },
  { 
    title: "2. Valutazione antropometrica", 
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe doloribus quae quos repellendus labore, delectus autem nemo! Enim voluptas nobis maiores voluptatibus placeat earum inventore incidunt architecto nihil aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe doloribus quae quos repellendus labore, delectus autem nemo!", 
    image: "/home_banner.png" 
  },
  { 
    title: "3. Consegna piano nutrizionale", 
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe doloribus quae quos repellendus labore, delectus autem nemo! Enim voluptas nobis maiores voluptatibus placeat earum inventore incidunt architecto nihil aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe doloribus quae quos repellendus labore, delectus autem nemo!", 
    image: "/home_banner.png" 
  },
  { 
    title: "4. Follow-up e aggiustamenti", 
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe doloribus quae quos repellendus labore, delectus autem nemo! Enim voluptas nobis maiores voluptatibus placeat earum inventore incidunt architecto nihil aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe doloribus quae quos repellendus labore, delectus autem nemo!", 
    image: "/home_banner.png" 
  },
  { 
    title: "5. Mantenimento e supporto", 
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe doloribus quae quos repellendus labore, delectus autem nemo! Enim voluptas nobis maiores voluptatibus placeat earum inventore incidunt architecto nihil aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe doloribus quae quos repellendus labore, delectus autem nemo!", 
    image: "/home_banner.png" 
  }
];
</script>


<style scoped>
.visit {
  margin-left: -350px;
  padding-top: 100px;
  padding-bottom: 100px; 
  width: 100vw;
  background-color: #f9f5f0;
}

.title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #2d2d2d;
  margin-bottom: 50px;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.step {
  margin-bottom: 40px;
}

.step-title {
  font-size: 2rem;
  font-weight: bold;
  color: #3d3d3d;
  margin-bottom: 10px;
  text-align: left; 
}

.step-description {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  text-align: left; 
}

.separator {
  display: flex;
  justify-content: center;
  margin: 50px 0;
}

.separator-image {
  width: 100%;
  max-width: 900px; 
  border-radius: 15px;
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .visit {
    padding-left: -30px;
    margin-left: -30px;
    margin-right: 0;    
    width: 100vw;
    height: auto;
  }

  .title {
    font-size: 2rem; 
    text-align: center;
    margin-bottom: 30px;
  }

  .container {
    max-width: 100%;
    padding: 0 15px;
  }

  .step {
    margin-bottom: 30px;
    text-align: center; 
  }

  .step-title {
    font-size: 1.6rem; 
    text-align: left;
  }

  .step-description {
    font-size: 1.1rem;
    text-align: left;
  }

  .separator {
    margin: 30px 0;
  }

  .separator-image {
    width: 90%;
    max-width: 600px; 
  }
}



</style>
