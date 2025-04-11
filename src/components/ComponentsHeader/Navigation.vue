<script setup lang="ts">
import { getImageUrl_icon } from '../../utils/imageHelper';
import { useRouter } from 'vue-router'

const router = useRouter()


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
        default:
            break;
    }

}

</script>

<template>
    <div id="containerInputSearch">
        <input type="text" placeholder="O que quer aprender?">
        <button>
            <img :src="getImageUrl_icon('icon_search.png')" alt="">
        </button>
    </div>

    <ul id="containerListNavigation">
        <li @click="RouterNavigation">Home</li>
        <li @click="RouterNavigation">Cursos</li>
        <li @click="RouterNavigation">Blog</li>
        <li @click="RouterNavigation">Sobre nós</li>
    </ul>

    <button id="buttonLogin" @click="RouterNavigation">Login</button>
</template>

<style scoped>
#containerInputSearch {
    width: 30%;
    height: 3rem;
    border-radius: 5px;
    border: 2px solid #F57E00;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#containerInputSearch > input {
    width: 70%;
    height: 100%;
    /* background-color: turquoise; */
    height: 100%;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 1.3rem;
    padding: 5px 10px;
}

#containerInputSearch > button {
    width: 20%;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
}

#containerListNavigation {
    width: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    color: #313D5A;
 
}

#containerListNavigation>li {
    border-bottom: 3px solid transparent;
    transition: all 0.3s;
    cursor: pointer;
    font-weight: bold;
}

#containerListNavigation > li:hover {
    color: #F57E00;
    border-bottom: 3px solid #F57E00;
}

#buttonLogin {
    background-color: #F57E00;
    width: 8rem;
    padding: 13px;
    border-radius: 10px;
    border: none;
    outline: none;
    color: #ffffff;
    font-weight: bold;
    font-size: 1.1vw;
    cursor: pointer;
    transition: all 0.3s;
}

#buttonLogin:hover {
    background-color: #ffffff;
    border: 2px solid #F57E00;
    color: #F57E00;
}
</style>