<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { getImageUrl_image } from '../../utils/imageHelper';
import Modal from '../../layout/Modal.vue';
import ModalError from '../../layout/ModalError.vue';

const props = defineProps({
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageCourse: { type: String, required: true }
})

const showModal = ref(false);
const showModalError = ref(false);
async function adiquirirCurso(): Promise<any> {
    try {
        const res = await fetch(`http://localhost:8080/user/${localStorage.getItem('id_user')}/acquire-course/${props.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        })
        if (!res.ok) throw new Error(res.statusText);

        const data = await res.text();
        return data;
        // showModal.value = true;
        // return data;
    } catch (error) {
        console.error('Erro ao adquirir curso:', error);
        showModalError.value = true;

    }
}


async function resultCompra(): Promise<void> {

    if (localStorage.getItem('id_user') === null) {
        window.location.href = '/login';
        return;
    }
    const result = await adiquirirCurso();

    if(result) {
        showModal.value = true;
        showModalError.value = false;

    }
}

const closeModal = (): void => {
    showModal.value = false;
    showModalError.value = false;

    window.location.reload();
}

</script>

<template>

    <Modal v-if="showModal" :titleCard="'Curso comprado com sucesso'" @closeModal="closeModal" />
    <ModalError v-if="showModalError" :titleCard="'Erro ao comprar curso'" @closeModal="closeModal" />
    <div id="containerHeader_course">
        <div id="containerHeader_course_content">
            <div id="containerInformationCourse">
                <button class="buttonPageCourse buttonPageCourse_one">Curso Online</button>
                <h1 class="titlePageCourse">{{ props.title }}</h1>
                <p class="descriptionPageCourse">{{ props.description }}</p>

                <button class="buttonPageCourse">R$ 59,90 </button>
            </div>

            <div id="containerCardsImageCard">
                <div id="containerCardImage">
                    <img :src="getImageUrl_image(props.imageCourse)" alt="">
                </div>

                <div id="optionsCard">
                    <button id="button_buy" @click="resultCompra">Comprar</button>
                </div>
            </div>
        </div>
    </div>


</template>

<style scoped>
#containerHeader_course {
    width: 100%;
    min-height: 65vh;
    background-color: #313D5A;
    padding: 10rem 0 5rem 0;
    display: flex;
    justify-content: center;
    color: #ffffff;
}
#containerHeader_course_content {
    width: 85%;
    display: flex;
    justify-content: space-between;
    gap: 3rem;
}
#containerInformationCourse {
    /* border: 2px solid red; */
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 3rem 0;
    gap: 3rem;
}

.buttonPageCourse {
    background-color: #F57E00;
    width: 30%;
    padding: 10px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    color: #ffffff;
    font-size: 1.3rem;
    font-weight: bold;
    transition: all 0.3s;
}
.buttonPageCourse:hover {
    scale: 1.06;
}
.buttonPageCourse_one {
    background-color: #A7C0D9;
}

.titlePageCourse {
    font-size: 4rem;
}
.descriptionPageCourse {
    font-size: 2rem;
}

#containerCardsImageCard {
    /* border: 3px solid blue; */
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    background-color: #ffffff;
}

#containerCardImage {
    width: 95%;
    height: 75%;
    background-color: #ffffff;
    margin: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
#containerCardImage > img {
    width: 70%;
    height: 70%;
    object-fit: cover;
}
#optionsCard {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 20px;
}

#button_buy {
    width: 100%;
    padding: 10px;
    border-radius: 7px;
    border: none;
    background-color: #F57E00;
    color: #ffffff;
    font-size: 1.5rem;
    cursor: pointer;
}

@media(max-width: 1450px) {
    #containerInformationCourse {
        width: 60%;
    }
}
@media(max-width: 1200px) {
    #containerInformationCourse {
        width: 70%;
    }
    .titlePageCourse {
        font-size: 2.5rem;
    }

    .descriptionPageCourse {
        font-size: 1.5rem;
    }
}
@media(max-width: 1000px) {
    #containerHeader_course_content {
        flex-wrap: wrap;
    }
    #containerInformationCourse {
        width: 100%;
        height: 45%;
        gap: 2rem;
    }
    #containerCardsImageCard {
        width: 70%;
    }
    #containerHeader_course_content {
        justify-content: center;

    }
}

@media(max-width: 650px) {
    #containerCardsImageCard {
        width: 100%;
    }
    .buttonPageCourse {
        width: 50%;
    }
}
</style>