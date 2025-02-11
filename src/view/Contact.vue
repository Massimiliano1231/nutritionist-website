<template>
  <div class="contact-section">
    <div class="location-container">

      <div class="map-container">
        <iframe 
          width="100%" 
          height="100%" 
          style="border:0; border-radius: 12px;"
          loading="lazy" 
          allowfullscreen 
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2872.604088583041!2d11.36384331578631!3d44.38208427910207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477fdc4c84d1b6e9%3A0x66a6f79b8d8cb570!2sPianoro%2C%20BO!5e0!3m2!1sit!2sit!4v1707561600000">
        </iframe>
      </div>


      <div class="info-container">
        <h2>Dove trovarmi</h2>
        <p class="subtitle"><strong>Studio di xxxxx</strong></p>
        <p class="address">Via Nazionale, 100<br>Pianoro (BO)</p>

        <h3 class="orari">Orari</h3>
        <p><strong>Lun - Ven:</strong> 9:00 - 17:00</p>
        <p><strong>Sab:</strong> 9:00 - 12:00</p>
      </div>
    </div>


    <div class="contact-row">
  <div class="footer-contact">
    <h2 class="contatti">contatti</h2>
    <div class="contact-items">
      <div class="contact-item">
        <i class="fa-solid fa-envelope"></i>
        <h3>Email</h3>
        <p>domenicosilvestri.1995@gmail.com</p>
      </div>
      <div class="contact-item">
        <i class="fa-solid fa-phone"></i>
        <h3>Telefono</h3>
        <p>(+39) 375 683 6881</p>
      </div>
      <div class="contact-item">
        <i class="fa-brands fa-whatsapp"></i>
        <h3>WhatsApp</h3>
        <a href="https://wa.me/393756836881" target="_blank" class="whatsapp-button">Scrivimi su WhatsApp</a>
      </div>
    </div>
  </div>

  <div class="contact-container">
    <form @submit.prevent="sendEmail">
      <h3>scrivimi</h3>
      <div class="field" tabindex="1">
        <label for="username">
          <i class="far fa-user"></i> Nome e Cognome
        </label>
        <input v-model="formData.name" name="username" type="text" placeholder="Es. Mario Rossi" required>
      </div>
      <div class="field" tabindex="2">
        <label for="email">
          <i class="far fa-envelope"></i> Email
        </label>
        <input v-model="formData.email" name="email" type="email" placeholder="email@domain.com" required>
      </div>
      <div class="field" tabindex="3">
        <label for="message">
          <i class="far fa-edit"></i> Messaggio
        </label>
        <textarea v-model="formData.message" name="message" placeholder="Scrivi il tuo messaggio..." required></textarea>
      </div>
      <button class="btn2" type="submit">Invia Messaggio</button>
    </form>
  </div>
</div>

  </div>
</template>


<script setup>
import { ref } from "vue";
import emailjs from 'emailjs-com';

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const sendEmail = () => {
  const serviceID = 'service_51clrmn';  
  const templateID = 'template_zginhon'; 
  const publicKey = 'pSVLpYLfVTatbP5kC'; 

  const templateParams = {
    from_name: formData.value.name, 
    from_email: formData.value.email,  
    message: formData.value.message,  
    to_name: "Domenico Silvestri", 
    reply_to: formData.value.email,  
  };

  emailjs.send(serviceID, templateID, templateParams, publicKey)
    .then(response => {
      console.log('✅ Email inviata con successo!', response.status, response.text);
      alert('Email inviata con successo!');
      formData.value = { name: "", email: "", message: "" };
    })
    .catch(error => {
      console.error('❌ Errore nell’invio dell’email:', error);
      alert('Errore nell’invio dell’email. Riprova più tardi.');
    });
};



</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Saira+Semi+Condensed&display=swap');
.orari{
  padding-bottom: 20px;
}
h3 {
  padding-bottom: 60px;
}

.contact-section {
  margin-top: 100px;
  margin-left: -350px; 
  padding-top: 50px;
  width: 100vw; 
}

.location-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px; 
  max-width: 1400px; 
  margin: 0 auto;
}

.info-container {
  padding: 50px;
  width: 50%;
  text-align: left;
}

h2 {
  font-size: 3.5rem;
  font-weight: bold;
  color: #2d2d2d;
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

.map-container {
  width: 60%;
  height: 500px; 
  border-radius: 12px;
  overflow: hidden;
}
.footer-contact {
  margin-top: 100px;
  background-color: #f8f1e7;
  padding: 50px 0;
  text-align: center;
}

.contact-items {
  display: flex;
  justify-content: center;
  gap: 80px; 
}

.contact-item {
  text-align: center;
}

.contact-item i {
  font-size: 2.5rem;
  color: #2d2d2d;
  margin-bottom: 10px;
}

h3 {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 5px;
}

p {
  font-size: 1.4rem;
  color: #444;
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
  background-color: #3d8b40;
}


.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
}

form {
  background: #f3dfd1;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.field {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 16px;
}

label {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 5px;
  color: #3d3d3d;
  display: flex;
  align-items: center;
}

label i {
  margin-right: 10px;
}

input,
textarea {
  color: black;
  width: 100%;
  padding: 10px;
  border: 1px solid black;
  border-radius: 8px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.5);
}

textarea {
  resize: none;
  height: 100px;
}

button {
  background: #2f4ad0;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px 
  20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
  width: 100%;
  margin-top: 10px;
}

button:hover {
  background: #1e3799;
}

.contact-row {
  display: flex;
  background-color: #f8f1e7;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin: 100px auto 0 auto; 
  gap: 50px; 
}

.footer-contact {
  margin-left: 100px;
  flex: 1;
  padding: 40px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  height: 500px;
}

.contact-container {
  margin-left: -200px;
  flex: 1;
  display: flex;
  justify-content: center;
  height: 400px;
  padding-top:280px;
}



@media (max-width: 425px) {
  form {
    max-width: 100%;
  }
}

.btn2{
    display:inline-block;
    padding:0.5em 1.7em;
    border:0.25em solid #424242;
    margin:0.1em 0.2em;
    border-radius:0.35em;
    box-sizing: border-box;
    text-decoration:none;
    font-family:"arial";
    font-weight:300;
    color:#424242;
    text-align:center;
    transition: 0.2s;
    background:transparent;
    cursor:pointer;
    font-weight:bold;
    text-transform: uppercase;
  }
  .btn2:hover{
    color:#171717;
    border:0.25em solid #171717;
    background-color:#EAEAEA;
  }
  .btn2:active, .btn2:focus{
    background-color:#FFFFFF;
  }


  @media (max-width: 768px) {
  .contact-section {
    background-color: #f8f1e7;
    margin-left: -30px; 
    padding: 20px; 
  }

  .location-container {
    flex-direction: column; 
    gap: 20px; 
  }

  .map-container {
    width: 100%;
    height: 300px;
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

  .contact-items {
    flex-direction: column; 
    gap: 30px;
  }

  .contact-item {
    text-align: center;
  }

  .whatsapp-button {
    font-size: 1rem;
    padding: 10px 15px;
  }

  .contact-container {
    margin-left: -20px;
    width: 390px;
    padding: 20px;
  }

  form {
    max-width: 100%;
    padding: 20px;
  }

  input, textarea {
    font-size: 1rem;
  }

  button {
    font-size: 1rem;
    padding: 8px 15px;
  }

  .contact-items {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  .contact-item {
    flex-direction: row;
    gap: 20px;
    align-items: center;
  }

  .contact-item h3,
  .contact-item p,
  .contact-item a {
    font-size: 1.1rem;
    padding-bottom: 20px;
  }

  .contact-item i {
    font-size: 1.8rem;
  }

  .whatsapp-button {
    font-size: 1rem;
    padding: 6px 10px;
  }

  .contact-row {
    flex-direction: column; 
    gap: 30px; 
    align-items: center; 
    margin-top: -50px;
  }

  .contact-container {
    width: 350px; 
    margin-left: 15px;
      }

  .footer-contact {
    width: 90%;
    margin-left: 10px;
    text-align: center;
    padding: 30px;
  }

  .contact-container {
    display: flex;
    justify-content: center;
  }
}

</style>