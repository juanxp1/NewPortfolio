<template>
    <v-footer class="d-flex flex-column">
        <div class="bg-teal d-flex w-100 align-center px-4">
            <strong>¡Conéctate con nosotros en las redes sociales!</strong>

            <v-spacer></v-spacer>

            <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="plain" size="small"></v-btn>
        </div>

     
        <strong>Portfolio hecho con ❤️ y dedicacion</strong>
      
    </v-footer>
</template>

<script setup>
const icons = [
    'mdi-facebook',
    'mdi-github',
    'mdi-linkedin',
    'mdi-instagram'
];
</script>
