
<template>
  <v-main class="v-main">
    <router-view />
    <br><br>
    <a href="https://wa.me/5493517565446?text=Me%20gustaría%20saber%20el%20precio%20del%20coche" class="whatsapp"
      target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>
      
      <v-footer elevation="5" class="d-flex flex-column font-weight-thin"  style="position: fixed; bottom: 0; width: 92%;">
        <div class="d-flex w-100 align-center px-4">
          <strong>
            <p class="font-weight-thin">¡También puedes contactarme por redes sociales!</p>
          </strong>

          <v-spacer></v-spacer>

          <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="plain" size="small"
            @click="redirectToSocialMedia(icon)"></v-btn>
        </div>
      </v-footer>
  </v-main>
</template>

<script setup>
import pic from '@/assets/pic.jpg'
const img = pic;
const icons = [
  'mdi-github',
  'mdi-linkedin',
  'mdi-instagram'
];
const redirectToSocialMedia = (icon) => {
  let url;
  // Obtener la URL correspondiente a la red social
  switch (icon) {
    case 'mdi-github':
      url = 'https://github.com/juanxp1';
      break;
    case 'mdi-linkedin':
      url = 'https://www.linkedin.com/in/juan-jose-bianchi/';
      break;
    case 'mdi-instagram':
      url = 'https://www.instagram.com/juanb_90/';
      break;
    default:
      break;
  }


  // Abrir enlace en una nueva pestaña
  window.open(url, '_blank');
};
</script>
<style scoped>
.whatsapp {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 100px;
  right: 40px;
  background-color: #25d366;
  color: #FFF;
  border-radius: 50%;
  text-align: center;
  font-size: 30px;
  z-index: 100;
  transition: background-color 0.3s;
}

.whatsapp:hover {
  background-color: #128C7E;
  transform: scale(1.1);
}

.whatsapp-icon {
  margin-top: 15px;
}

</style>
