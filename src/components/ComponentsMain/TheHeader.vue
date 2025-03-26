<script setup lang="ts">
import NavBar from '../ComponentsHeader/NavBar.vue';
import { useRouter } from 'vue-router'

const router = useRouter()
function RouterCourse(): void {
    router.push('/Course')
}

</script>

<template>
    <NavBar />

    <header>
        <h1 id="titleHeader">Aprenda Tecnologia com os Melhores</h1>
        <p id="subtitleHeader">Cursos práticos e didáticos para acelerar sua carreira na tecnologia.</p>

        <button id="buttonHeader" @click="RouterCourse">Nossos Cursos</button>
    </header>
</template>

<style scoped>
header {
    width: 100vw;
    min-height: 60vh;
    padding-top: 12vh;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    background-color: #313D5A;
    color: #ffffff;
    
}

#titleHeader {
    font-size: 2.6vw;
}

#subtitleHeader {
    width: 40%;
    font-size: 1.8vw;
    text-align: center;
    /* border: 1px solid red; */
}

#buttonHeader {
    background-color: #F57E00;
    border: 2px solid transparent;
    width: 13rem;
    padding: 13px;
    border-radius: 10px;
    outline: none;
    color: #ffffff;
    font-weight: bold;
    font-size: 1.1vw;
    cursor: pointer;
    transition: all 0.3s;
}

#buttonHeader:hover {
    background-color: #ffffff;
    border: 2px solid #F57E00;
    color: #F57E00;
}

@media(max-height: 800px) {
    header {
        padding-top: 6rem;
    }
}
</style>