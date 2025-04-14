<script setup lang="ts">
import FormRegister from './FormRegister.vue';
import { getImageUrl_image } from '../../utils/imageHelper';

import { useRouter } from 'vue-router'

const router = useRouter()
function RouterHome(): void {
    router.push('/')

    setTimeout((): void => {
        window.location.reload();
    }, 100)
}

function Router(path_router: string): void {
    router.push(path_router)

}
</script>

<template>
    <nav>
        <div id="containerNavBar">
            <div id="containerLogo" @click="RouterHome">
                <img :src="getImageUrl_image('logo_aplication.png')" alt="">
            </div>

            <p id="buttonReturnLogin" @click="Router('/login')">Voltar</p>
        </div>
    </nav>

    <div id="containerFormRegister">
        <FormRegister />
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
    position: fixed;
}

#containerNavBar {
    /* border: 1px solid red; */
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#containerFormRegister {
    width: 100%;
    min-height: 100vh;
    background-color: #313D5A;
    padding-top: 12vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10rem;
    padding-bottom: 5rem;
    
}

#buttonReturnLogin {
    color: #000000b4;
    font-weight: bold;
    font-size: 1.5rem;
    cursor: pointer;
}


@media(max-height: 800px) {
    #containerFormRegister {
        padding-top: 10rem;
    }
}
</style>