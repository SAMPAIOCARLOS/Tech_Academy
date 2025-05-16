<script setup lang="ts">
import { ref, watch, defineProps, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();


const props = defineProps({
    Isvalue_SideBar: Boolean,
})

const SideBar = ref<HTMLElement | null>(null)
watch(() => props.Isvalue_SideBar,
    (newVal) => {
        if (newVal) {
            SideBar.value?.classList.add("active")
        } else {
            SideBar.value?.classList.remove("active")
        }
    }
)


const showNameUser = ref(false);
onMounted((): void => {
    const token = localStorage.getItem('token')

    if (token) {
        showNameUser.value = true
    }
})

function RouterNavigation(event: Event): void {
    const target = event.target as HTMLLIElement;

    console.log(target.innerText);

    switch (target.innerText) {
        case 'Home':
            router.push('/');
            break;
        case 'Cursos':
            router.push('/Course');
            break;
        case 'Blog':
            router.push('/Blog');
            break;
        case 'Sobre nós':
            router.push('/AboutUs');
            break;
        case 'Login':
            router.push('/login');
            break;
        case 'Acesse o portal':
            router.push('/StudentPortal');
            break;
        default:
            break;
    }

}
</script>

<template>
    <div id="SideBar" ref="SideBar">
        <ul id="containerListNavigation">
            <li @click="RouterNavigation">Home</li>
            <li @click="RouterNavigation">Cursos</li>
            <li @click="RouterNavigation">Blog</li>
            <li @click="RouterNavigation">Sobre nós</li>
        </ul>


        <div id="container_buttons">
            <button class="buttonNavigation" @click="RouterNavigation" v-if="!showNameUser">Login</button>

            <button class="buttonNavigation" @click="RouterNavigation" v-else>Acesse o portal</button>
        </div>
    </div>
</template>

<style scoped>
#SideBar {
    position: fixed;
    top: 0;
    left: -200%;
    width: 30%;
    height: 100vh;
    /* background: rgb(122, 122, 122); */
    background-color: #4A5A80;
    backdrop-filter: blur(3px);
    z-index: 100;
    padding: 25vh 20px 20px 20px;
    transition: all 0.5s ease-in-out;
}

#SideBar.active {
    left: 0;
}

#containerListNavigation {
    /* border: 2px solid red; */
    color: #ffffff;
    list-style: none;
    font-weight: bold;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
}
#containerListNavigation > li:hover {
    cursor: pointer;
}
#container_buttons {
    display: flex;
    justify-content: center;
    padding: 5rem;
    
}
.buttonNavigation {
    background-color: #F57E00;
    min-width: 8rem;
    padding: 17px;
    border-radius: 10px;
    border: 2px solid transparent;
    outline: none;
    color: #ffffff;
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s;
}

.buttonNavigation:hover {
    background-color: #ffffff;
    border: 2px solid #F57E00;
    color: #F57E00;
}



@media(min-width: 1100px) {
    #SideBar.active {
        left: -200%;
    }
}

@media(max-width: 1100px) {
    #SideBar {
        width: 40%;
    }
}
@media(max-width: 750px) {
    #SideBar {
        width: 50%;
    }
    .buttonNavigation {
        min-width: 15rem;
    }
}
@media(max-width: 600px) {
    #SideBar {
        width: 70%;
    }
}
@media(max-width: 350px) {
    #SideBar {
        width: 100%;
    }
}
</style>