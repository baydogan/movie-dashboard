<template>
  <nav-bar />

  <router-view :key="$route.path" />
</template>
<script setup>
import NavBar from "./components/NavBar.vue";
import Home from "./views/Home.vue";

</script>
