<script setup lang="ts">
import { getImageUrl_image } from '../../utils/imageHelper';

import Navigation from './Navigation.vue';

import { useRouter } from 'vue-router'

const router = useRouter()
function RouterHome(): void {
    router.push('/')

    setTimeout((): void => {
        window.location.reload();
    }, 100)
}


</script>

<template>
    <nav>
        <div id="conatinerContentNavBar">
            <div id="containerLogo" @click="RouterHome">
                <img :src="getImageUrl_image('logo_aplication.png')" alt="">
            </div>

            <Navigation />
        </div>
    </nav>
</template>

<style scoped>
nav {
    /* border: 1px solid red; */
    width: 100vw;
    height: 12vh;
    min-height: 6rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: center;
    position: fixed;
    background-color: #ffffff;
    z-index: 100;
}

#conatinerContentNavBar {
    width: 85%;
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}


</style>