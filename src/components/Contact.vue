<template>
  <v-container class="">
    <v-row>
      <v-col cols="12" md="12">
        <v-sheet>
          <h1 class="text-h2 bg-grey-darken-4 w-100">Contacto.</h1>
        </v-sheet>
        <div>
          <h1 class="text-h6 w-auto h-100 text-medium-emphasis">
            Haz clic en las áreas resaltadas
            para abrir y descargar mi <span class="bg-indigo pr-2 pl-2">CV</span> ,enviar un <span
              class="bg-indigo pr-2 pl-2">correo</span> o contactarme por
            <span class="bg-indigo pr-2 pl-2">WhatsApp.</span>
          </h1>
        </div>
      </v-col>

      <v-col cols="12" md="10">
        <v-sheet class="w-100 py-5">
          <h1 class="text-h5">Radicado en <span class="bg-blue-lighten-4 pl-3 pr-5">Argentina.</span>
          </h1>
        </v-sheet>

        <v-divider :thickness="2" color="error"></v-divider>

        <v-sheet class="w-100 py-5">
          <h1 class="text-h5">Puedes contactarme a
            <a class="text-decoration-none bg-blue-grey-lighten-4 pl-3 pr-5"
              href="mailto:juanjosebianchi90@gmail.com">juanjosebianchi90@gmail.com</a>
          </h1>
        </v-sheet>

        <v-divider :thickness="2" color="error"></v-divider>

        <v-sheet class="w-100 py-5">
          <h1 class="text-h5">Puedes escribirme al <a class="text-decoration-none bg-yellow-darken-4  pl-3 pr-5"
              href="tel:whatsapp://send?phone=+5493517565446"><span @click.prevent="redirectToWhatsApp">+54 9
                341-7565446</span></a></h1>
        </v-sheet>

        <v-divider :thickness="2" color="error"></v-divider>

        <v-sheet class="w-100 py-5">
          <h1 class="text-h5">Eche un vistazo a mi <a class="text-decoration-none bg-info pl-3 pr-5" :href="cv"
              download>Resumem</a> para obtener más
            detalles sobre mí. ¡Estoy
            abierto a comentarios y sugerencias!</h1>
        </v-sheet>
      </v-col>
      <v-divider vertical></v-divider>


    </v-row>

    <v-sheet class="mt-10">
      <h1 class="text-h4 font-weight-thin">Estamos llegando al final, ¿te gustaría conocer más <span class="bg-error">sobre mí ?</span></h1>
    </v-sheet>

    <v-sheet class="text-end w-75 py-1 mt-10">
      <v-col cols="auto">
        <v-btn @click="redirectToAbout" size="x-large" elevation="10" class="text-h4 font-weight-thin custom-btn">Vamos
          allá!</v-btn>
      </v-col>
    </v-sheet>
  </v-container>
</template>
  
<script setup>

import { useRouter } from "vue-router";
import cv from '../assets/cv.pdf'
const router = useRouter();

const redirectToAbout = () => {

  router.push("/about");
};

const redirectToWhatsApp = () => {
  window.location.href = "https://api.whatsapp.com/send?phone=5493417565446";
};
</script>
  
<style  scoped>
.custom-btn {
  transition: background-color 0.4s, color 0.4s;
  background-color: #070707;
  color: #ffff;
}

.custom-btn:hover {
  background-color: #ffff;
  color: #070707;
}
</style>