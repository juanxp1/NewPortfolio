<template>
    <v-container>
        <v-sheet>
            <h1 class="text-h1">Hola !</h1>
        </v-sheet>
        <v-divider class="border-opacity-0"></v-divider>

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