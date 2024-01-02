<template>
  <v-container class="">
    <v-row class="justify-space-between">
      <v-col cols="12">
        <v-sheet>
          <h1 class="text-h2 bg-indigo-darken-2 w-100">Tecnologías destacadas.</h1>
        </v-sheet>
        <v-sheet class="d-flex mt-5">
          <h1 class="text-h5 w-auto h-100 text-medium-emphasis">Pasa el mouse sobre las imágenes para ver el nivel
            de <span class="bg-success pr-10 pl-2">seniority en cada tecnología.</span> </h1>
          <iframe src="https://giphy.com/embed/AqtUnWJr8RNYLoDt80" width="60" height="60" frameborder="0"
            class="giphy-embed" allowfullscreen></iframe>
        </v-sheet>

      </v-col>
      <v-divider class="border-opacity-0"></v-divider>
      <br>

      <v-col cols="12" md="5">
        <v-sheet class="w-100 h-100">

          <h1 class="text-h2 text-center font-weight-thin end">Front-end.</h1>

          <v-sheet class="d-flex">
            <v-tooltip class="custom-tooltip"
              text="Vue js:  'Experiencia substancial en el desarrollo y en la creación de aplicaciones interactivas y escalables.'"
              location="bottom">
              <template v-slot:activator="{ props }">
                <v-img class="mx-auto" v-bind="props" height="100" max-width="500" :src="vue"></v-img>
              </template>
            </v-tooltip>

            <v-tooltip text="React js:  'Experiencia sólida en desarrollo React con múltiples proyectos completados.'"
              location="bottom">
              <template v-slot:activator="{ props }">
                <v-img class="mx-auto" v-bind="props" height="100" max-width="500" :src="react"></v-img>
              </template>
            </v-tooltip>

            <v-tooltip text="Vuetify:  'Experiencia avanzada en la creación de interfaces atractivas y funcionales.'"
              location="bottom">
              <template v-slot:activator="{ props }">
                <v-img class="mx-auto" v-bind="props" height="100" max-width="500" :src="vuetify"></v-img>
              </template>
            </v-tooltip>
          </v-sheet>
          <v-sheet class="d-flex">
            <v-tooltip
              text="TypeScript: Experiencia substancial en desarrollo , incluyendo aplicaciones frontend y backend, y uso de tipos y características'"
              location="bottom">
              <template v-slot:activator="{ props }">
                <v-img class="mx-auto" v-bind="props" height="100" max-width="500" :src="type"></v-img>
              </template>
            </v-tooltip>
          </v-sheet>
        </v-sheet>
      </v-col>

      <v-divider vertical :thickness="0"></v-divider>

      <v-col cols="12" md="5">
        <v-sheet class="w-100 h-100">
          <h1 class="text-h2 text-center font-weight-thin bg-black end">Back-end.</h1>
          <v-sheet class="d-flex">
            <v-tooltip
              text="Node.js: 'Amplia experiencia en desarrollo backend con Node.js, implementando APIs robustas y escalables.'"
              location="bottom">
              <template v-slot:activator="{ props }">
                <v-img class="mx-auto" v-bind="props" height="100" max-width="500" :src="node"></v-img>
              </template>
            </v-tooltip>

            <v-tooltip
              text="Nest.js: 'aprendiendo sobre controladores, módulos, y la estructura Construyendo proyectos iniciales para aplicar los conceptos aprendidos.'"
              location="bottom">
              <template v-slot:activator="{ props }">
                <v-img class="mx-auto" v-bind="props" height="100" max-width="500" :src="nest"></v-img>
              </template>
            </v-tooltip>

            <v-tooltip
              text="API REST: 'Experiencia avanzada en el diseño y desarrollo de APIs REST, optimización y seguridad.'"
              location="bottom">
              <template v-slot:activator="{ props }">
                <v-img class="mx-auto" v-bind="props" height="100" max-width="500" :src="api"></v-img>
              </template>
            </v-tooltip>
          </v-sheet>
          <v-sheet class="d-flex mt-5">
            <v-tooltip
              text="PostgreSQL:  'Conocimientos iniciales en la administración y consulta de bases de datos , explorando sus funcionalidades y conceptos fundamentales.'"
              location="bottom">
              <template v-slot:activator="{ props }">
                <v-img class="mx-auto" v-bind="props" height="100" max-width="500" :src="sql"></v-img>
              </template>
            </v-tooltip>
          </v-sheet>
        </v-sheet>
      </v-col>
    </v-row>

    <v-sheet class="mt-10">
      <h1 class="text-h6 text-medium-emphasis">
        Algunas tecnologías claves, como <span class="bg-indigo pr-2 pl-2">JavaScript</span>,
        <span class="bg-indigo pr-2 pl-2">HTML</span>, <span class="bg-indigo pr-2 pl-2">CSS</span>,
        son fundamentales y son parte de las tecnologías que se muestran aquí.
      </h1>
    </v-sheet>

    <v-sheet class="mt-10">
      <h1 class="text-h4 font-weight-thin">Sigamos adelante con <span class="bg-error">Estudios y Redes !</span>
      </h1>
    </v-sheet>

    <v-sheet class="text-end w-75 py-1 mt-10">
      <v-col cols="auto">
        <v-btn @click="redirectToEducation" size="x-large" elevation="10"
          class="text-h4 font-weight-thin custom-btn">Vamos
          allá!</v-btn>
      </v-col>
    </v-sheet>
  </v-container>
</template>
  
<script setup>

import { useRouter } from "vue-router";
import vue from '../assets/Skill/vue.svg'
import type from '../assets/Skill/type.png'
import react from '../assets/Skill/react.svg'
import git from '../assets/Skill/git.svg'
import vuetify from "../assets/Skill/vuetify.svg";
import api from '../assets/Skill/api.png'
import node from '../assets/Skill/node.svg'
import nest from '../assets/Skill/nest.svg'
import sql from '../assets/Skill/sql.svg'

const router = useRouter();

const redirectToEducation = () => {

  router.push("/education");
};
</script>
  
<style  scoped>
.custom-btn {
  transition: background-color 0.4s, color 0.4s;
  background-color: #070707;
  color: #ffff;

  @media (max-width: 768px) {
    margin-bottom: 100px;
    margin-left: 60px;
  }
}

.custom-btn:hover {
  background-color: #ffff;
  color: #070707;
}

iframe {
  pointer-events: none;
}





.end {
  overflow: hidden;
  /* Para ocultar el exceso de texto */
  border-right: 0.15em solid orange;
  /* Simula el cursor de la máquina de escribir */
  white-space: nowrap;
  /* Evita que el texto se salte a una nueva línea */
  margin: 0;
  /* Ajusta según sea necesario */
  padding: 0;
  /* Ajusta según sea necesario */
  animation: typing 2s steps(20, end), blink-caret 0.5s step-end infinite;
}

/* Animación para el efecto de máquina de escribir */
@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 100%;
    border-right-width: 0;
  }
}

/* Animación para el cursor intermitente */
@keyframes blink-caret {

  from,
  to {
    border-color: transparent;
  }

  50% {
    border-color: transparent;
  }
}
</style>