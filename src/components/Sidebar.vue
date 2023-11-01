<template>
    <v-navigation-drawer :width="180" elevation="3" class="text-start api">
        <v-list-item @click="redirectTHome" class="custom-btn" link title="<&nbsp; Home&nbsp;/>"></v-list-item>

        <v-list-item @click="redirectToProjects" class="custom-btn" link title=" <&nbsp;Proyectos &nbsp;/>"></v-list-item>

        <v-list-item @click="redirectToSkill" class="custom-btn" link title="<&nbsp; Skills&nbsp;/>"></v-list-item>

        <v-list-item @click="redirectToEducation" class="custom-btn" link title="<&nbsp;Education &nbsp;/>"></v-list-item>

        <v-list-item @click="redirectToContact" class="custom-btn" link title="<&nbsp; Contact &nbsp;/>"></v-list-item>
        <v-list-item @click="redirectToAbout" class="custom-btn" color="primary" link
            title="<&nbsp;About &nbsp;/>"></v-list-item>
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
.api {
    padding-top: 30px;
}

.custom-btn {
    transition: background-color 0.3s, color 0.3s;
}

.custom-btn:hover {
    background-color: #070707;
    color: whitesmoke;
}


</style>