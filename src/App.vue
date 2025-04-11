<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import Home from './layout/Home.vue';

const route = useRoute()


</script>

<template>

  <Home v-if="!['/Course', '/Blog', '/AboutUs', '/DedicatedCourse', '/login', '/register', '/StudentPortal'].includes(route.path)"/>

  <router-view v-else></router-view>

</template>

<style scoped>

</style>
