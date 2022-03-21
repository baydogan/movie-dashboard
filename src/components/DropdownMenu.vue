<template>
  <div class="dropdown-menu">
    <span v-if="props.searchResults < 1">No matched results</span>
    <ul v-else>
      <li v-for="result in props.searchResults" :key="result.index" @click="closePopup">
        <router-link :to="/movie/ + result.id" class="dropdown-menu__item">
          <img :src="getPosterPath(result.poster_path)" alt="" class="md:w-20 w-12 shadow-lg" />
          <div class="flex flex-col">
            <span class="dropdown-menu__title">{{ result.title }} </span>
            <span class="text-sm">{{ result.release_date.substring(0, 4) }}</span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import usePosterPath from "../composables/usePosterPath";
import { watchEffect, ref } from "vue";
const props = defineProps({ searchResults: Object, closePopup: Function });
const noResults = "No results found";
const { getPosterPath } = usePosterPath();

</script>
