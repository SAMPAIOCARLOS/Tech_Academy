<script setup lang="ts">
import { defineProps, watch } from 'vue';
import { getImageUrl_image } from '../../utils/imageHelper';
import * as interfaces from '../../interfaces/interface'
// import { GetDataCardsCourses } from '../../Services/requests';
import { useRouter } from 'vue-router'

import PageNoCourse from './PageNoCourse.vue'

const props = defineProps({
    DataCreateCourse: {
        type: Array as () => interfaces.Course[],
        required: true
    }
})

const router = useRouter()

function RouterDedicated(item: any): void {
    router.push({
        path: "/DedicatedCourse",
        query: {
            id: item.id,
            title: item.title,
            description: item.description,
            image: item.pathImageCourse,
            time: item.timeCourse
        }
    });
}


watch(() => props.DataCreateCourse, (newVal) => {
    console.log("DataCreateCourse atualizado:", newVal);
}, { immediate: true, deep: true });

let isEmpty = true;

if(props.DataCreateCourse.length === 0) {
    if (isEmpty) isEmpty = false;
}


// function isAuthenticated(): boolean {
//     return !!localStorage.getItem("token");
// }


</script>

<template>



    <!-- Se houver dados, mostra os cards -->
    <div v-if="props.DataCreateCourse.length > 0" class="cardsContainer">
        <div v-for="item in props.DataCreateCourse" :key="item.id" class="cardCourse">
            <div class="containerTime">
                <p class="button_time">{{ item.timeCourse }}</p>
            </div>
            <div class="containerimgCourse">
                <img :src="getImageUrl_image(item.pathImageCourse)" alt="" />
            </div>

            <h1 class="titleCard">{{ item.title }}</h1>
            <p class="descriptionCard">{{ item.description }}</p>

            <button class="buttonLearnMore" @click="RouterDedicated(item)">
                Saiba mais
            </button>
        </div>
    </div>

    <!-- Se não houver dados, mostra a mensagem -->
    <PageNoCourse v-else />


</template>


<style scoped>

.cardCourse {
    /* border: 2px solid red; */
    width: 30%;
    min-height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    padding: 20px 0;
    background-color: #ffffff;
    border-radius: 10px;
    transition: all 0.3s;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.178);
}

.cardCourse:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.308);
    scale: 1.03;
}
.containerTime {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    /* border: 1px solid red; */
}
.button_time {
    background-color: #f58308ab;
    padding: 5px 10px;
    color: #ffffff;
    border-radius: 5px;
    margin: 0px 10px;
    /* transform: translateX(100%); */
}
.containerimgCourse {
    /* border: 2px solid red; */
    width: 50%;
    /* height: 20vh; */
    min-height: 13rem;
    transform: translateY(-25%);

}
.containerimgCourse > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.titleCard {
    font-size: 2.3rem;
    text-align: center;
    transform: translateY(-100%);
}

.descriptionCard {
    width: 80%;
    font-size: 1.3rem;
    text-align: center;
    transform: translateY(-80%);
}
.buttonLearnMore {
    background-color: #F58208;
    color: #ffffff;
    font-size: 1.3rem;
    padding: 10px 30px;
    border-radius: 15px;
    border: none;
    /* font-weight: bold; */
    transition: all 0.3s;
    cursor: pointer;
    transform: translateY(-70%);
}

.cardsContainer {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    padding: 30px 20px;
    
}

@media(max-width: 1400px) {
    .cardCourse {
        width: 45%;
    }
}

@media(max-width: 950px) {
    .cardCourse {
        width: 80%;
    }
}
@media(max-width: 550px) {
    .cardCourse {
        width: 100%;
    }
}
</style> 