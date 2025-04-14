<script setup lang="ts">
import { getImageUrl_icon } from '../../../utils/imageHelper';

import FormUserData from './FormUserData.vue';
</script>

<template>
    <div id="containerUserData">
        <div id="titleUserData">
            <div id="containerIcon">
                <img :src="getImageUrl_icon('icon_user.png')" alt="">
            </div>
            <h1>DADOS GERAIS</h1>
        </div>

        <FormUserData />


    </div>
</template>


<style scoped>
#containerUserData {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

}

#titleUserData {
    width: 100%;
    /* border: 2px solid rgb(0, 0, 0); */
    padding: 4rem 0;
    font-size: 1.7rem;
    color: #000000c4;
    display: flex;
    /* gap: 0.5rem; */
    align-items: center;
}

#containerIcon {
    width: 100px;
    height: 100px;
    transform: translateY(10px);
}
#containerIcon > img {
    width: 80%;
    height: 80%;
    object-fit: contain;
}
</style>