<template>
    <div class="home">

      <div class="banner">
        <img src="/home_banner.png" alt="Team di nutrizionisti" class="full-width">
      </div>
  
      <section class="story container py-5">
        <div class="row align-items-center">

          <div class="col-lg-7">
            <h2 class="title">La mia storia</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum vitae modi quo, doloremque natus dolorum quis, sed aperiam ab libero obcaecati nemo laboriosam possimus praesentium distinctio beatae eos, ea eius!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum labore saepe corrupti nostrum maiores aliquid porro voluptates deserunt fugit consequuntur dolorem fugiat, ipsa animi, delectus recusandae tenetur. Quidem, magnam fugiat.
            </p>
            <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, maxime! Suscipit, dolorum expedita cumque qui minus facere praesentium fuga quisquam animi modi repellat culpa. Sequi recusandae autem voluptatem enim ut.
            </p>

          </div>
  
          <div class="col-lg-5 image-container">
  <img src="/home_banner.png" alt="Nutrizionista" class="img-fluid rounded">
</div>
        </div>
      </section>

      <section class="benefits">
    <div class="container">

      <h2 class="title-p">sei motivi per affidarsi ad un esperto</h2>

      <div class="benefits-list">
        <div class="benefit" v-for="(benefit, index) in benefits" :key="index">
          <span class="number">{{ index + 1 }}</span>
          <p><strong>{{ benefit.bold }}</strong> {{ benefit.text }}</p>
        </div>
      </div>

      
    </div>
  </section>

  <section class="how-it-works">
    <div class="container">
      <div class="how-it-works-content">
        <div class="text-section">
          <h2 class="title-h">Come funziona?</h2>
          <div class="step" v-for="(step, index) in steps" :key="index">
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-description">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="strengths">
    <div class="container">
      <h2 class="title-s">punti di forza</h2>
      <div class="strength-card">
        <button class="arrow left-arrow" @click="prevCard">←</button>
        <div class="card">
          <h3 class="card-title">{{ strengths[currentIndex].title }}</h3>
          <p class="card-description">{{ strengths[currentIndex].description }}</p>
        </div>
        <button class="arrow right-arrow" @click="nextCard">→</button>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="brand">
        </div>
        <h2 class="footer-title">Restiamo in contatto</h2>
        <p class="footer-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, illum officia soluta aliquid asperiores mollitia culpa exercitationem totam, accusantium hic nobis. Maxime obcaecati, quisquam architecto dignissimos eveniet aperiam possimus eligendi..
        </p>
        <div class="contact-info">
          <div class="contact-item">
            <img src="/icons/email.svg" alt="Email" class="contact-icon" />
                  <div>
              <h3>Email</h3>
              <p>domenicosilvestri.1995@gmail.com</p>
            </div>
          </div>
          <div class="contact-item">
            <span class="icon">📞</span>
            <div>
              <h3>Telefono</h3>
              <p>(+39) 375 683 6881</p>
            </div>
          </div>
          <div class="contact-item">
            <img src="/icons/whatsapp.svg" alt="WhatsApp" class="contact-icon" />
                <div>
              <h3>Whatsapp</h3>
              <a href="https://wa.me/393756836881" target="_blank" class="whatsapp-button">
                 Scrivimi su WhatsApp
              </a>  
            </div>
          </div>
        </div>
      </div>
      <p class="footer-bottom">© 2025 DOTT. DOMENICO SILVESTRI - PIANORO (BO). Informativa sulla Privacy
</p>
    </div>
  </footer>    


    </div>
  </template>
  
  <script setup>

import { ref } from "vue";

const currentIndex = ref(0);


const strengths = [
  { title: "Dimagrimento efficace", description: "loremddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd." },
  { title: "Miglioramento delle performance", description: "loremddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd" },
  { title: "Educazione alimentare", description: "loremddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd." },
  { title: "Piani nutrizionali personalizzati", description: "loremddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd" },
  { title: "Supporto costante", description: "loremddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd" }
];

const nextCard = () => {
  currentIndex.value = (currentIndex.value + 1) % strengths.length;
};

const prevCard = () => {
  currentIndex.value = (currentIndex.value - 1 + strengths.length) % strengths.length;
};


  const benefits = [
    { bold: "Ti aiuta", text: "a capire quali sono gli errori alimentari più frequenti." },
    { bold: "Ti guida", text: "nella scelta di una adeguata e corretta alimentazione." },
    { bold: "Migliora", text: "il tuo stato di salute attraverso un nuovo regime alimentare." },
    { bold: "Crea", text: "un percorso di educazione alimentare personalizzato." },
    { bold: "Ti sostiene", text: "psicologicamente per ottenere i risultati sperati." },
    { bold: "Ti supporta", text: "durante il regime dietetico e il suo mantenimento." }
  ];


  const steps = [
  { title: "Contattaci e fissa un appuntamento", description: "Prenota una visita per discutere i tuoi obiettivi nutrizionali e ricevere una prima consulenza." },
  { title: "La prima visita", description: "Un incontro dettagliato per valutare le tue esigenze alimentari e il tuo stile di vita." },
  { title: "La consegna del piano nutrizionale", description: "Ricevi un piano alimentare personalizzato creato in base alle tue necessità." },
  { title: "I controlli", description: "Monitoriamo i tuoi progressi e apportiamo eventuali modifiche per ottimizzare i risultati." },
  { title: "Il mantenimento", description: "Supporto continuo per aiutarti a mantenere uno stile di vita sano e bilanciato nel tempo." }
];



  </script>



  <style scoped>

  .home {    
    padding-left: -200px;
    margin-left: -350px;
    width: 100vw;
    height: 100vw;
    margin-right: -300px;
    background-color: #f9f5f0;
  }
    .banner {
        margin-top: 50px;
        height: 40%;
    }
  .banner img {
    width: 100%;
    height: 100%;
    display: block;
  }
  .story {
  margin-top: 100px; 
  max-width: 1200px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}


.title {
    margin-bottom: 50px;
    margin-top:50px; 
  font-size: 2.5rem;
  font-weight: bold;
  color: #2d2d2d;
  text-align: left;
}
.story p {
    margin-bottom: 1rem; 
  text-align: left;
  margin-left: 0px; 
  font-family: 'Georgia', serif;
  font-size: 1.2rem;
}

.story .image-container {
  display: flex;
  justify-content: flex-end; 
  align-items: center; 
  height: 100%; 
}

.story img {
  margin-right: -250px;
  max-width: 150%; 
  height: 500px;
}
  
  .btn-success {
    background-color: #4d774e;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
  }
  
  .btn-success:hover {
    background-color: #3e6240;
  }

  .benefits {
  background-color: #ece2d0; 
  padding: 60px 20px;
  border-radius: 10px;
}

.title-p {
  text-align: left;
  max-width: 1200px; 
  margin: 0 auto 40px auto;
  font-size: 3rem;
  font-weight: bold;
  color: #2d2d2d;
}

.benefits-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 40px;
  max-width: 1200px; 
  margin: 0 auto; 
  padding-left: 0; 
}

.benefit {
  display: flex;
  align-items: flex-start;
  text-align: left;
  gap: 15px;
}

.number {
  font-size: 3.5rem;
  font-weight: bold;
  color: #9b6647;
  flex-shrink: 0; 
  width: 30px;
  text-align: right;
}

.benefit p {
  font-size: 1.2rem;
  color: #3d3d3d;
  line-height: 1.6;
}

.how-it-works {
  background-color: #f9f5f0;
  padding: 80px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto; 
}

.title-h {
  font-size: 2.8rem;
  font-weight: bold;
  color: #2d2d2d;
  margin-bottom: 40px;
  text-align: left; 
}

.how-it-works-content {
  display: flex;
  flex-direction: column; 
  align-items: flex-start; 
}

.step {
  margin-bottom: 30px;
}

.step-title {
  font-size: 2rem;
  font-weight: bold;
  color: #3d3d3d;
  text-align: left;
}

.step-description {
  font-size: 1.2rem;
  color: #777;
  line-height: 1.6;
  text-align: left;
  margin-left: 0; 
}


.strengths {
  background-color: #f3dfd1; 
  padding: 80px 0;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.title-s {
  font-size: 2.8rem;
  font-weight: bold;
  color: #2d2d2d;
  margin-bottom: 40px;
}

.strength-card {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  width: 500px;
  text-align: center;
}

.card-title {
  font-size: 1.6rem;
  font-weight: bold;
  color: #9b6647;
  margin-bottom: 10px;
}

.card-description {
  font-size: 1.2rem;
  color: #3d3d3d;
}

.arrow {
  background: none;
  border: none;
  font-size: 2rem;
  color: #5b6d58;
  cursor: pointer;
  transition: 0.3s;
}

.arrow:hover {
  color: #3e4f40;
}

.left-arrow {
  margin-right: 10px;
}

.right-arrow {
  margin-left: 10px;
}

.footer {
  background-color: #9C887C; 
  color: white;
  padding: 60px 0;
  text-align: center;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.brand-box {
  background: white;
  color: #4a5a47;
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 10px;
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.footer-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: left;
}

.footer-description {
  text-align: left;
  max-width: 600px;
  margin-bottom: 30px;
}

.contact-info {
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 15px;
}

.icon {
  font-size: 2rem;
}

.whatsapp-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white; 
  color: #3e4f40; 
  font-size: 0.8rem;
  font-weight: bold;
  border: 2px solid #3e4f40; 
  padding: 12px 20px;
  border-radius: 30px; 
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.whatsapp-button:hover {
  background-color: #f9f9f9; 
  transform: scale(1.05);
}

.whatsapp-button:active {
  transform: scale(0.98);
}

.whatsapp-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  filter: grayscale(100%) contrast(1.2); 
}



.footer-bottom {
  margin-top: 40px;
  font-size: 0.9rem;
  opacity: 0.8;
}

.footer-bottom a {
  color: white;
  text-decoration: underline;
}




/* Media Query per schermi piccoli (mobile) */
@media (max-width: 768px) {
  
  /* Rimuove margini negativi e imposta il layout fluido */
  .home {
    padding-left: -30px;
    margin-left: -30px;
    margin-right: 0;
    width: 100vw;
    height: auto;
  }

  /* Banner: Assicura che l'immagine copra l'intera larghezza */
  .banner {
    height: auto;
  }

  .banner img {
    width: 100%;
    height: 300px;
  }

  /* Sezione "La mia storia" */
  .story {
    margin-top: -40px;
    width: 90%;
  }

  .story .image-container {
    justify-content: center;
    margin-top: 20px;
  }

  .story img {
    width: 100%;
    max-width: 100%;
    height: auto;
    margin-right: 0;
  }

  /* Titoli più piccoli per mobile */
  .title, .title-p, .title-h, .title-s {
    font-size: 2rem;
    text-align: center;
  }

  /* Lista dei benefici: cambia da 3 colonne a 1 */
  .benefits-list {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .benefit {
    text-align: center;
    flex-direction: column;
    align-items: center;
  }

  /* Sezione "Come funziona?" */
  .how-it-works-content {
    align-items: center;
  }

  .step-title {
    font-size: 1.8rem;
    text-align: center;
  }

  .step-description {
    font-size: 1rem;
    text-align: center;
  }

  /* Sezione punti di forza - diventa a colonna */
  .strength-card {
    flex-direction: column;
    gap: 20px;
  }

  .card {
    width: 100%;
    max-width: 90%;
    padding: 20px;
  }

  .arrow {
    font-size: 1.5rem;
  }

  /* Footer - imposta tutto al centro */
  .footer {
    text-align: center;
    padding: 40px 20px;
  }

  .contact-info {
    flex-direction: column;
    gap: 20px;
  }

  .contact-item {
    flex-direction: column;
    text-align: center;
  }

  .whatsapp-button {
    width: 100%;
  }

}



  </style>
