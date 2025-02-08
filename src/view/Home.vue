<template>
    <div class="home">
      <!-- Banner -->
      <div class="banner">
        <img src="/home_banner.png" alt="Team di nutrizionisti" class="full-width">
      </div>
  
      <!-- Sezione "La mia storia" -->
      <section class="story container py-5">
        <div class="row align-items-center">
          <!-- Testo -->
          <div class="col-lg-6">
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
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore fugiat asperiores vitae porro excepturi dicta iusto ab assumenda aliquid amet similique veritatis, facilis eveniet nam, repudiandae nulla unde officia. Atque.
            </p>
            
            <!-- Bottone -->
          </div>
  
          <!-- Immagine -->
          <div class="col-lg-6 image-container">
  <img src="/home_banner.png" alt="Nutrizionista" class="img-fluid rounded">
</div>
        </div>
      </section>
    </div>
  </template>
  
  <style scoped>

  .home {    
    padding-left: -200px;
    margin-left: -350px;
    width: 100vw;
    height: 100vw;
    margin-right: -300px;
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
  margin-top: 100px; /* Sposta la sezione più in basso */
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.title {
    margin-bottom: 50px;
    margin-top:50px; /* Sposta il titolo più in basso */
  font-size: 2.5rem;
  font-weight: bold;
  color: #2d2d2d;
  text-align: left; /* Allinea il titolo a sinistra */
}
.story p {
    margin-bottom: 1rem; /* Aggiunge spazio tra i paragrafi */
  text-align: left; /* Allinea i paragrafi a sinistra */
  margin-left: 0px; /* Rimuove qualsiasi margine sinistro */
}

.story .image-container {
  display: flex;
  justify-content: flex-end; /* Sposta l'immagine più a destra */
  align-items: center; /* Mantiene l'immagine più in alto */
  height: 100%; /* Assicura che l'immagine riempia la colonna */
}

.story img {
  max-width: 90%; /* Riduce la larghezza per evitare margini */
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
  </style>
