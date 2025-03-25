<script setup lang="ts">
import { getImageUrl_image } from '../../utils/imageHelper';


</script>

<template>
    <footer>

        <img :src="getImageUrl_image('logo_aplication_footer.png')" alt="LogoAplication">

    </footer>
</template>

<style scoped>
footer {
    width: 100vw;
    height: 15vh;
    min-height: 10rem;
    background-color: #313D5A;
    display: flex;
    justify-content: center;
    align-items: center;
}


</style>