<template>
    <v-navigation-drawer :width="203">
        <v-list-item @click="redirectTHome" class="custom-btn" link title="< Home />"></v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="redirectToProjects" class="custom-btn" link title=" <Proyectos />"></v-list-item>
        <v-list-item @click="redirectToSkill" class="custom-btn" link title="<Skills />"></v-list-item>
        <v-list-item @click="redirectToEducation" class="custom-btn" link title="<Education />"></v-list-item>
        <v-list-item @click="redirectToContact" class="custom-btn" link title="<Contact />"></v-list-item>
        <v-list-item @click="redirectToAbout" class="custom-btn" link title="<About />"></v-list-item>
    </v-navigation-drawer>
</template>

<script setup>

import { useRouter } from "vue-router";

const router = useRouter();

const redirectTHome = () => {
    router.push("/");
};
const redirectToProjects = () => {
    router.push("/project");
};
const redirectToSkill = () => {
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
.custom-btn {
    transition: background-color 0.3s, color 0.3s;
}

.custom-btn:hover {
    background-color: #070707;
    color: whitesmoke;
}
</style>