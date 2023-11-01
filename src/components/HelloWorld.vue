<template>
  <v-container class="">
    <v-row no-gutters>
      <v-col cols="12">
        <v-sheet>
          <h1 class="text-h1">Hola !</h1>
          <h1 class="text-h2">Me llamo <span class="bg-primary pl-2 pr-4">Juan :)</span> <br><span class=""></span>
          </h1>
          <h2 class="text-h3 font-weight-light mt-3">Bienvenidos a mi Portfolio.</h2>
        </v-sheet>
      </v-col>
      <v-divider class="border-opacity-0"></v-divider>
      <br><br>
      <v-col cols="11">
        <v-sheet class="">
          <h1 class="text-h3 font-weight-thin">
            Permíteme llevarte en un breve recorrido a través de mis <span class="bg-warning">habilidades y
              experiencias .</span>
          </h1>
        </v-sheet>
      </v-col>
    </v-row>
    <v-sheet class="mt-10">
      <h1 class="text-h4 font-weight-thin">Comencemos con los <span class="bg-error">Proyectos destacados !</span>
      </h1>
    </v-sheet>

    <v-sheet class="text-end w-75 py-1 mt-10">
      <v-col cols="auto">
        <v-btn @click="redirectToProjects" size="x-large" elevation="10" class="text-h4 font-weight-thin custom-btn">Vamos
          allá!</v-btn>
      </v-col>
    </v-sheet>
  </v-container>
</template>

<script setup>

import { useRouter } from "vue-router";

const router = useRouter();

const redirectToProjects = () => {

  router.push("/project");
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