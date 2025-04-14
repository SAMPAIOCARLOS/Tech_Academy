<script setup lang="ts">
import { ref } from 'vue'
import NavBar_portal from './componentsHeader_portal/NavBar_portal.vue';

import SectionHome from './componentsHome/SectionHome.vue';
import SectionNotifications from './componentsNotifications/SectionNotifications.vue';
import SectionCourse from './componentsCourse/SectionCourse.vue';
import SectionUserData from './componentsEditDataUser/SectionUserData.vue';


const containerMain_studentPortal = ref<HTMLElement | null>(null)
// function Reajuste_contentMain(): void {
//     containerMain_studentPortal.value?.classList.toggle('SideBarActive')
// }
const sectionActive = ref('Home')

function alterSection(event: string): void {
    const sectionSelected = ref(event)
    // console.log("o modelo passado pela navegação é: ", sectionActive);

    switch (sectionSelected.value) {
        case 'Home':
            console.log("o modelo é:", sectionSelected.value);
            sectionActive.value = 'Home'
            break;
        case 'Notificações':
            console.log("o modelo é:", sectionSelected.value);
            sectionActive.value = 'Notificações'
            break;
        case 'Meus Cursos':
            console.log("o modelo é:", sectionSelected.value);
            sectionActive.value = 'Meus Cursos'
            break;
        case 'Editar perfil':
            console.log("o modelo é:", sectionSelected.value);
            sectionActive.value = 'Editar perfil'
            break;
        case 'Sair':
            console.log("o modelo é:", sectionSelected.value);
            sectionActive.value = 'Sair'
            break;
    
        default:
            break;
    }
}
</script>

<template>
    <NavBar_portal @selectItem="alterSection($event)" />

    <div id="containerMain_studentPortal" ref="containerMain_studentPortal">
        <div id="containerTitLeSection">
            <SectionHome v-if="sectionActive == 'Home'" />
            <SectionNotifications v-if="sectionActive == 'Notificações'" />
            <SectionCourse v-if="sectionActive == 'Meus Cursos'" />
            <SectionUserData v-if="sectionActive == 'Editar perfil'"/>
        </div>
    </div>
</template>

<style scoped>
#containerMain_studentPortal{
    width: 90%;
    min-height: 100vh;
    margin-left:7rem;
    background-color: rgb(255, 255, 255);
    padding-top: 12vh;
    color: #000000;
    border: 3px solid red;
}


#containerTitLeSection {
    /* border: 2px solid red; */
}



@media(max-width: 600px) {
    #containerMain_studentPortal {
        width: 90%;
        margin: auto;
    }
}

</style>