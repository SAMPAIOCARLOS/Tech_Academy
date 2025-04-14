<script setup lang="ts">
import { getImageUrl_image } from '../../utils/imageHelper';
import { useRoute } from "vue-router";
import { computed } from "vue";

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
    <div>
        <div class="dedicated-course">
            <h1>{{ courseData.title }}</h1>
            <img :src="getImageUrl_image(courseData.image)" :alt="courseData.title" />
            <p>{{ courseData.description }}</p>
            <p>Duração: {{ courseData.time }}</p>
            <button>{{ courseData.textButton }}</button>


            <h1>o id é {{ courseData.id }}</h1>
        </div>
    </div>
</template>

<style scoped>
div {
    width: 100%;
    height: 100vh;
    background-color: blue;
}
</style>