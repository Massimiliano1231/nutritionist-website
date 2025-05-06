<template>
<div class="home">

    <div class="banner">
      <img :src="bannerImage" alt="Domenico Silvestri" class="full-width">
      <div class="banner-text">
    <p>"La salute é ricchezza" Gandhi</p>
  </div>
      </div>

    <section class="story">

  <div class="row1">
    <h2>Dottor Domenico Silvestri</h2>
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

   
  </div>
</section>

 <section class="benefits-section">
  <h2 class="section-title">6 Motivi per affidarsi ad un nutrizionista</h2>
  
  <ul class="benefits-list">
    <li v-for="(benefit, index) in benefits" :key="index">
      <span class="check-icon">✔️</span>
      <strong>{{ benefit.bold }}</strong> {{ benefit.text }}
    </li>
  </ul>
</section>







<section class="services">
  <h2 class="section-title">Specializzato in:</h2>
  <div class="services-grid">
    <div class="service-item">
      <img :src="getImageUrlDim()" alt="Dimagrimento e perdita di peso">
      <p>Dimagrimento e perdita di peso</p>
    </div>
    <div class="service-item">
      <img :src="getImageUrAum()" alt="Ricomposizione corporea e aumento di peso">
      <p>Ricomposizione corporea e aumento di peso</p>
    </div>
    <div class="service-item">
      <img :src="getImageUrlAtleti()" alt="Alimentazione per atleti e sportivi">
      <p>Alimentazione per atleti e sportivi</p>
    </div>
    <div class="service-item">
      <img :src="getImageUrlFem()" alt="Nutrizione femminile">
      <p>Nutrizione femminile: salute e benessere nelle diverse fasi della vita</p>
    </div>
    <div class="service-item">
      <img :src="getImageUrlPat()" alt="Nutrizione e condizioni patologiche">
      <p>Nutrizione e condizioni patologiche</p>
    </div>
    <div class="service-item">
      <img :src="getImageUrlGastro()" alt="Patologie gastrointestinali">
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


  <div class="location-wrapper">
  <h2 class="location-title">Dove Trovarmi</h2>
  <div class="location-container">
    <div class="map-container">
      <iframe 
        width="100%" 
        height="100%" 
        style="border:0; border-radius: 12px;"
        loading="lazy" 
        allowfullscreen 
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2850.696317276761!2d11.340933676708957!3d44.39835530391832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132b2a801b91f16b%3A0x68de4301b26566ca!2sVia%20Nazionale%2C%20106%2F2%2C%2040065%20Pianoro%20BO!5e0!3m2!1sit!2sit!4v1739817274033!5m2!1sit!2sit">
      </iframe>
    </div>
    <div class="info-container">
      <p class="address">Via Nazionale, 106/2, 40065<br>Pianoro (BO)</p>
      <p  class="address">Via Galletta 56/B <br> San Lazzaro di Savena</p>
      <h3 class="orari">Orari</h3>
      <p><strong>Lun - Ven:</strong> 9:00 - 20:00</p>
      <p><strong>Sab:</strong> 9:00 - 18:00</p>
    </div>
  </div>
</div>




  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="brand">
        </div>
        <h2 class="footer-title">CONTATTI</h2>

        <div class="contact-info">
  <div class="contact-row">
    <div class="contact-item">
      <img src="/icons/email.svg" alt="Email" class="contact-icon" />
      <div>
        <h3>Email</h3>
        <p>domenicosilvestri.1995@gmail.com</p>
      </div>
    </div>
    <div class="contact-item">
      <img src="/icons/phone.svg" alt="Telefono" class="contact-icon" />
      <div>
        <h3>Telefono</h3>
        <p>(+39) 375 683 6881</p>
      </div>
    </div>
  </div>

  <div class="contact-row">
    <div class="contact-item">
      <img src="/icons/whatsapp.svg" alt="WhatsApp" class="contact-icon" />
      <div>
        <h3>Whatsapp</h3>
        <a href="https://wa.me/393756836881" target="_blank" class="whatsapp-button">
          Scrivimi su WhatsApp
        </a>
      </div>
    </div>
    <div class="contact-item">
      <img src="/icons/telefono.svg" alt="Instagram" class="contact-icon" />
      <div>
        <h3>Instagram</h3>
        <a href="https://www.instagram.com/ilsegretodelnutrizionista?igsh=ZGl4YWF6YzZzdmQ3" target="_blank" class="instagram-button">
          Seguimi su Instagram
        </a>
      </div>
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
import '@fortawesome/fontawesome-free/css/all.css';
import { ref } from "vue";
import { computed, onMounted, onUnmounted } from "vue";

const getImageUrlDim = () => "/dim1.jpg";
const getImageUrAum = () => "/aumento.jpg";
const getImageUrlAtleti = () => "/sportivi.jpg";
const getImageUrlFem = () => "/femminile.jpg";
const getImageUrlPat = () => "/patologie.jpg";
const getImageUrlGastro = () => "/gastro.jpg";

const bannerDesktop = "/bn.png"; 
const bannerMobile = "/DSC3354P1.JPG";

const windowWidth = ref(window.innerWidth);

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", updateWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});

const bannerImage = computed(() => {
  return windowWidth.value > 1024 ? bannerDesktop : bannerMobile;
});


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

const benefits = ref([
  { bold: "Migliora", text: "il tuo stato di salute con strumenti di analisi obiettivi." },
  { bold: "Sostiene", text: "la tua massa magra con un approccio nutrizionale personalizzato." },
  { bold: "Ti aiuta", text: "a dimagrire attraverso un rapporto sano con il cibo." },
  { bold: "Ti insegna", text: "a fare scelte consapevoli per adottare uno stile di vita sano e attivo." },
  { bold: "Ti supporta", text: "nei momenti di difficoltà adattando il piano nutrizionale alle tue esigenze." },
  { bold: "Ti guida", text: "durante il periodo di mantenimento per consolidare i risultati raggiunti." }
]);


</script>



<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');

.banner-text {
  position: absolute;
  bottom: -1%; 
  left: 50%;
  transform: translateX(-50%);
  padding: 15px 30px;
  border-radius: 10px;
  font-size: 1.8rem;
  text-align: center;
  width: 80%;
  font-style: italic;
  font-family: 'Brush Script MT', cursive;
}

.banner-text p {
  font-weight: bold;
  color: black;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  font-size: 2.3rem;
}




 .home {    
    margin-top: 3%;
    padding-top: 3%;
  padding-bottom: 100px; 
  width: 100vw;
  height: 100vw;
  background-color: #f9f5f0;
  }
    .banner {
      position: relative;
      width: 100%;
       margin-top: 50px;
       height: 60%;
       background-color: #f9f5f0;
    }
    
  .banner img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%; 
    height:100%;
  object-fit: contain;
  }

.story {
    margin-top: 2%;
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
  width: 100%;  
  max-width: 300px; 
  min-width: 180px;
  aspect-ratio: 1/1; 
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
  max-width: 1500px;
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

.location-wrapper {
  background-color: #f9f5f0;
  text-align: center;
  margin-bottom: 20px;
}

.location-title {
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5%;
}


.contact-info {
  display: flex;
  justify-content: center; 
  align-items: center;
  gap: 80px; 
  flex-wrap: nowrap; 
  text-align: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.contact-row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px; 
  flex-wrap: nowrap;
  margin-top: 30px; 
}


.contact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
}

.contact-icon {
  width: 40px; 
  height: 40px;
}

.whatsapp-button,
.instagram-button {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 6px 14px; 
  border-radius: 15px;
  border: 2px solid black; 
  background-color: white; 
  color: black; 
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  white-space: nowrap; 
}

.whatsapp-button:hover,
.instagram-button:hover {
  background-color: black; 
  color: white; 
  transform: scale(1.05); 
}


@media (max-width: 768px) {
  .contact-info {
    flex-wrap: wrap;
    gap: 40px;
  }

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

.location-container {
  background-color: #f9f5f0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; 
  height: 50%;
  margin: 0 auto;
}

.map-container {
  height: 50vh;
  width: 40%;
  border-radius: 12px;
  overflow: hidden;
}

.info-container {
  padding: 50px;
  width: 50%;
  text-align: left;
}

.info-container {
  padding: 50px;
  width: 50%;
  text-align: left;
}

.map-title {
  text-align: center;
  margin-bottom: 10px; 
}
.contatti {
  padding-bottom: 50px;
  font-size: 3.5rem;
  font-weight: bold;
  color: #2d2d2d;
}

.subtitle {
  font-size: 1.3rem;
  font-weight: bold;
}

.address {
  font-size: 1.8rem;
  margin-bottom: 50px;
}

h3 {
  font-size: 2rem;
  margin-top: 20px;
}

p {
  font-size: 1.6rem;
  color: #444;
}



.benefits-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #f9f5f0;
  text-align: center;
  padding: 60px 20px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 30px;
  text-transform: uppercase;
}

.benefits-list {
  list-style: none;
  padding: 0;
}

.benefits-list li {
  font-size: 1.4rem;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.check-icon {
  font-size: 1.6rem;
  color: #ffffff; 
}

.highlight-text {
  font-size: 1.4rem;
  font-weight: bold;
  color: #e67e22; 
  margin-top: 20px;
}

.cta-button {
  background-color: #e67e22;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 12px 25px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  margin-top: 20px;
}

.cta-button:hover {
  background-color: #d35400;
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
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  .service-item img {
    width: 60%; 
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

  .location-container {
    flex-direction: column;
    gap: 30px;
  }

  .map-container {
    width: 100%;
    height: 60vh;
  }

  .info-container {
    width: 100%;
    text-align: center;
    padding: 30px;
  }

  h2, .contatti {
    font-size: 2.8rem;
  }

  .subtitle, .address, h3, p {
    font-size: 1.5rem;
  }
  .benefits-section {
    padding: 40px 20px;
  }

  .benefits-list li {
    font-size: 1.1rem;
  }

  .check-icon {
    font-size: 1.4rem;
  }

  .cta-button {
    font-size: 1rem;
    padding: 10px 20px;
  }

  .banner-text p {
    font-size: 2.0rem;
    font-weight: bold;
    font-family: Georgia, serif;
  }

  .contact-info {
    flex-direction: column;
    gap: 0px;
  }

  .contact-row {
    flex-direction: column;
    gap: 20px;
  }

  .contact-item {
    flex-direction: row;
    align-items: center;
    text-align: left;
  }

  .contact-icon {
    margin-right: 10px;
  }
  .contact-item {
    flex-direction: row;
    align-items: center;
    text-align: left;
    width: 100%;
  }

  .contact-info {
    flex-direction: column;
    align-items: flex-start;
  }

  .contact-row {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 20px;
  }

  .contact-icon {
    margin-right: 10px;
  }
}

@media (max-width: 768px) {
  .banner-text {
    bottom: -6%; 
    font-size: 1.6rem; 
    width: 90%; 
  }
  .banner-text p {
    font-size: 1.0rem;
    font-weight: bold;
    font-family: Georgia, serif;
  }

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
    grid-template-columns: repeat(1, 1fr);
  }

  .service-item img {
    width: 50%; 
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

  .location-container {
    flex-direction: column; 
    gap: 20px; 
  }

  .map-container {
    width: 100%;
    height: 50vh;
  }

  .info-container {
    width: 100%;
    text-align: center;
    padding: 20px;
  }

  h2, .contatti {
    font-size: 2.2rem; 
  }

  .subtitle, .address, h3, p {
    font-size: 1.2rem; 
  }

  .benefits-section {
    text-align: left; 
    padding: 40px 20px;
  }

  .benefits-list {
    list-style: none;
    padding: 0;
    margin-left: 0; 
  }

  .benefits-list li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 1.1rem;
    flex-wrap: wrap; 
  }

  .check-icon {
    font-size: 1.4rem;
    flex-shrink: 0;
    margin-top: 4px; 
  }

  .benefits-list li strong {
    display: inline;
    margin-right: 5px;
    white-space: nowrap;
  }

  
  .contact-item {
    flex-direction: row;
    align-items: center;
    text-align: left;
    width: 100%;
  }

  .contact-info {
    flex-direction: column;
    align-items: flex-start;
  }

  .contact-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .contact-icon {
    margin-right: 10px;
  }

}



</style>