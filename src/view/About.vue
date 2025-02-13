<template>
  <div class="about-container">
    <div class="row">

      <div class="col-lg-5 image-container">
        <img src="/home_banner.png" alt="Dott. Domenico Silvestri" class="img-fluid rounded">
      </div>


      <div class="col-lg-5 text-container">
        <h1 class="title">Dott. Domenico Silvestri</h1>
        <h2 class="subtitle">Personal trainer e biologo nutrizionista</h2>
        <p>Il mio obiettivo è quello di <strong>educare il paziente ad uno stile di vita sano e attivo</strong>, con un percorso piacevole che vada a creare nuove abitudini, con un piano nutrizionale flessibile e sostenibile.</p>
        <p>All’interno dello studio di nutrizione Gamberini ho trovato un’armonia professionale fondamentale per la creazione di progetti innovativi e funzionali.</p>
        <p>Credo che l’interazione tra due o più figure professionali possa far nascere nuove idee, possa essere un modo per stimolarsi a vicenda nell’imparare cose nuove migliorando le proprie capacità e conoscenze.</p>
        <p>Mi occupo di <strong>soggetti sportivi</strong> per migliorare le performance e di chi desidera ottenere una <strong>ricomposizione corporea</strong>. Ho una ottima formazione nel trattamento delle <strong>patologie gastrointestinali, neuromuscolari e metaboliche</strong>.</p>
      </div>
    </div>

  <section class="info-section">
    <div class="container">
      <h2 class="info-title">Perchè segliermi</h2>

      <div class="info-content">
        <h3>lorem ipsus</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae itaque magni inventore architecto nihil aliquid deleniti numquam dolorem, adipisci beatae quod cum repellat doloremque ea optio suscipit, quia, explicabo corporis.</p>
      </div>

      <div class="info-content">
        <h3>lorem ipsus</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae itaque magni inventore architecto nihil aliquid deleniti numquam dolorem, adipisci beatae quod cum repellat doloremque ea optio suscipit, quia, explicabo corporis.</p>
      </div>

      <div class="info-content">
        <h3>lorem ipsus</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae itaque magni inventore architecto nihil aliquid deleniti numquam dolorem, adipisci beatae quod cum repellat doloremque ea optio suscipit, quia, explicabo corporis.</p>
      </div>
    </div>
  </section>


  <section class="image-top-text-bottom">
    <div class="container">
      <img src="/home_banner.png" alt="Studio Nutrizionista" class="img-fluid rounded">
      <div class="text-content">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga, aperiam quas rerum modi cupiditate mollitia minus at nam error, asperiores nemo perferendis. A minus odio eligendi reiciendis quae minima recusandae.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium eius? Porro, doloremque expedita cupiditate tempore magnam exercitationem natus. Praesentium, animi! Quo unde, asperiores labore eos saepe neque autem facere.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, cumque! Nam, dolore? Tenetur sapiente fuga rem accusamus totam eveniet unde. Eum similique voluptatum nam labore ab est vel, quo alias!</p>
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
