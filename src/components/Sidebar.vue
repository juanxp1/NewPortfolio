<template>
    <v-navigation-drawer :width="160"  elevation="15" class="text-start api">
        <v-list-item @click="redirectHome" class="custom-btn" link title="&lt; Inicio &gt;"></v-list-item>

        <v-list-item @click="redirectToProjects" class="custom-btn" link title="&lt; Proyectos &gt;"></v-list-item>

        <v-list-item @click="redirectToSkills" class="custom-btn" link title="&lt; Habilidades &gt;"></v-list-item>

        <v-list-item @click="redirectToEducation" class="custom-btn" link title="&lt; Educación &gt;"></v-list-item>

        <v-list-item @click="redirectToContact" class="custom-btn" link title="&lt; Contacto &gt;"></v-list-item>
        <v-list-item @click="redirectToAbout" class="custom-btn" color="primary" link
            title="&lt; Acerca de &gt;"></v-list-item>
    </v-navigation-drawer>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const redirectHome = () => {
    router.push("/");
};

const redirectToProjects = () => {
    router.push("/project");
};

const redirectToSkills = () => {
    router.push("/skill");
};

const redirectToEducation = () => {
    router.push("/education");
};

const redirectToContact = () => {
    router.push("/contact");
};

const redirectToAbout = () => {
    router.push("/about");
};
</script>

<style scoped>
.api {
    padding-top: 30px;
}

.custom-btn {
    transition: background-color 0.3s, color 0.3s;
    margin-bottom: 25px;
}

.custom-btn:hover {
    background-color: #070707;
    color: whitesmoke;
}
</style>
