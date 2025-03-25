<script setup lang="ts">
import CardsTechArea from './CardsTechArea.vue';
import Comments from './Comments.vue';

</script>

<template>
    <div id="containerAboutHome">
        <CardsTechArea />

        <Comments />
    </div>
</template>

<style scoped>
#containerAboutHome {
    width: 100vw;
    min-height: 40vh;
    /* border: 2px solid blue; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    /* justify-content: center; */
}
</style>