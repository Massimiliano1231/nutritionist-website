<template>
<div class="home">

    <div class="banner">
      <img src="/imgHomeAlta12.jpg" alt="Team di nutrizionisti" class="full-width">
    </div>

    <section class="story">

  <div class="row1">
    <h2>Dottor Domenico Silvestri</h2>
    <!-- Colonna per il testo -->
    <div class="coll">
<p>
  Sono il <strong>Dott. Domenico Silvestri</strong>, <strong>biologo nutrizionista e chinesiologo</strong>. Dopo la laurea in <strong>Scienze delle Attività Motorie e Sportive</strong> a Bologna, ho scelto di approfondire il legame tra nutrizione e benessere con una magistrale in <strong>Biologia della Salute, curriculum nutrizionale</strong>.
</p>
<p>
  Dopo aver superato l'esame di Stato da biologo, ho arricchito la mia formazione sotto la guida della <strong>Dott.ssa Francesca Gamberini</strong>, affinando competenze ed esperienza.
</p>
<p>
  Oggi lavoro come <strong>biologo nutrizionista</strong> a Bologna e provincia, occupandomi di <strong>nutrizione sportiva</strong> e di <strong>piani alimentari personalizzati</strong> per persone in condizioni fisiologiche e patologiche.
</p>
<p>
  Il mio approccio si basa sull’educare i pazienti a <strong>un’alimentazione consapevole, equilibrata e sostenibile</strong>, lasciando spazio ai momenti di convivialità che la vita ci offre. Il mio obiettivo è creare <strong>piani nutrizionali su misura</strong>, adattandoli allo stile di vita di ogni paziente e aiutandolo a sviluppare un <strong>rapporto sano con il cibo</strong>.
</p>
<p>
  Se vuoi migliorare il tuo rapporto con il cibo e imparare a nutrirti in modo consapevole senza rinunce, <strong>contattami</strong> e <strong>prenota subito un appuntamento</strong>!
</p>

    </div>

    <!-- Colonna per l'immagine 
    <div class="colll">
      <img src="/home_banner.png" alt="Nutrizionista" class="img-fluid rounded story-img">
    </div> -->
  </div>
</section>

<section class="services">
  <h2 class="section-title">Specializzato in:</h2>
  <div class="services-grid">
    <div class="service-item">
      <img src="/home_banner.png" alt="Dimagrimento e perdita di peso">
      <p>Dimagrimento e perdita di peso</p>
    </div>
    <div class="service-item">
      <img src="/home_banner.png" alt="Ricomposizione corporea e aumento di peso">
      <p>Ricomposizione corporea e aumento di peso</p>
    </div>
    <div class="service-item">
      <img src="/home_banner.png" alt="Alimentazione per atleti e sportivi">
      <p>Alimentazione per atleti e sportivi</p>
    </div>
    <div class="service-item">
      <img src="/home_banner.png" alt="Nutrizione femminile">
      <p>Nutrizione femminile: salute e benessere nelle diverse fasi della vita</p>
    </div>
    <div class="service-item">
      <img src="/home_banner.png" alt="Nutrizione e condizioni patologiche">
      <p>Nutrizione e condizioni patologiche</p>
    </div>
    <div class="service-item">
      <img src="/home_banner.png" alt="Patologie gastrointestinali">
      <p>Patologie gastrointestinali</p>
    </div>
  </div>
</section>

<section class="why-choose-me">
    <h2 class="section-title">Perché scegliermi</h2>
    <div class="reasons-container">
      <div v-for="(reason, index) in reasons" :key="index" class="reason-item">
        <button @click="toggleReason(index)" class="reason-title">
          <span class="reason-number">{{ index + 1 }}.</span> {{ reason.title }}
        </button>
        <transition name="expand">
          <p v-if="activeIndex === index" class="reason-description">
            {{ reason.description }}
          </p>
        </transition>
      </div>
    </div>
  </section>


  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="brand">
        </div>
        <h2 class="footer-title">Restiamo in contatto</h2>
      <!--  <p class="footer-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, illum officia soluta aliquid asperiores mollitia culpa exercitationem totam, accusantium hic nobis. Maxime obcaecati, quisquam architecto dignissimos eveniet aperiam possimus eligendi..
        </p> -->
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

const activeIndex = ref(null);

const toggleReason = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const reasons = ref([
  { 
    title: "Empatia e comprensione", 
    description: "Credo che il miglior modo per accompagnare qualcuno in un percorso nutrizionale sia comprenderne davvero le difficoltà e le esigenze. Vivo in prima persona i principi di un’alimentazione sana e di uno stile di vita equilibrato, e questo mi permette di mettermi nei panni di chi si affida a me. Per questo il mio obiettivo non è solo darti un piano nutrizionale, ma fornirti un supporto costante per aiutarti a costruire nuove abitudini in modo sereno e sostenibile."
  },
  { 
    title: "Professionalità, aggiornamento continuo e strumenti di analisi all'avanguardia", 
    description: "La nutrizione è una scienza in continua evoluzione, ed è per questo che mi dedico costantemente allo studio e alla formazione. Ogni persona è unica, e per questo motivo valuto ogni caso con la massima attenzione, stilando piani nutrizionali personalizzati basati su un'analisi approfondita delle necessità e degli obiettivi individuali. Inoltre, mi avvalgo di strumenti di analisi avanzati per monitorare i progressi in modo oggettivo, fornendo dati concreti che permettono di ottimizzare il percorso nutrizionale nel tempo."
  },
  { 
    title: "Percorso personalizzato e sostenibile", 
    description: "Non credo nelle soluzioni standardizzate né nelle diete restrittive. Ogni piano alimentare che elaboro è studiato per adattarsi allo stile di vita, ai gusti e alle esigenze della persona, in modo da renderlo facilmente sostenibile nel lungo periodo. L’obiettivo non è solo ottenere risultati, ma mantenerli nel tempo, migliorando la qualità della vita senza rinunce estreme."
  }
]);
</script>


<style scoped >
 .home {    
    margin-top: 3%;
    padding-top: 3%;
  padding-bottom: 100px; 
  width: 100vw;
  height: 100vw;
  background-color: #f9f5f0;
  }
    .banner {
       margin-top: 50px;
       height: 60%;
       background-color: #f9f5f0;
    }
    
  .banner img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%; 
    height: 80%;
  object-fit: cover; 
  }

.story {
    margin-top: -5%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;
    padding: 20px;
}

.row1 {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.row1 h2 {
    text-align: center;
    font-weight: bold;
    font-size: 2em;
}

.coll {
    max-width: 800px;
}

.coll h2 {
    text-align: center;
}

.coll p {
    text-align: left;
    font-size: 1.2em;
    margin-top: 4%;
}

.services {
  text-align: center;
  padding: 60px 20px;
  background-color: #f9f5f0;
}

.section-title {
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 40px;
  text-transform: uppercase;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 1100px;
  margin: 0 auto;
}

.service-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.service-item img {
  width: 100%;  /* Usa percentuale per adattabilità */
  max-width: 300px; /* Limita la grandezza su schermi grandi */
  min-width: 180px; /* Evita che diventino troppo piccole su mobile */
  aspect-ratio: 1/1; /* Mantiene sempre il rapporto 1:1 */
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid white;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
}

.service-item p {
  margin-top: 15px;
  font-weight: bold;
  font-size: 1.3em;
  text-align: center;
  max-width: 80%;
}



.why-choose-me {
  text-align: center;
  padding: 60px 20px;
  background-color: #f9f5f0;
}

.section-title {
  font-size: 2.5em;
  font-weight: bold;
  margin-bottom: 40px;
  text-transform: uppercase;
}

.reasons-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}

.reason-item {
  margin-bottom: 20px;
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.reason-item:hover {
  transform: scale(1.02);
}

.reason-title {
  background: none;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
}

.reason-title:hover {
  color: #4d774e;
}

.reason-number {
  font-size: 1.5rem;
  font-weight: bold;
  color: #4d774e;
  margin-right: 10px;
}

.reason-description {
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
@media (max-width: 1024px) {
    
    .home{
        margin-top: 10%;
    height: 100%;
    width: 100%;
  }
.banner img {
    width: 100%; 
    height: auto;
}
.story {
    margin-top: 10%;
}

  .services-grid {
    grid-template-columns: repeat(2, 1fr); /* Passa a 2 colonne */
    gap: 30px;
  }

  .service-item img {
    width: 60%; /* Aumenta per migliore leggibilità */
  }

  .coll p {
    font-size: 1.1em;
  }

  .reason-title {
    font-size: 1.3rem;
  }

  .reason-description {
    font-size: 1.1rem;
  }
}

/* 📱 MEDIA QUERY PER TELEFONO (max 768px) */
@media (max-width: 768px) {

    .home{
        margin-top: 20%;
    height: 100%;
    width: 100%;
  }
.banner img {
    width: 100%; 
    height: auto;
}

.story {
    margin-top: 10%;
}
  .services-grid {
    grid-template-columns: repeat(1, 1fr); /* Stack verticale */
  }

  .service-item img {
    width: 50%; /* Aumenta la visibilità su mobile */
  }

  .section-title {
    font-size: 2em;
  }

  .story {
    padding: 10px;
  }

  .row1 h2 {
    font-size: 1.8em;
  }

  .coll p {
    font-size: 1em;
  }
.service-item img {
    width: 60%;
}

  .reason-title {
    font-size: 1.2rem;
  }

  .reason-description {
    font-size: 1rem;
  }

  .footer {
    padding: 40px 0;
  }

  .footer-bottom {
    font-size: 0.8rem;
  }
}



</style>