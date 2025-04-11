<script setup lang="ts">
import { ref } from 'vue'
import NavBar_portal from './componentsHeader_portal/NavBar_portal.vue';


const containerMain_studentPortal = ref<HTMLElement | null>(null)
function Reajuste_contentMain(): void {
    containerMain_studentPortal.value?.classList.toggle('SideBarActive')
}
</script>

<template>
    <NavBar_portal @openSideBar="Reajuste_contentMain" />

    <div id="containerMain_studentPortal" ref="containerMain_studentPortal">
        <div id="containerTitLeSection">
            <h1>edee</h1>
        </div>
    </div>
</template>

<style scoped>
#containerMain_studentPortal{
    width: 90%;
    height: 100vh;
    margin-left: 8%;
    background-color: rgb(255, 255, 255);
    padding-top: 12vh;
    color: #000000;
}

#containerMain_studentPortal.SideBarActive {
    width: 75%;
    height: 100vh;
    margin-left: 25%;
}

#containerTitLeSection {
    border: 2px solid red;
}
</style>