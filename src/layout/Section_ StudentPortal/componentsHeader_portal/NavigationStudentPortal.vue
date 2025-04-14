<script setup lang="ts">
import { ref, defineEmits } from 'vue'

import * as interfaces from '../../../interfaces/interface';
import { getImageUrl_icon } from '../../../utils/imageHelper';

defineProps({
    Isvalue_TextSideBar: Boolean,
})

const emit = defineEmits(['selectItem'])

const data_navigation = ref<interfaces.NavigationSideBar[]>([
    {
        id: 1,
        name: 'Home',
        icon: 'icone_home.png',
    },
    {
        id: 2,
        name: 'Notificações',
        icon: 'icone_notificacao.png',
    },
    {
        id: 3,
        name: 'Meus Cursos',
        icon: 'icone_cursos.png',
    },
    {
        id: 4,
        name: 'Editar perfil',
        icon: 'icone_editData.png',
    },
    {
        id: 5,
        name: 'Sair',
        icon: 'icone_sair.png',
    }
])

function RouterNavigation(event: Event): void {
    const itemLi = event.currentTarget as HTMLLIElement;
    const nameItem_navigation = itemLi.querySelector('p')?.textContent;

    switch (nameItem_navigation) {
        case 'Home':
            console.log('Home');
            emit('selectItem', nameItem_navigation)

            // PRECISO EMITIR UM EVENTO AQUI PARA CADA UM PARA NO COMPONENTE PRINCIPAL DO PORTAL DO USUÁRIO EXIBIR OS COMPONENTS CERTOS
            
            break;
        case 'Notificações':
            console.log('Notificações');
            emit('selectItem', nameItem_navigation)

            break;
        case 'Meus Cursos':
            console.log('Meus Cursos');
            emit('selectItem', nameItem_navigation)

            break;
        case 'Editar perfil':
            console.log('Editar perfil');
            emit('selectItem', nameItem_navigation)

            break;
        case 'Sair':
            console.log('Sair');
            emit('selectItem', nameItem_navigation)

            break;
        default:
            console.log('Nenhuma rota SideBar Selecionada');
            break;
    }
    
}
</script>

<template>
    <ul>
        <li v-for="item in data_navigation" :key="item.id" @click="RouterNavigation">
            <div class="containerIcon">
                <img :src="getImageUrl_icon(item.icon)" alt="">
            </div>

            <!-- Transição suave do texto -->
            <transition name="fade" appear>
                <p v-show="Isvalue_TextSideBar">{{ item.name }}</p>
            </transition>
        </li>
    </ul>
</template>


<style scoped>
ul {
    list-style: none;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    gap:3rem;
}

li {
    max-height: 2rem;
    /* border: 1px solid rgb(255, 0, 0); */
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
}


.containerIcon {
    min-width: 40px;
    height: 40px;
    /* border: 1px solid #ffffff; */
}
.containerIcon > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

p {
    font-size: 1.3rem;
}


.fade-enter-active,
.fade-leave-active {
    transition: all 0.3s ease 0.2s;
}

.fade-enter-from {
    opacity: 0;
    transform: translateX(-10px);
}

.fade-enter-to {
    opacity: 1;
    transform: translateX(0);
}

.fade-leave-to {
    opacity: 0;
    transform: translateX(-10px);
}
</style>