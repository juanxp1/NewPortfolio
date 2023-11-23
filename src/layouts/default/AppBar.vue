<template>
  <v-app-bar elevation-10 class="bg-indigo-lighten-0">
    <v-app-bar-title>
      <v-icon :icon="getRouteIcon" />
      JUAN JOSE BIANCHI
    </v-app-bar-title>
  </v-app-bar>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue'

const route = useRoute();

const getRouteIcon = computed(() => {
  if (route.path === '/') {
    return 'mdi-circle-slice-1';
  } else if (route.path === '/project') {
    return 'mdi-circle-slice-2';
  }
  else if (route.path === '/skill') {
    return 'mdi-circle-slice-3';
  }
  else if (route.path === '/education') {
    return 'mdi-circle-slice-4';
  }
  else if (route.path === '/contact') {
    return 'mdi-circle-slice-5';
  }
  else {
    return 'mdi-circle-slice-6';
  }
});
</script>
