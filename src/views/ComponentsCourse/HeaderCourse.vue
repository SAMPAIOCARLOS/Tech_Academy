<script setup lang="ts">
import NavBar from '../../components/ComponentsHeader/NavBar.vue';

</script>

<template>
    <NavBar />

    <div id="containerHeaderCourse">
        <h1 id="titleHeaderCourse">Nossos Cursos</h1>
    </div>
</template>

<style scoped>
#containerHeaderCourse {
    width: 100vw;
    min-height: 30vh;
    background-color: #313D5A;
    padding-top: 12vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

#titleHeaderCourse {
    width: 85%;
    /* border: 1px solid red; */
    font-size: 2.8rem;
    color: #ffffff;
}

@media(max-height: 800px) {
    #containerHeaderCourse {
        padding-top: 6rem;
    }
}
</style>