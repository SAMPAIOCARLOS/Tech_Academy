<script setup lang="ts">

</script>

<template>
    <div id="containerComments">
        <div id="contentComments">
            <h1 id="titleComments">O que nossos alunos dizem</h1>

            <div id="containerListComments">
                <aside class="Boxcomments">
                    <p class="comments">
                        "Os cursos da Tech Academy transformaram minha carreira! O aprendizado é prático e direto ao
                        ponto."
                    </p>

                    <p class="Author"> -João Marques</p>
                </aside>
                <aside class="Boxcomments">
                    <p class="comments">
                        "Graças à Tech Academy, consegui meu primeiro emprego na área de tecnologia. Recomendo muito!"
                    </p>

                    <p class="Author"> - Ana Pereira</p>
                </aside>
            </div>
        </div>
    </div>
</template>

<style scoped>
#containerComments {
    width: 100%;
    /* border: 5px solid green; */
    display: flex;
    justify-content: center;
    padding-bottom: 4rem;
}
#contentComments {
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6rem;
}
#titleComments {
    color: #000000;
    font-size: 3rem;
    text-align: center;
}

#containerListComments {
    width: 100%;
    /* border: 2px solid #000; */
    display: flex;
    justify-content: space-around;
    gap: 3rem;
    flex-wrap: wrap;
}

.Boxcomments {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.comments {
    color: #313D5A;
    text-align: center;
    font-size: 1.4rem;
}
.Author {
    color: #6699CC;
    text-align: center;
    font-weight: bold;
}

@media(max-width: 750px) {
    #titleComments {
        font-size: 2rem;
    }
    .Boxcomments {
        width: 100%;
    }
}
</style>