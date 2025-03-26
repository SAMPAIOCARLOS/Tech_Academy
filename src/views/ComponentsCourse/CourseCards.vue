<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getImageUrl_image } from '../../utils/imageHelper';
import * as interfaces from '../../interfaces/interface'
import { GetDataCardsCourses } from '../../Services/requests';


const DataCreateCourse = ref<interfaces.CardCourse[]>([]);

onMounted((): void => {
    recoverDataCourse();
})

async function recoverDataCourse(): Promise<void> {
    const endpoint = "src/data/dataCardsCourse.json";
    const sucess = await GetDataCardsCourses(endpoint);

    DataCreateCourse.value = sucess;
}


</script>

<template>
    <div class="BoxCardsCourse" v-for="card in DataCreateCourse" :key="card.id">
        <h1>{{ card.category }}</h1>

        <div class="CardsCourse" v-for="item in card.DataCards" :key="item.id_data">
            <img :src="getImageUrl_image(item.path_imgCourse)" :alt="item.titleCourse">

            <h4>{{ item.titleCourse }}</h4>
        </div>

    </div>
</template>

<style scoped>
.BoxCardsCourse {
    width: 30%;
    border: 2px solid red;
}

.CardsCourse {
    border: 2px solid blue;
}
</style>