<template>
  <div class="movie-card-wrapper">
    <div class="movie-card-container">
      <span class="movie-card__vote_section"> {{ props.movie.vote_average }}</span>
      <img :src="getPosterPath(props.movie.poster_path)" class="movie-card__poster" />

      <div class="px-6 py-4">
        <div
          class="movie-card__content__title"
          :class="{ 'text-sm': movie.title.length > 20, 'text-xl': movie.title.length < 20 }"
        >
          {{ props.movie.title }}
        </div>
        <p class="movie-card__content__description" :class="{ 'text-sm': movie.overview.length > 300 }">
          {{ props.movie.overview }}
        </p>
      </div>
      <div class="movie-card__content">
        <router-link :to="/movie/ + movie.id">
          <button class="movie-card__content__buttons">Get more Info</button>
        </router-link>
        <button
          v-if="!isAdded"
          @click="store.dispatch('addFavorite', props.movie)"
          class="card-add-favorite"
        >
          Add to Favorites
        </button>
        <button
          v-else
          class="card-remove-favorite"
          @click="store.dispatch('removeFavorite', props.movie)"
        >
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import usePosterPath from "../composables/usePosterPath";
import { useStore } from "vuex";
import { computed } from "vue";

const props = defineProps({
  movie: Object,
});

const store = useStore();
const favoriteList = computed(() => store.getters.favorites);
const findMovie = computed(() => favoriteList.value.find((movie) => movie.id === props.movie.id));
const isAdded = computed(() => Boolean(findMovie.value));

const { getPosterPath } = usePosterPath();
</script>

