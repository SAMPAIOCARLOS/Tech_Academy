<script setup lang="ts">
import { ref, onMounted } from 'vue';
import CourseCards from './CourseCards.vue';
import { GetDataCursos } from '../../Services/requests';
import * as interfaces from '../../interfaces/interface';


const allCourses = ref<interfaces.Course[]>([]);
const DataCreateCourse = ref<interfaces.Course[]>([]);



async function recoverDataCourse(): Promise<void> {
    const endpoint = "http://localhost:8080/courses/all";
    const cursos: interfaces.Course[] = await GetDataCursos(endpoint);

    if (cursos.length > 0) {
        allCourses.value = cursos;
        DataCreateCourse.value = cursos;
    }
}

function handleFilterChange(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;

    if (selectedValue === "Todos") {
        DataCreateCourse.value = allCourses.value;
    } else {
        DataCreateCourse.value = allCourses.value.filter(course => course.category === selectedValue);
    }
}

onMounted(async () => {
    await recoverDataCourse();
});
</script>


<template>
    <div id="ContainerCourse">
        <div id="containerFilterCards">
            <select name="SelectFilter" id="SelectFilter" @change="handleFilterChange">
                <option selected disabled>Selecione uma categoria</option>
                <option value="Todos">Todos</option>
                <option value="Programação Web">Programação web</option>
                <option value="Ciência de Dados">Ciência de Dados</option>
                <option value="Desenvolvimento de Jogos">Desenvolvimento de Jogos</option>
            </select>
        </div>

        <div id="containerCards">
            <CourseCards :DataCreateCourse="DataCreateCourse" />
        </div>
    </div>
</template>

<style scoped>
#ContainerCourse {
    /* border: 2px solid blue; */
    width: 100vw;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    gap: 3rem;
    background-color: #F3F4F6;
}

#containerFilterCards {
    width: 85%;
    height: 8rem;
    /* border: 2px solid red; */
    display: flex;
    align-items: center;
}

#SelectFilter {
    padding: 10px;
    /* border: 1px solid rgba(0, 0, 0, 0.459); */
    border-radius: 5px;
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.459);
}

#containerCards {
    width: 85%;
    min-height: 50vh;
    /* border: 2px solid green; */
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    flex-wrap: wrap;
    padding-bottom: 7rem;
}

@media(max-width: 950px) {
    #containerCards {
        /* border: 1px solid red; */
        justify-content: center;
    }
}
</style>