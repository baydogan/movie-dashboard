<template>
  <spinner v-if="loading" />
  <error-message v-if="error" :error="error" />
  <div class="movie-list-wrapper">
    <h2 class="home-title">Popular Movies</h2>
    <div class="movie-list">
      <movie-card v-for="movie in popularMovies.results" :key="movie.id" :movie="movie" />
    </div>
    {{ error }}
  </div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";
import useFetch from "../composables/useFetch";
import usePosterPath from "../composables/usePosterPath";
import MovieCard from "../components/MovieCard.vue";
import Spinner from "../components/Spinner.vue";
import ErrorMessage from "../components/ErrorMessage.vue";

const { data: popularMovies, loading, error, fetchData } = useFetch();

onMounted(() => {
  fetchData("https://api.themoviedb.org/3/movie/popular?api_key=" + import.meta.env.VITE_MOVIE_APP_KEY);
});
</script>
