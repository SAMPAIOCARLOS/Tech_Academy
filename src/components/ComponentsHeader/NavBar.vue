<script setup lang="ts">
import { ref } from 'vue';
import { getImageUrl_image } from '../../utils/imageHelper';

import Navigation from './Navigation.vue';
import SideBar from './SideBar.vue';

import { useRouter } from 'vue-router'

const router = useRouter()
function RouterHome(): void {
    router.push('/')

    setTimeout((): void => {
        window.location.reload();
    }, 100)
}

const showSIdeBar = ref(false)
function openSideBar(event: Event): void {
    const button = event.currentTarget as HTMLDivElement
    button.classList.toggle('active')
    showSIdeBar.value = !showSIdeBar.value
}


</script>

<template>
    <nav>
        <div id="conatinerContentNavBar">
            <div id="containerLogo" @click="RouterHome">
                <img :src="getImageUrl_image('logo_aplication.png')" alt="">
            </div>

            <Navigation />

            <div class="hamburguer" @click="openSideBar">
                <span class="line-span"></span>
                <span class="line-span"></span>
                <span class="line-span"></span>
            </div>
        </div>
    </nav>

    <SideBar :Isvalue_SideBar="showSIdeBar"/>
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
    z-index: 200;
}

#conatinerContentNavBar {
    width: 85%;
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
}
.hamburguer {
    display: none;
    flex-direction: column;
    gap: 0.3rem;
    z-index: 1000;
    cursor: pointer;
}


.line-span {
    width: 2.5rem;
    height: 0.3rem;
    border-radius: 10px;
    background-color: #000000;
    transition: 0.5s;
}

.hamburguer.active .line-span:nth-child(2) {
    opacity: 0;
    transition: 0.3s;
}

.hamburguer.active .line-span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
    transition: 0.5s;
    /* background-color: #000000; */
}

.hamburguer.active .line-span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
    transition: 0.5s;
    /* background-color: #000000; */
}

@media(max-width: 1100px) {
    .hamburguer {
        display: flex;
    }
}

</style>