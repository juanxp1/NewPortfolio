<template>
  <v-app-bar elevation-10 class="bg-indigo-lighten-0">
    <v-app-bar-title>
      <v-icon :icon="getRouteIcon" />
      JUAN JOSE BIANCHI
    </v-app-bar-title>
    <template v-slot:append>
      <v-btn v-if="!liked" flat icon color="blue lighten-2" @click="handleLike">
        <v-icon>mdi-thumb-up</v-icon>

      </v-btn>
      <v-btn v-if="!disliked" flat icon color="red lighten-2" @click="handleDislike">
        <v-icon>mdi-thumb-down</v-icon>
      </v-btn>
      <div v-else>
        <h4 class="blue lighten-2"> Gracias por tu Feedback 😊</h4>
      </div>
    </template>
  </v-app-bar>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed, ref } from 'vue';

const route = useRoute();
const likes = ref(parseInt(localStorage.getItem('likes')) || 0);
const dislikes = ref(parseInt(localStorage.getItem('dislikes')) || 0);
const liked = ref(false);
const disliked = ref(false);

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

const handleLike = () => {
  if (!liked.value) {
    likes.value += 1;
    localStorage.setItem('likes', likes.value.toString());
    liked.value = true;
    disliked.value = true;
  }
};

const handleDislike = () => {
  if (!disliked.value) {
    dislikes.value += 1;
    localStorage.setItem('dislikes', dislikes.value.toString());
    disliked.value = true;
    liked.value = true;
  }
};
</script>
