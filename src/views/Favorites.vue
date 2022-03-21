<template>
  <div class="movie-list-wrapper">
    <h2 v-if="favoriteList.length > 0" class="home-title">Favorite List</h2>
    <h2 v-else class="home-title">No added movie</h2>
    <div class="movie-list">
      <movie-card v-for="movie in favoriteList" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script setup>
import MovieCard from "../components/MovieCard.vue";
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();
const favoriteList = computed(() => store.getters.favorites);

</script>
