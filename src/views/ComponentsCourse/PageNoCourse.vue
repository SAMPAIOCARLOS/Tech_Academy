<script setup lang="ts">

</script>

<template>
    <div id="pageNoCourse">
        <div id="containerText">
            <h1 id="textNoCourse">Não foi possível carregar os cursos no momento. Pode estar ocorrendo um problema no servidor. Por favor,
                tente novamente mais tarde.</h1>
        </div>

        <div id="containerImage"></div>
    </div>
</template>

<style scoped>

#pageNoCourse {
    /* border: 2px solid red; */
    width: 100%;
    min-height: 50vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

#containerText {
    /* border: 2px solid blue; */
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#textNoCourse {
    font-size: 3rem;
    color: #313D5A;
    text-align: center;
}
#containerImage {
    /* border: 2px solid green; */
    width: 40%;
    height: 100%;
    background: url('../../assets/images/imagens/image_404.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

@media(max-width: 1250px) {
    #textNoCourse {
        font-size: 2rem;
    }
}

@media(max-width: 900px) {
    #pageNoCourse {
        justify-content: center;
    }
    #containerText {
        width: 70%;
        height: 50%;
    }
    #containerImage {
        width: 70%;
        height: 50%;
    }
    #textNoCourse {
        font-size: 1.5rem;
        width: 100%;
    }
}

</style>