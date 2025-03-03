<template>
<div class="about-container">
  <!--  <div class="row">

      <div class="col-lg-5 image-container">
        <img :src="getImageUrl()" alt="Dott. Domenico Silvestri" class="img-fluid rounded">
      </div>


      <div class="col-lg-5 text-container">
        <h1 class="title">Dott. Domenico Silvestri</h1>
        <h2 class="subtitle">Personal trainer e biologo nutrizionista</h2>
        <p>Il mio <strong>obiettivo</strong> è quello di guidare ogni persona verso uno <strong>stile di vita sano</strong> e <strong>attivo</strong>, attraverso un percorso <strong>piacevole</strong> e <strong>sostenibile</strong>. Credo che l’<strong>alimentazione</strong> non debba essere vissuta come una <strong>restrizione</strong>, ma come un'<strong>opportunità</strong> per migliorare il <strong>benessere</strong>, costruendo nuove <strong>abitudini</strong> con un <strong>piano nutrizionale</strong> <strong>flessibile</strong> e <strong>personalizzato</strong>.</p>

<p>L’<strong>esperienza</strong> maturata lavorando in <strong>team</strong> presso lo studio della <strong>Dott.ssa Gamberini</strong> mi ha permesso di approfondire <strong>conoscenze fondamentali</strong> e di affinare il mio <strong>approccio nutrizionale</strong>. Il <strong>confronto</strong> con altre <strong>figure professionali</strong> è stato una <strong>preziosa occasione di crescita</strong>, che mi ha aiutato a sviluppare <strong>strategie</strong> sempre più <strong>efficaci</strong> per migliorare lo <strong>stato di salute</strong> delle persone.</p>

<p>Mi occupo di <strong>nutrizione sportiva</strong>, supportando <strong>atleti</strong> e <strong>sportivi</strong> nel migliorare le <strong>performance</strong> e la <strong>composizione corporea</strong>. Inoltre, ho una solida <strong>esperienza</strong> nel trattamento di <strong>patologie gastrointestinali</strong>, <strong>metaboliche</strong> ed <strong>endocrine</strong>, <strong>autoimmuni</strong> e <strong>neuromuscolari</strong>, offrendo <strong>percorsi personalizzati</strong> per il miglioramento della <strong>salute</strong> e della <strong>qualità di vita</strong>.</p>

      </div>
    </div>-->

    <div class="banner">
      <img :src="getImageUrl()" alt="Dott. Domenico Silvestri" class="img-fluid rounded">
     
      </div>

      <section class="story">

<div class="row1">
  <h1 class="title">Dott. Domenico Silvestri</h1>
  <div class="coll">
        <h2 class="subtitle">Personal trainer e biologo nutrizionista</h2>
        <p>Il mio <strong>obiettivo</strong> è quello di guidare ogni persona verso uno <strong>stile di vita sano</strong> e <strong>attivo</strong>, attraverso un percorso <strong>piacevole</strong> e <strong>sostenibile</strong>. Credo che l’<strong>alimentazione</strong> non debba essere vissuta come una <strong>restrizione</strong>, ma come un'<strong>opportunità</strong> per migliorare il <strong>benessere</strong>, costruendo nuove <strong>abitudini</strong> con un <strong>piano nutrizionale</strong> <strong>flessibile</strong> e <strong>personalizzato</strong>.</p>

<p>L’<strong>esperienza</strong> maturata lavorando in <strong>team</strong> presso lo studio della <strong>Dott.ssa Gamberini</strong> mi ha permesso di approfondire <strong>conoscenze fondamentali</strong> e di affinare il mio <strong>approccio nutrizionale</strong>. Il <strong>confronto</strong> con altre <strong>figure professionali</strong> è stato una <strong>preziosa occasione di crescita</strong>, che mi ha aiutato a sviluppare <strong>strategie</strong> sempre più <strong>efficaci</strong> per migliorare lo <strong>stato di salute</strong> delle persone.</p>

<p>Mi occupo di <strong>nutrizione sportiva</strong>, supportando <strong>atleti</strong> e <strong>sportivi</strong> nel migliorare le <strong>performance</strong> e la <strong>composizione corporea</strong>. Inoltre, ho una solida <strong>esperienza</strong> nel trattamento di <strong>patologie gastrointestinali</strong>, <strong>metaboliche</strong> ed <strong>endocrine</strong>, <strong>autoimmuni</strong> e <strong>neuromuscolari</strong>, offrendo <strong>percorsi personalizzati</strong> per il miglioramento della <strong>salute</strong> e della <strong>qualità di vita</strong>.</p>
</div>

 
</div>
</section>

    <section class="info-section">
      <div class="container">
        <h2 class="info-title">I miei punti di forza</h2>
        <div v-for="(strength, index) in strengths" :key="index" class="info-content">
          <h3>{{ index + 1 }}. {{ strength.title }}</h3>
          <p v-for="(paragraph, i) in strength.description.split('\n\n')" :key="i">
            {{ paragraph }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>


const getImageUrl = () => "/DSC3382.JPG";

//const description = "L’alimentazione gioca un ruolo fondamentale nella prevenzione e nella gestione di molte patologie. Offro supporto nutrizionale per chi soffre di:\n\n1. , insulino-resistenza, dislipidemie, sindrome metabolica, obesità, ipertiroidismo e ipotiroidismo, sindrome dell'intestino irritabile ed endometriosi.\n\n2. Patologie gastrointestinali: reflusso gastroesofageo, gastrite, colon irritabile (IBS), malattia di Crohn e colite ulcerosa (MICI), celiachia, intolleranze alimentari (lattosio, FODMAPs, nichel, istamina), disbiosi intestinale, gonfiore addominale, stipsi e diarrea cronica.\n\n3. Patologie autoimmuni e infiammatorie: Tiroidite di Hashimoto, Artrite reumatoide, Sclerosi multipla, Fibromialgia, Psoriasi e dermatite atopica.\n\n4. Patologie epatiche e renali: Steatosi epatica (fegato grasso), insufficienza renale, calcolosi renale (calcoli ai reni).";
const description = "L’alimentazione gioca un ruolo fondamentale nella prevenzione e nella gestione di molte patologie. Offro supporto nutrizionale per chi soffre di:\n\n" +
"1. Patologie metaboliche: Diabete di tipo 2, Insulino-resistenza, Dislipidemie, Sindrome metabolica, Obesità, Ipertiroidismo e Ipotiroidismo.\n\n" +
"2. Patologie gastrointestinali: Reflusso gastroesofageo, Gastrite, Sindrome dell'intestino irritabile (IBS), Malattia di Crohn e Colite ulcerosa (MICI), Intolleranze alimentari (lattosio, FODMAPs, nichel, istamina), Disbiosi intestinale, Gonfiore addominale, Stipsi e Diarrea cronica.\n\n" +
"3. Patologie autoimmuni e infiammatorie: Tiroidite di Hashimoto, Artrite reumatoide, Sclerosi multipla, Fibromialgia, Psoriasi e Dermatite atopica, Celiachia, e Diabete di tipo 1.\n\n" +
"4. Patologie epatiche e renali: Steatosi epatica (fegato grasso), Insufficienza renale, Calcolosi renale (calcoli ai reni).\n\n" +
"5. Patologie ginecologiche e ormonali: Endometriosi e Sindrome dell’ovaio policistico (PCOS).";

const description1 = "Le esigenze nutrizionali della donna cambiano nel tempo e meritano un’attenzione specifica.\n\nMi occupo di:\n\n1. Menopausa e invecchiamento: strategie nutrizionali per contrastare l’aumento di peso, la perdita di massa muscolare e il rallentamento metabolico tipici di questa fase.\n\n2. Linfedema e lipedema: grazie al mio percorso di studi in Scienze delle attività motorie e sportive, offro alle mie pazienti strategie di allenamento specifiche e ben supportate a livello nutrizionale per ridurre infiammazione e ritenzione di liquidi, migliorando la qualità della vita.\n\n3. Cellulite e ritenzione idrica: sebbene spesso confuse, la cellulite è un’infiammazione del tessuto adiposo, mentre la ritenzione idrica è un accumulo eccessivo di liquidi. Un piano nutrizionale corretto affiancato ad un adeguato allenamento aiuta a ridurre entrambi, migliorando la circolazione e la tonicità della pelle.";

const strengths = [
  { title: "Dimagrimento e perdita di peso", description: "Aiuto i miei pazienti a raggiungere il peso ideale in modo sano ed equilibrato, senza diete drastiche né privazioni inutili. Il mio approccio si basa su un’alimentazione personalizzata e sostenibile, che permette di perdere peso in modo graduale e definitivo, rispettando la salute del paziente." },
  { title: "Ricomposizione corporea e aumento di peso ", description: "Aiuto i miei pazienti a migliorare la propria composizione corporea attraverso dei percorsi mirati di 'bulk' e di 'cut'. Nel percorso di 'bulk' favorisco l'aumento della massa muscolare tenendo sotto controllo la massa grassa. Nel percorso di 'cut' favorisco la perdita di massa grassa tenendo sotto controllo la massa muscolare." },
  { title: "Alimentazione per atleti e sportivi", description: "Una nutrizione ottimale è fondamentale per chi pratica sport, sia a livello amatoriale sia agonistico. Elaboro piani nutrizionali specifici per migliorare la performance, sostenere il recupero muscolare e ottimizzare la composizione corporea, adattando l’alimentazione al tipo di allenamento e agli obiettivi sportivi." },
  { title: "Nutrizione femminile: salute e benessere nelle diverse fasi della vita", description: description1 },
  { title: "Nutrizione e condizioni patologiche", description: description },
];
</script>

<style scoped>
.about-container {
  padding-top: 3%;
    width: 100%;
    height: 100%;
    margin-right: -300px;
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
    height:80%;
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





.row {
  display: flex;
  justify-content: content-evenly;
}

.image-container {
  display: flex;
  justify-content: flex-start; 
}

.image-container img {
  width: 100%;
  height: auto; 
  border-radius: 20px;
  margin-left: 5%;
}

.text-container {
  padding-left: 50px; 
  text-align: left; 
}

.title {
  font-size: 2.8rem;
  font-weight: bold;
  color: #2d2d2d;
  text-align: left;
}

.subtitle {
  font-size: 1.5rem;
  font-weight: bold;
  color: #555;
  margin-bottom: 20px;
  text-align: left;
}

.text-container p {
  font-size: 1.2rem;
  color: #333;
  line-height: 1.6;
  text-align: left;
}


.info-section {
  background-color: #f9f5f0;
  padding: 80px 0;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

.info-title {
  font-size: 2.8rem;
  font-weight: bold;
  color: #2d2d2d;
  margin-bottom: 40px;
}

.info-content {
  margin-bottom: 40px;
}

.info-content h3 {
  font-size: 1.8rem;
  font-weight: bold;
  color: #3d3d3d;
  margin-bottom: 10px;
}

.info-content p {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 10px;
}

@media (max-width: 1024px) {
  .about-container {
    padding-top: 10%;
    width: 100%;
    height: 100%;
  }

  .row {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .image-container {
    height: 100%;
    width: 100%;
    justify-content: center;
    margin-bottom: 20px;
  }

  .image-container img {
    width: 100%;
    margin-left: 0;
  }

  .text-container {
    padding: 0 15px;
    padding-top: 30px;
    text-align: left;
  }

  .title {
    font-size: 2.5rem;
    text-align: center;
  }

  .subtitle {
    padding-top: 20px;
    font-size: 1.3rem;
    text-align: center;
  }

  .text-container p {
    font-size: 1.1rem;
    text-align: left;
  }

  .info-section {
    padding: 50px 15px;
  }

  .info-title {
    font-size: 2.2rem;
  }

  .info-content h3 {
    font-size: 1.6rem;
  }

  .info-content p {
    font-size: 1.1rem;
  }
}
  


@media (max-width: 768px) {
  .about-container {
    padding-top: 20%;
    width: 100%;
    height: 100%;
  }

  .row {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .image-container {
    height: 100%;
    width: 100%;
    justify-content: center;
    margin-bottom: 20px;
  }

  .image-container img {
    margin-top: -40px;
    width: 100%;
    margin-left: 0;
  }

  .text-container {
    padding: 0 15px;
    padding-top: 50px;
    text-align: center;
  }

  .title {
    font-size: 2.5rem;
    text-align: left;
    margin-left: 10px;
  }

  .subtitle {
    padding-top: 20px;
    font-size: 1.2rem;
    text-align: left;
    margin-left: 10px;
  }

  .text-container p {
    font-size: 1.1rem;
    text-align: left;
    margin-left: 10px;
  }

  .info-section {
    padding: 50px 15px;
  }

  .info-title {
    font-size: 2rem;
  }

  .info-content h3 {
    font-size: 1.5rem;
  }

  .info-content p {
    font-size: 1rem;
  }
}
</style>

