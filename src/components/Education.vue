<template>
    <v-container class="">
        <v-row no-gutters>
            <v-col cols="12">
                <v-sheet>
                    <h1 class="text-h2 bg-cyan-darken-3 w-100">Educación Profesional.</h1>
                </v-sheet>
            </v-col>
            <v-divider class="border-opacity-0"></v-divider>
            <br><br>


            <v-col cols="12" md="10">
                <v-sheet class="w-100 hover">
                    <h1 class="text-h5 w-auto text-high-emphasis">Full Stack Web Developer .</h1>
                    <p class='text-h6 text-medium-emphasis'> Bootcamp, 1 año de formación teórico-práctica. (2022 -
                        2023)</p>
                </v-sheet>

                <v-divider :thickness="2" color="error"></v-divider>

                <v-sheet class="w-100 hover">
                    <h1 class="text-h5 w-auto text-high-emphasis">Diseño Web.</h1>
                    <p class='text-h6 text-medium-emphasis'>FreeCodeCamp  (2022)</p>cd
                </v-sheet>

                <v-divider :thickness="2" color="error"></v-divider>

                <v-sheet class="w-100 hover">
                    <h1 class="text-h5 w-auto text-high-emphasis">SCRUM Master .</h1>
                    <p class='text-h6 text-medium-emphasis'>Certif-Prof. (2023)</p>
                </v-sheet>

                <v-divider :thickness="2" color="error"></v-divider>

                <v-sheet class="w-100 hover">
                    <h1 class="text-h5 w-auto text-high-emphasis">Analista en Sistemas .</h1>
                    <p class='text-h6 text-medium-emphasis'>Instituto Cervantes, Córdoba Capital. (2020 - 2022)</p>
                </v-sheet>

                <v-divider :thickness="2" color="error"></v-divider>

                <v-sheet class="w-100 hover">
                    <h1 class="text-h5 w-auto text-high-emphasis">Bachillerato .</h1>
                    <p class='text-h6 text-medium-emphasis'>Colegio de Sur, Título secundario completo.</p>
                </v-sheet>
            </v-col>
            <v-divider vertical></v-divider>
        </v-row>
        <v-sheet class="mt-10">
            <h1 class="text-h4 font-weight-thin">
                Sigamos con mis datos<span class="bg-error"> de Contacto!</span>
            </h1>
        </v-sheet>

        <v-sheet class="text-end w-75 py-1 mt-10">
            <v-col cols="auto">
                <v-btn @click="redirectToContact" size="x-large" elevation="10"
                    class="text-h4 font-weight-thin custom-btn">Vamos
                    allá!</v-btn>
            </v-col>
        </v-sheet>
    </v-container>
</template>
  
<script setup>

import { useRouter } from "vue-router";
const router = useRouter();

const redirectToContact = () => {

    router.push("/contact");
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

.hover {
    /* Agrega otras propiedades según sea necesario para el elemento */
    transition: box-shadow 0.3s ease-in-out;
    /* Agrega una transición suave para el efecto hover */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0);
    padding: 10px;
    border-radius: 2px;
}

.hover:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
    /* Cambia la sombra al hacer hover */
}
</style>