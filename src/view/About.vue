<template>
  <div class="about-container">
    <div class="row">

      <div class="col-lg-5 image-container">
        <img src="/home_banner.png" alt="Dott. Domenico Silvestri" class="img-fluid rounded">
      </div>


      <div class="col-lg-5 text-container">
        <h1 class="title">Dott. Domenico Silvestri</h1>
        <h2 class="subtitle">Personal trainer e biologo nutrizionista</h2>
        <p>Il mio <strong>obiettivo</strong> è quello di guidare ogni persona verso uno <strong>stile di vita sano</strong> e <strong>attivo</strong>, attraverso un percorso <strong>piacevole</strong> e <strong>sostenibile</strong>. Credo che l’<strong>alimentazione</strong> non debba essere vissuta come una <strong>restrizione</strong>, ma come un'<strong>opportunità</strong> per migliorare il <strong>benessere</strong>, costruendo nuove <strong>abitudini</strong> con un <strong>piano nutrizionale</strong> <strong>flessibile</strong> e <strong>personalizzato</strong>.</p>

<p>L’<strong>esperienza</strong> maturata lavorando in <strong>team</strong> presso lo studio della <strong>Dott.ssa Gamberini</strong> mi ha permesso di approfondire <strong>conoscenze fondamentali</strong> e di affinare il mio <strong>approccio nutrizionale</strong>. Il <strong>confronto</strong> con altre <strong>figure professionali</strong> è stato una <strong>preziosa occasione di crescita</strong>, che mi ha aiutato a sviluppare <strong>strategie</strong> sempre più <strong>efficaci</strong> per migliorare lo <strong>stato di salute</strong> delle persone.</p>

<p>Mi occupo di <strong>nutrizione sportiva</strong>, supportando <strong>atleti</strong> e <strong>sportivi</strong> nel migliorare le <strong>performance</strong> e la <strong>composizione corporea</strong>. Inoltre, ho una solida <strong>esperienza</strong> nel trattamento di <strong>patologie gastrointestinali</strong>, <strong>metaboliche</strong> ed <strong>endocrine</strong>, <strong>autoimmuni</strong> e <strong>neuromuscolari</strong>, offrendo <strong>percorsi personalizzati</strong> per il miglioramento della <strong>salute</strong> e della <strong>qualità di vita</strong>.</p>

      </div>
    </div>

  <section class="info-section">
    <div class="container">
      <h2 class="info-title">Perchè segliermi</h2>

      <div class="info-content">
        <h3>1. Empatia e comprensione</h3>
        <p>Credo che il miglior modo per accompagnare qualcuno in un percorso nutrizionale sia comprenderne davvero le difficoltà e le esigenze. Vivo in prima persona i principi di un’alimentazione sana e di uno stile di vita equilibrato, e questo mi permette di mettermi nei panni di chi si affida a me. Per questo il mio obiettivo non è solo darti un piano nutrizionale, ma fornirti un supporto costante per aiutarti a costruire nuove abitudini in modo sereno e sostenibile.
        </p>
      </div>

      <div class="info-content">
        <h3>2. Professionalità, aggiornamento continuo e strumenti di analisi all'avanguardia</h3>
        <p>La nutrizione è una scienza in continua evoluzione, ed è per questo che mi dedico costantemente allo studio e alla formazione. Ogni persona è unica, e per questo motivo valuto ogni caso con la massima attenzione, stilando piani nutrizionali personalizzati basati su un'analisi approfondita delle necessità e degli obiettivi individuali. Inoltre, mi avvalgo di strumenti di analisi avanzati per monitorare i progressi in modo oggettivo, fornendo dati concreti che permettono di ottimizzare il percorso nutrizionale nel tempo.</p>
      </div>


    </div>
  </section>


  <section class="image-top-text-bottom">
    <div class="container">
      <img src="/home_banner.png" alt="Studio Nutrizionista" class="img-fluid rounded">
      <div class="text-content">
        <div class="info-content">
        <h3>3. Percorso personalizzato e sostenibile</h3>
        <p>Non credo nelle soluzioni standardizzate né nelle diete restrittive. Ogni piano alimentare che elaboro è studiato per adattarsi allo stile di vita, ai gusti e alle esigenze della persona, in modo da renderlo facilmente sostenibile nel lungo periodo. L’obiettivo non è solo ottenere risultati, ma mantenerli nel tempo, migliorando la qualità della vita senza rinunce estreme.</p>
      </div>
      </div>
    </div>
  </section>


</div>

</template>
<style scoped>
.about-container {
  padding-top: 7%;
    width: 100%;
    height: 100%;
    margin-right: -300px;
    background-color: #f9f5f0;
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
  height: 100%; 
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
  text-align: left;
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
  text-align: left;
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
}


.image-top-text-bottom {
  margin-top: -50px;
  background-color: #f9f5f0;
  padding: 80px 0;
  text-align: center;
}

.image-top-text-bottom img {
  width: 100%;
  height: auto;
  border-radius: 20px;
  display: block;
  margin: 0 auto 30px auto;
}

.text-content {
  padding-top: 60px;
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
}

.text-content p {
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
}

.image-container img,
.image-top-text-bottom img {
  border-radius: 20px; 
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15); 
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; 
}

.image-container img:hover,
.image-top-text-bottom img:hover {
  transform: translateY(-5px); 
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.2); 
}





@media (max-width: 1024px) {
  .about-container {
    padding-top: 10%;
    width: 100%;
    height: 100%;
  }

  .row {
    flex-direction: column;
    align-items: left;
    text-align: left;
  }

  .image-container {
    justify-content: left;
    margin-bottom: 20px;
  }

  .image-container img {
    width: 100%;
    height: auto;
    margin-left: 0;
  }

  .text-container {
    padding: 0 15px;
    text-align: left;
  }

  .title {
    font-size: 2.5rem;
    text-align: center;
  }

  .subtitle {
    font-size: 1.3rem;
    text-align: left;
  }

  .text-container p {
    font-size: 1.1rem;
    text-align: left;
  }

  .info-section {
    padding: 60px 20px;
  }

  .info-title {
    font-size: 2.2rem;
    text-align: center;
  }

  .info-content h3 {
    font-size: 1.6rem;
    text-align: left;
  }

  .info-content p {
    font-size: 1.1rem;
    text-align: left;
  }

  .image-top-text-bottom {
    padding: 50px 20px;
  }

  .image-top-text-bottom img {
    width: 100%;
  }

  .text-content {
    padding-top: 40px;
    text-align: center;
  }

  .text-content p {
    font-size: 1.1rem;
    text-align: left;
  }
}

@media (max-width: 768px) {
  .about-container {
    padding-top: 25%;
    width: 100%;
    height: 100%;
  }

  .row {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .image-container {
    justify-content: center;
    margin-bottom: 20px;
  }

  .image-container img {
    margin-top: -40px;
    width: 100%;
    height: auto;
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
    padding: 60px 20px;
  }

  .info-title {
    font-size: 2rem;
    text-align: center;
  }

  .info-content h3 {
    font-size: 1.5rem;
    text-align: left;
  }

  .info-content p {
    padding-top: 20px;
    font-size: 1.1rem;
    text-align: left;
  }

  .image-top-text-bottom {
    padding: 50px 20px;
  }

  .image-top-text-bottom img {
    width: 100%;
  }

  .text-content {
    padding-top: 40px;
    text-align: center;
  }

  .text-content p {
    font-size: 1.1rem;
    text-align: left;
  }
}
</style>
