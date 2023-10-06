<template>
  <v-app>
    <default-bar />
    <Sidebar />
    <default-view />
  </v-app>
</template>

<script setup>
import DefaultBar from './AppBar.vue'
import Sidebar from '@/components/Sidebar.vue';
import DefaultView from './View.vue'
</script>
