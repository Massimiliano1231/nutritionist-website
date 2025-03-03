<template>
<div class="visit">
    <h1 class="title">SVOLGIMENTO DELLE VISITE</h1>

    <div class="container">
      <div v-for="(step, index) in steps" :key="index" class="step">
        <h2 class="step-title">{{ step.title }}</h2>
        <p class="step-description" v-html="step.description"></p>
        
        <div v-if="index === 0 || index === 2 || index === 1" class="separator">
          <img :src="step.image" alt="Separatore" class="separator-image">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const description1 = `
<p>L’inizio del percorso nutrizionale prevede un primo incontro fondamentale per instaurare un rapporto di fiducia reciproca. Questo aiuterà a raggiungere gli obiettivi con serenità e consapevolezza.</p>

<p>La visita dura circa un’ora ed è così suddivisa:</p>

<p><strong>Prima fase</strong>: viene svolta un’anamnesi personale, fisiologica e patologica per comprendere il quadro generale e definire al meglio il piano nutrizionale. Per garantire una buona riuscita di questa fase ti consiglio di portare con te gli esami del sangue più recenti e altri referti che possono essere utili.</p>

<p><strong>Seconda fase</strong>: viene svolta un'analisi dettagliata di quelle che sono le tue abitudini alimentari, le preferenze e l’organizzazione dei pasti quotidiani, individuando gli aspetti da migliorare per avviare un percorso efficace e sostenibile nel tempo.</p>

<p><strong>Terza fase</strong>: vengono effettuate tutte le misurazioni utili a capire l'andamento del percorso nutrizionale. In questa fase prenderò parametri antropometrici, quali altezza, peso, circonferenze corporee e plicometria per determinare la percentuale di massa grassa sottocutanea, ed effettuerò anche l'analisi bioimpedenziometrica per analizzare idratazione, ritenzione idrica, composizione corporea e metabolismo basale.</p>

<p>Per questa fase sarà necessario rimanere in biancheria intima, ma se preferisci potrai indossare abbigliamento leggero da palestra o un costume.</p>
`;

const description2 = `
<p>Al momento della prenotazione ti verrà chiesto di segnalare le tue esigenze, i tuoi obiettivi e l’eventuale presenza di patologie.</p>
<p>In particolare ti verrà inviato un questionario con alcune domande che mi permetterà di avere un'idea iniziale della persona che ho di fronte.</p>
`;

const description3 = `
<p>Entro 5-7 giorni dal nostro primo incontro riceverai via email il tuo piano nutrizionale personalizzato in formato PDF, accompagnato da un file utile per fare la spesa in modo consapevole. </p>
<p>Ogni piano nutrizionale è studiato su misura, pensato per adattarsi alle tue esigenze e facilitare il raggiungimento degli obiettivi in modo pratico e sostenibile nel tempo.</p>
`;

const description4 = `
<p>Dopo aver iniziato il percorso nutrizionale, si stabiliranno delle visite di follow-up, solitamente a cadenza mensile. Questa frequenza potrà variare in base alle necessità e verrà concordata insieme. Sarà di fondamentale importanza la prima visita di follow-up dopo il nostro primo incontro per poter valutare correttamente l'andamento del percorso e l'efficacia della strategia nutrizionale utilizzata.</p>
<p>Durante tali visite verranno utilizzati gli stessi strumenti di analisi della prima visita per valutare in modo oggettivo e standardizzato i progressi del percorso nutrizionale. 
Se necessario, si apporteranno modifiche al piano nutrizionale per migliorarne l’efficacia e l’aderenza.</p>
<p>Le visite di follow-up, della durata di circa 30 minuti, ti aiuteranno a mantenere sane abitudini e ad adattare il piano nutrizionale ai tuoi ritmi di vita, affinché tu possa raggiungere i tuoi obiettivi con serenità e consapevolezza.</p>
`;

const steps = [
  { 
    title: "1. Prenotazione dell’appuntamento", 
    description : description2,
    image: "/DSC3363.JPG" 
  },
  { 
    title: "2. Prima visita", 
    description : description1,
    image: "/bia.JPG" 
  },
  { 
    title: "3. Consegna del piano nutrizionale", 
    description : description3,
    image: "/DSC3403.JPG" 
  },
  { 
    title: "4. Visite di follow-up", 
    description : description4,
    image: "/home_banner.png" 
  }
/*  { 
    title: "5. Mantenimento e supporto", 
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe doloribus quae quos repellendus labore, delectus autem nemo! Enim voluptas nobis maiores voluptatibus placeat earum inventore incidunt architecto nihil aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe doloribus quae quos repellendus labore, delectus autem nemo!", 
    image: "/home_banner.png" 
  }*/
];
</script>


<style scoped>

.visit {
  margin-top: 3%;
  width: 100%;
  height: 100%;
  background-color: #f9f5f0;
}

.title {
  padding-top: 7%;
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #2d2d2d;
  padding-bottom: 2%;
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

@media (max-width: 1024px) {
  .visit {
    margin-top: 15%;
  }
}

@media (max-width: 768px) {
  .visit {   
    padding-top: 20%;
    width: 100%;
    height: 100%;
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
    width: 100%;
    max-width: 600px; 
  }
}



</style>
