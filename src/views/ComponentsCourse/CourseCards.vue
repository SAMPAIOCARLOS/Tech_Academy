<script setup lang="ts">
import { ref, defineProps, onMounted } from 'vue';
import { getImageUrl_image } from '../../utils/imageHelper';
import * as interfaces from '../../interfaces/interface'
// import { GetDataCardsCourses } from '../../Services/requests';
import { useRouter } from 'vue-router'



const props = defineProps({
    DataCreateCourse: {
        type: Array as () => interfaces.CardCourse[],
        required: true
    }
})

const router = useRouter()

function RouterDedicated(item: any): void {
    router.push({
        path: "/DedicatedCourse",
        query: {
            id: item.id_data,
            title: item.titleCourse,
            description: item.descriptionCourse,
            image: item.path_imgCourse,
            time: item.timeCourse,
            textButton: item.textButton
        }
    });
}

const showCursos = ref(true);

onMounted(():void => {
    const token = localStorage.getItem('token')

    if (!token) {
        showCursos.value = false;
    }
})
</script>

<template>
    <div class="container_category_course" v-for="card in props.DataCreateCourse" :key="card.id" v-if="showCursos">
        <h1 class="title_category">{{ card.category }}</h1>

        <div class="container_cards_course">

            <div class="CardsCourse" v-for="item in card.DataCards" :key="item.id_data">
                <div class="BoxTime_course">
                    <p>{{ item.timeCourse }}</p>
                </div>
                <div class="containerImgCourse">
                    <img :src="getImageUrl_image(item.path_imgCourse)" :alt="item.titleCourse">
                </div>
                <h1 class="title_course">{{ item.titleCourse }}</h1>
                <p class="description_course">{{ item.descriptionCourse }}</p>

                <button class="button_course" @click="RouterDedicated(item)">{{ item.textButton }}</button>

            </div>
        </div>

    </div>
    
</template>

<style scoped>
.container_category_course {
    width: 100%;
    /* border: 5px solid red; */
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.title_category {
    padding: 10px 0 30px 30px;
}

.container_cards_course {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    border: 2px solid rgb(72, 255, 0);
    flex-wrap: wrap;
}

.CardsCourse {
    width: 30%;
    height: 60vh;
    border: 1px solid rgba(94, 94, 94, 0.541);
    border-top-right-radius: 7px;
    border-bottom-left-radius: 7px;
    background-color: #ffffff;
    color: #313D5A;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 1.5rem 0;
    /* gap: 2rem; */
}

.BoxTime_course {
    width: 90%;
    display: flex;
    justify-content: flex-end;
    /* border: 1px solid red; */
}
.BoxTime_course > p {
    background-color: #F9AF61;
    padding: 10px 15px;
    border-radius: 5px;
    color: #ffffff;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    z-index: 100;
    
}
.BoxTime_course>p:hover {
    background-color: #F57E00;
}
.containerImgCourse {
    width: 100%;
    transform: translateY(-30px);
    /* border: 1px solid red; */
    text-align: center;
}

.title_course {
    font-size: 2.5rem;
}

.description_course {
    width: 80%;
    text-align: center;
    font-size: 1.3rem;
    /* padding-top: 2rem; */
    padding: 1.5rem 0;
}

.button_course {
    width: 40%;
    padding: 10px;
    border: none;
    border-radius: 13px;
    color: #ffffff;
    font-size: 1.2rem;
    background-color: #F57E00;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}
.button_course:hover {
    scale: 1.1;
}

@media(max-width: 1600px) {
    .CardsCourse {
        width: 30%;
    }
}

@media(max-width: 1400px) {
    .CardsCourse {
        width: 40%;
    }
}

@media(max-width: 1150px) {
    .CardsCourse {
        width: 45%;
    }
}

@media(max-width: 1000px) {
    .container_cards_course {
        justify-content: center;
    }
    .CardsCourse {
        width: 60%;
    }
}

@media(max-width: 750px) {
    .CardsCourse {
        width: 70%;
    }
}
@media(max-width: 550px) {
    .CardsCourse {
        width: 90%;
    }
}
@media(max-width: 450px) {
    .CardsCourse {
        width: 100%;
    }
}
</style>