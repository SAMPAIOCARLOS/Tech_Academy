<script setup lang="ts">
import CourseCards from './CourseCards.vue';

</script>

<template>
    <div id="ContainerCourse">
        <div id="containerFilterCards">
            <select name="SelectFilter" id="SelectFilter">
                <option selected disabled>Todos</option>
                <option value="Programacao_web">Programação web</option>
                <option value="Ciencia_de_Dados">Ciência de Dados</option>
                <option value="Desenvolvimento_de_Jogos">Desenvolvimento de Jogos</option>
            </select>
        </div>

        <div id="containerCards">
            <CourseCards />
        </div>
    </div>
</template>

<style scoped>
#ContainerCourse {
    border: 2px solid blue;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    gap: 3rem;
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
    border: 1px solid rgba(0, 0, 0, 0.459);
    border-radius: 5px;
    font-size: 1.5rem;
    color: rgba(0, 0, 0, 0.459);
}

#containerCards {
    width: 85%;
    min-height: 50vh;
    border: 2px solid green;
    display: flex;
    justify-content: space-between;
    gap: 3rem;
    flex-wrap: wrap;
}
</style>