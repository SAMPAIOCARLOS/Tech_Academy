<script setup lang="ts">
import NavBar from '../../components/ComponentsHeader/NavBar.vue';
import CardAbout from './CardAbout.vue';
import TheFooter from '../../components/ComponentsMain/TheFooter.vue';
</script>

<template>
    <NavBar />

    <div id="haeaderAbout">
        <h1 id="titleAbout">Sobre Nós</h1>

        <p id="descriptionHeaderAbout">A <span style="color: #F57E00;">Tech Academy</span> é uma instituição dedicada a
            formar a próxima geração de
            profissionais de tecnologia. Nossa
            missão é oferecer cursos práticos e acessíveis, capacitando estudantes e profissionais a dominarem as
            tecnologias mais inovadoras do mercado.
        </p>
    </div>

    <div id="containerMainAbout">
        <CardAbout />
    </div>

    <TheFooter />

</template>

<style scoped>
#haeaderAbout {
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

#titleAbout {
    font-size: 3rem;
}

#descriptionHeaderAbout {
    font-size: 2rem;
    width: 50%;
    text-align: center;
}

#containerMainAbout {
    width: 100%;
    /* border: 3px solid red; */
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    padding: 3rem 0;
}
</style>