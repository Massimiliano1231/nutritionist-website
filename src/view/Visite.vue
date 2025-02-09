<template>
  <div class="visit">
    <!-- Titolo centrato -->
    <h1 class="title">SVOLGIMENTO DELLE VISITE</h1>

    <div class="container">
      <div v-for="(step, index) in steps" :key="index" class="step" :class="{'reverse': index % 2 !== 0}">
        <div class="text-container">
          <h2 class="step-title">{{ step.title }}</h2>
          <p class="step-description">{{ step.description }}</p>
        </div>
        <div class="image-container">
          <img :src="step.image" :alt="step.title" class="step-image">
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
  padding-top: 100px;
    padding-left: -200px;
    margin-left: -350px;
    width: 100vw;
    height: 100vw;
    margin-right: -300px;
    background-color: #f9f5f0;
}

.title {
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
  color: #2d2d2d;
  margin-bottom: 50px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Stile generale delle sezioni */
.step {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 60px;
}

/* Alternanza di layout */
.step.reverse {
  flex-direction: row-reverse;
}

/* Stile del testo */
.text-container {
  flex: 1;
  padding: 20px;
}

.step-title {
  text-align: left;
  font-size: 2rem;
  font-weight: bold;
  color: #3d3d3d;
  margin-bottom: 10px;
}

.step-description {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  text-align: left;
}

/* Stile dell'immagine */
.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
}

.step-image {
  width: 100%;
  max-width: 500px;
  height: auto;
  border-radius: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.step-image:hover {
  transform: translateY(-5px);
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.2);
}
</style>
