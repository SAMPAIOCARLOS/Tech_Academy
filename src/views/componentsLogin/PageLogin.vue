<script setup lang="ts">
import FormLogin from './FormLogin.vue';

import { getImageUrl_image } from '../../utils/imageHelper';

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
        <div id="containerNavBar">
            <div id="containerLogo" @click="RouterHome">
                <img :src="getImageUrl_image('logo_aplication.png')" alt="">
            </div>
        </div>
    </nav>

    <div id="containerFormLogin">
        <FormLogin />
    </div>
</template>

<style scoped>
nav {
    width: 100vw;
    height: 12vh;
    min-height: 6rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: center;
    position: fixed;
    background-color: #ffffff;
    z-index: 200;
}

#containerNavBar {
    width: 85%;
    display: flex;
    align-items: center;
}

#containerFormLogin {
    width: 100%;
    height: 100vh;
    background-color: #313D5A;
    padding-top: 12vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media(max-height: 800px) {
    #containerFormLogin {
        padding-top: 6rem;
    }
}
</style>