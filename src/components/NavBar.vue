<template>
  <nav>
    <div class="nav-container">
      <li>
        <router-link :to="{ name: 'home' }">
          <span class="logo">Movie Dashboard</span>
        </router-link>
      </li>
      <div>
        <div>
          <div class="search-box">
            <svg
              class="svg-icon search-icon md:h-6 md:w-6 absolute md:left-3 left-56 h-4 w-4"
              aria-labelledby="title desc"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 19.9 19.7"
            >
              <title id="title">Search Icon</title>
              <desc id="desc">A magnifying glass icon.</desc>
              <g class="search-path" fill="none" stroke="#848F91">
                <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
                <circle cx="8" cy="8" r="7" />
              </g>
            </svg>
            <input v-model="searchTerm" placeholder="Search for movies" type="text" @input="fetchTrigger" />
          </div>
          <dropdown-menu :search-results="searchResults.results" :closePopup="closePopup" v-if="isDropdownOpen" />
        </div>
      </div>
      <div class="desktop-btn-group">
        <ul>
          <li>
            <router-link :to="{ name: 'home' }">
              <span class="desktop-btn">Home</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'favorites' }">
              <span class="desktop-btn">Favorites</span>
            </router-link>
          </li>
        </ul>
      </div>
      <button type="button" class="hamburger-btn">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  </nav>
  <div class="h-1 bg-slate-200 shadow-2xl"></div>
</template>

<script setup>
import { ref, watchEffect, onUpdated } from "vue";
import { useRoute } from "vue-router";
import useFetch from "../composables/useFetch";
import DropdownMenu from "./DropdownMenu.vue";
const searchTerm = ref("");
const url = ref("");

const { fetchData, data: searchResults, loading, error } = useFetch();
const route = useRoute();
const isDropdownOpen = ref(false);

// search term uzunluğu 3'ten küçükse dropdown'u kapat
watchEffect(() => {
  if (searchTerm.value.length < 3) {
    searchResults.value = [];
    isDropdownOpen.value = false;
  }
});

const closePopup = () => { // arama seçeneğine tıklandığında dropdown'ı kapatmak için bir fonksiyon
  isDropdownOpen.value = false;
  searchTerm.value = "";
};

//search term'de değişiklik varsa url'i güncelle
watchEffect(() => {
  url.value = ` https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_MOVIE_APP_KEY}&query=${
    searchTerm.value
  }`;
});

// search term uzunluğu 3'ten büyükse datayı çekip dropdown'u aç
const fetchTrigger = () => {
  if (searchTerm.value.length > 3) {
    fetchData(url.value);
    isDropdownOpen.value = true;
  }
};
</script>
