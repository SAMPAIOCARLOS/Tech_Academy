<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import SideBar_portal from './SideBar_portal.vue'

import { getImageUrl_image } from '../../../utils/imageHelper';


const emits = defineEmits(['openSideBar', 'selectItem'])



const showSideBar = ref(false)

function openSideBar(event: Event): void {
    const button = event.currentTarget as HTMLDivElement

    button.classList.toggle('active')
    showSideBar.value = !showSideBar.value
}


function selectItem(event: Event): void {
    emits('selectItem', event)
}
</script>

<template>
    <nav>
        <div id="containerLogo_menu">
            <div class="hamburguer" @click="openSideBar">
                <span class="line-span"></span>
                <span class="line-span"></span>
                <span class="line-span"></span>
            </div>
            <div id="containerLogo">
                <img :src="getImageUrl_image('logo_aplication_footer.png')" alt="">
            </div>
        </div>
    </nav>

    <!-- Passando o valor da ref corretamente -->
    <SideBar_portal :Isvalue_SideBar="showSideBar" @selectItem="selectItem($event)" />
</template>


<style scoped>
nav {
    width: 100%;
    height: 12vh;
    background-color: #313D5A;
    min-height: 6rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 200;
}

#containerLogo_menu {
    width: 20%;
    /* border: 1px solid blue; */
    display: flex;
    align-items: center;
    gap: 3rem;
    padding-left: 2rem;
}

.hamburguer {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    z-index: 1000;
    cursor: pointer;
}



.line-span {
    width: 2.5rem;
    height: 0.3rem;
    border-radius: 10px;
    background-color: #ffffff;
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
</style>