<script setup lang="ts">
import { getImageUrl_icon } from '../../utils/imageHelper';

</script>

<template>
    <div id="containerContentMain">
        <div id="FirstcontainerContent">
            <ul>
                <li>
                    <img :src="getImageUrl_icon('icon_time.png')" alt="icone relogio">
                    <p>30h</p>
                </li>
                <li>
                    <img :src="getImageUrl_icon('icon_qualidade.png')" alt="icone certificado">
                    <p>Certificado</p>
                </li>
                <li>
                    <img :src="getImageUrl_icon('icon_pc.png')" alt="icone pc">
                    <p>Online</p>
                </li>
            </ul>
        </div>
        <div id="SecondcontainerContent">
            <h2>O que você vai aprender</h2>
            <p>Estruturação de páginas com HTML5, estilização avançada com CSS3, Flexbox, Grid Layout e design
                responsivo para diferentes dispositivos.</p>
            <h2>Público - Alvo</h2>
            <p>Ideal para iniciantes que querem ingressar no desenvolvimento web, designers que desejam aprofundar seus
                conhecimentos em código e profissionais que buscam aprimorar suas habilidades.</p>
        </div>
    </div>
</template>

<style scoped>
#containerContentMain {
    width: 100%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    align-items: center;
    justify-content: center;
}
#FirstcontainerContent {
    width: 85%;
    min-height: 15vh;
    background-color: #A7C0D9;
    border-radius: 10px;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
ul {
    /* border: 1px solid red; */
    width: 70%;
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    list-style: none;
    color: #ffffff;
}
li {
    text-align: center;
}

#SecondcontainerContent {
    background-color: #A7C0D9;
    width: 85%;
    min-height: 30vh;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    color: #ffffff;
}
h2 {
    color: #313D5A;
    font-size: 2.5rem;
}
p {
    font-size: 1.5rem;
}
</style>