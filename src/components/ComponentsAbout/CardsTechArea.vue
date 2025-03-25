<script setup lang="ts">
import { ref } from 'vue';
import { getImageUrl_icon } from '../../utils/imageHelper';
import type * as interfaces from '../../interfaces/interface'


const DataCardsTechArea = ref<interfaces.CardTechArea[]>([
    {
        id: 1,
        path_imageIcon: getImageUrl_icon("iconeCode.png"),
        title: "Programação",
        description: "Aprenda desenvolvimento web e mobile do zero ao avançado.",
    },
    {
        id: 2,
        path_imageIcon: getImageUrl_icon("iconeInvestimento.png"),
        title: "Ciência de Dados",
        description: "Domine análise de dados e machine learning com projetos práticos.",
    },
    {
        id: 3,
        path_imageIcon: getImageUrl_icon("iconeGame.png"),
        title: "Jogos",
        description: "Crie seus próprios jogos com Unity e Unreal Engine.",
    }
])
</script>

<template>
    <div id="containerCardsTechArea">
        <div class="CardsTechArea" v-for="card in DataCardsTechArea" :key="card.id">
            <div class="containerIcon">
                <img :src="card.path_imageIcon" :alt="card.title">
            </div>

            <h1 class="titleCard">{{ card.title }}</h1>

            <p class="description">{{ card.description }}</p>
        </div>
    </div>
</template>

<style scoped>
#containerCardsTechArea {
    width: 85%;
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    padding: 5rem 0rem;
}

.CardsTechArea {
    width: 30%;
    background-color: #ffffff;
    border: 1px solid #00000094;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    gap: 2rem;
    padding: 3rem;
    transition: all 0.3s;
    cursor: pointer;
}
.CardsTechArea:hover {
    transform: scale(1.05);
}

.titleCard {
    color: #313D5A;
    font-size: 2.7rem;
}

.description {
    color: #0000008f;
    text-align: center;
    font-size: 1.5rem;
}
</style>