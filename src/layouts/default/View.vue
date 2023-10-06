<template>
  <v-main>
    <router-view />
    <br><br>
    <v-footer elevation="5" class="d-flex flex-column font-weight-thin">
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
import { useRouter } from 'vue-router';

const icons = [
  'mdi-github',
  'mdi-linkedin',
  'mdi-instagram'
];

const router = useRouter();

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
