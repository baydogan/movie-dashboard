<template>
  <div class="detailed-card-content__container">
    <div>
      <img :src="getPosterPath(props.movie.poster_path)" alt="" class="detailed-card-posters" />
    </div>
    <div class="">
      <h1 class="detailed-card-content__title">
        {{ movie.title }}
      </h1>
      <span v-for="genre in props.movie.genres" :key="genre" class="px-1 text-sm">{{ genre.name }} </span>

      <span class="text-sm"> {{ props.movie.runtime }}min</span>
      <p class="detailed-card-content__description">{{ props.movie.overview }}</p>
      <div class="detailed-card-description__container">
        <div class="mt-2">
          <span class="font-semibold">Production Companies</span>
          <ul>
            <li class="dropdown-menu__item__title" v-for="company in props.movie.production_companies" :key="company">
              {{ company.name }}
            </li>
          </ul>
        </div>
        <div class="mt-2">
          <span class="font-semibold">Production Countries</span>
          <ul>
            <li class="dropdown-menu__item__title" v-for="country in props.movie.production_countries" :key="country">
              {{ country.name }}
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-3">
        <div class="flex flex-col">
          <span class="detailed-card-content__description" v-if="props.movie.budget"
            >Budget: ${{ numberWithCommas(props.movie.budget) }}</span
          >
          <span class="detailed-card-content__description" v-if="props.movie.revenue"
            >Revenue: ${{ numberWithCommas(props.movie.revenue) }}</span
          >
          <span class="detailed-card-content__description">Vote Average: {{ props.movie.vote_average }}</span>
        </div>
        <div class="mt-2">
          <button v-if="!isAdded" @click="store.dispatch('addFavorite', props.movie)" class="card-add-favorite">
            Add to Favorites
          </button>
          <button v-else class="card-remove-favorite" @click="store.dispatch('removeFavorite', props.movie)">
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import usePosterPath from "../composables/usePosterPath";
import { useStore } from "vuex";
import { computed } from "vue";
import { numberWithCommas } from "../helpers/index";
const props = defineProps({ movie: Object });
const { getPosterPath } = usePosterPath();

const store = useStore();
const favoriteList = computed(() => store.getters.favorites);
const findMovie = computed(() => favoriteList.value.find((movie) => movie.id === props.movie.id)); // id getterdan gelen store verisine bakarak filmin favori listesinde olup olmadığını buluyor.
const isAdded = computed(() => Boolean(findMovie.value)); // film favori listesindeyse boolean değer döndürülüyor
</script>
