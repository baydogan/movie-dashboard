<template>
  <div>
    <movie-detail-card :movie="movie" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import useFetch from "../composables/useFetch";
import MovieDetailCard from "../components/MovieDetailCard.vue";

const route = useRoute();
const routeId = route.params.id;
const { data: movie, loading, error, fetchData } = useFetch();



onMounted(() => {
  fetchData(`https://api.themoviedb.org/3/movie/${routeId}?api_key=${import.meta.env.VITE_MOVIE_APP_KEY}`);
});
</script>
