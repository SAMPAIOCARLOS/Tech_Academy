<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TableCourse from './TableCourse.vue';

interface Course {
    id: number;
    title: string;
    description: string;
    timeCourse: string;
    category: string;
    pathImageCourse: string;
    progress: string;
}

const allUserCourses = ref<Course[]>([]);
const DataValueCourse = ref<Course[]>([]);

async function getDataCourseUser(endpoint: string): Promise<Course[]> {
    try {
        const res = await fetch(endpoint, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        if (!res.ok) throw new Error(res.statusText);

        const data: Course[] = await res.json();
        return data;

    } catch (error) {
        console.log("Erro ao tentar acessar cursos do usuário:", error);
        return [];
    }
}

onMounted(async (): Promise<void> => {
    const id_user = localStorage.getItem('id_user');
    const endpoint = `http://localhost:8080/user/${id_user}/courses`;

    const resultCourseUser = await getDataCourseUser(endpoint);
    if (resultCourseUser.length > 0) {
        allUserCourses.value = resultCourseUser;
        DataValueCourse.value = resultCourseUser;
    }
});

function handleFilterChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;

    if (selectedValue === 'Todos') {
        DataValueCourse.value = allUserCourses.value;
    } else {
        DataValueCourse.value = allUserCourses.value.filter(course => course.description === selectedValue);
    }
}
</script>

<template>
    <div id="containerCourse">
        <div id="titleCourse">
            <h1>Meus Cursos</h1>
        </div>

        <div id="containerSelectCourse">
            <select name="SelectFilter" id="SelectFilter" @change="handleFilterChange">
                <option selected disabled>Selecione uma categoria</option>
                <option value="Todos">Todos</option>
                <option value="Programação Web">Programação web</option>
                <option value="Ciência de Dados">Ciência de Dados</option>
                <option value="Desenvolvimento de Jogos">Desenvolvimento de Jogos</option>
            </select>
        </div>

        <TableCourse :DataCreateCourse="DataValueCourse" />
    </div>
</template>



<style scoped>
#containerCourse {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

}

#titleCourse {
    width: 100%;
    /* border: 2px solid rgb(0, 0, 0); */
    padding: 4rem 0;
    font-size: 2rem;
    color: #000000c4;
}

#containerSelectCourse {
    /* border: 2px solid red; */
    width: 100%;
}

#SelectFilter {
    width: 25%;
    padding: 10px;
    border-radius: 5px;
    color: #000000a1;
    font-size: 1.5rem;
    outline: none;
    border: 2px solid #0000001f;
    transition: all 0.3s;
}
#SelectFilter:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.123);
}
</style>