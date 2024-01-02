
<template>
    <v-container>
        <v-row no-gutters>
            <v-col cols="12">
                <v-sheet>
                    <h1 class="text-h2 bg-black w-100">Proyectos destacados.</h1>
                </v-sheet>
            </v-col>
            <v-divider class="border-opacity-0"></v-divider>
            <br>
            <v-col cols="12" md="8">
                <v-carousel show-arrows="hover" class="bg-indigo-darken-1 h-auto pa-1" v-model="currentCarouselItem"
                    @input="updateDescription">
                    <v-carousel-item :src="hmusic" contain></v-carousel-item>
                    <v-carousel-item :src="portal" contain></v-carousel-item>
                    <v-carousel-item :src="conin" contain></v-carousel-item>
                </v-carousel>
            </v-col>
            <v-col cols="12" md="4">
                <v-sheet class="h-100" style="overflow-y: auto;">
                    <h5 class="text-h4 font-weight-regular ml-2">
                        {{ descriptions[currentCarouselItem].title }}
                    </h5>
                    <v-sheet class="font-weight-regular ml-2 pa-2" elevation="3">
                        <p style="max-height: 300px; overflow-y: auto;">{{ descriptions[currentCarouselItem].description }}
                        </p>
                    </v-sheet>
                    <v-sheet class="w-100 justify-center d-flex mt-5 mb-5">
                        <v-btn :href="descriptions[currentCarouselItem].web" target="_blank" class="custom-btnn w-75">
                            Ir al sitio web
                        </v-btn>
                    </v-sheet>
                </v-sheet>
            </v-col>
            <p class="text-disabled">
                Si te gustaría conocer más detalles sobre mi participación en estos proyectos, ¡no dudes en contactarme!
            </p>
        </v-row>

        <v-sheet class="mt-8">
            <h1 class="text-h4 font-weight-thin">Sigamos con las <span class="bg-error">Tecnologías destacadas
                    !</span>
            </h1>
        </v-sheet>

        <v-sheet class="text-end w-75 py-1 mt-10">
            <v-col cols="auto">
                <v-btn @click="redirectTSkill" size="x-large" elevation="10" class="text-h4 font-weight-thin custom-btn">Vamos allá!</v-btn>
            </v-col>
        </v-sheet>
    </v-container>
</template>
  
<script setup>
import { ref } from 'vue';
import hmusic from '../assets/bizza.png'
import portal from '../assets/portal.png'
import conin from '../assets/conin.png'
import { useRouter } from "vue-router";

const router = useRouter();

const redirectTSkill = () => {

  router.push("/skill");
};



const descriptions = ref([
    {
        title: "Hmusic",
        description: "Me especialicé en la maquetación del diseño utilizando React + Vite JS. Realicé la implementación de hojas de estilos para lograr una apariencia visual atractiva. Diseñé y desarrollé una emocionante App de streaming de música con características únicas. Este proyecto incluyó la implementación de autenticación, pasarela de pagos, un menú altamente responsivo, funcionalidad para marcar como favoritos, opciones de búsqueda avanzada, filtrado, ordenamiento y mucho más.",
        web: 'https://henrymusic.tech/'
    },
    {
        title: "Portal Ciudadano",
        description: "Como Desarrollador Full Stack en Soluciones Tecnológicas Jacgx, he tenido el privilegio de desempeñarme en este rol desde junio hasta la fecha actual. Durante este tiempo, mis principales responsabilidades han estado centradas en el desarrollo del backend utilizando Nest.js, Node.js y TypeScript. Además, he liderado la creación del frontend utilizando Vue.js + Vuetify y TypeScript, asegurando una integración fluida entre ambas partes del sistema. He tenido una participación activa en varios proyectos, contribuyendo en la implementación de funcionalidades y garantizando la correcta interacción y comunicación entre el backend y el frontend. Uno de los proyectos más destacados en los que he trabajado es el desarrollo y mejora continua del Portal Ciudadano, donde la experiencia de usuario y la optimización del rendimiento son aspectos clave.",
        web: "https://portalciudadano.idrd.gov.co/"
    },
    {
        title: "Conin Tucuman",
        description: "En Conin, tuve la oportunidad de desempeñarme como Encargado de UX/UI y Front-end. Durante mi tiempo en esta posición, utilicé herramientas como Figma para diseñar la interfaz de usuario y maqueté el diseño utilizando React JS. Me encargué de la implementación de hojas de estilos para garantizar una apariencia visual coherente y atractiva en la aplicación.",
        web: "https://www.conintucuman.org/"
    }
]);


const currentCarouselItem = ref(1);

const updateDescription = (value) => {
    currentCarouselItem.value = value;
}

</script>



  
<style  scoped>

.text-disabled{font-size: 15px;}
.custom-btn {
    transition: background-color 0.3s, color 0.3s;
    background-color: #070707;
    color: #ffff;
    @media (max-width: 768px){
    margin-bottom: 100px;
    margin-left: 60px;
  }
}

.custom-btn:hover {
    background-color: #ffff;
    color: #070707;
}

.custom-btnn {
    transition: background-color 0.3s, color 0.3s;
    background-color: #3949AB;
    color: #ffff;
}

.custom-btnn:hover {
    background-color: #ffff;
    color: #070707;
}
</style>