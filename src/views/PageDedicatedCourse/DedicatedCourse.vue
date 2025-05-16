<script setup lang="ts">
import { getImageUrl_image } from '../../utils/imageHelper';
import { useRoute } from "vue-router";
import { computed } from "vue";

import NavBar from '../../components/ComponentsHeader/NavBar.vue';
import HeaderPageDedicatedCourse from './HeaderPageDedicatedCourse.vue';
import ContentMainPageCourse from './ContentMainPageCourse.vue';
import TheFooter from '../../components/ComponentsMain/TheFooter.vue';

const route = useRoute();

const courseData = computed(() => ({
    id: route.query.id as string || '',
    title: route.query.title as string || 'Curso sem título',
    description: route.query.description as string || 'Descrição não disponível',
    image: route.query.image as string || '/default-image.jpg', // Define uma imagem padrão se for null
    time: route.query.time as string || 'Sem duração',
    textButton: route.query.textButton as string || 'Saiba mais'
}));

</script>

<template>
    <NavBar />
    <HeaderPageDedicatedCourse :id="courseData.id" :title="courseData.title" :description="courseData.description"
        :imageCourse="courseData.image" />
    <ContentMainPageCourse />
    <TheFooter />

</template>

<style scoped>

</style>