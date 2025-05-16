<script setup lang="ts">

</script>

<template>
    <div id="containerCardsBlog">
        <section id="groupSectionCardsBlog">
            <div id="containerCardAlpha">
                <div id="box_imgCard">
                    <button>Educação</button>
                </div>

                <div id="container_textCard">
                    <h1>Os Principais Elementos da Gamificação e Como Aplicá-los no Ensino</h1>
                    <p>A gamificação na educação usa desafios, recompensas e storytelling para tornar o aprendizado mais
                        envolvente. Esses elementos aumentam o engajamento e incentivam a progressão dos alunos.</p>
                </div>
            </div>

            <div id="containerCardBeta">
                <div id="container_titleNews">
                    <h1>Notícias</h1>
                    <div id="line_titleNews"></div>
                </div>

                <div id="boxCardsnewsBeta">
                    <div class="cardsNews">
                        <div class="contaiiner_imgNewsBeta"></div>

                        <p class="descriptionCardsBeta">Últimas Tendências no Mercado de Tecnologia</p>
                    </div>

                    <div class="cardsNews" id="cardsNews2">
                        <div class="contaiiner_imgNewsBeta"></div>

                        <p class="descriptionCardsBeta">Cibersegurança: O Aumento de Ataques em 2025</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
#containerCardsBlog {
    /* border: 2px solid rgb(0, 60, 255); */
    width: 100%;
    min-height: 60vh;
    display: flex;
    justify-content: center;
    padding: 0 0 100px 0;
}

#groupSectionCardsBlog {
    width: 85%;
    /* border: 2px solid red; */
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
}

#containerCardAlpha {
    width: 40%;
    /* height: 50%; */
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    transform: translateY(-15%);
    border-radius: 20px;
}

#box_imgCard {
    width: 100%;
    height: 50%;
    min-height: 20rem;
    background-color: #313D5A;
    background: url("../../assets/images/imagens/imageNewsAlph.png") no-repeat center center;
    background-size: cover;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    
}

#box_imgCard > button {
    /* width: 17%; */
    background-color: #6699CC;
    color: #ffffff;
    font-size: 1.2rem;
    padding: 10px 30px;
    border-radius: 7px;
    border: none;
    font-weight: bold;
    transition: all 0.3s;
    cursor: pointer;
    margin: 1rem;
}

#container_textCard {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    padding: 3rem 0;
}
#container_textCard > h1 {
    color: #313D5A;
    font-size: 1.7rem;
    /* text-align: center; */
    padding: 0 2rem;
}
#container_textCard > p {
    color: #313D5A;
    font-size: 1.2rem;
    /* text-align: center; */
    padding: 0 2rem;
}

#containerCardBeta {
    width: 50%;
    /* background-color: aquamarine; */
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

#container_titleNews {
    width: 90%;
    /* border: 2px solid red; */
    color: #6699CC;
    display: flex;
    align-items: center;
    gap: 20px;
}
#container_titleNews > h1 {
    font-size: 2.5rem;
}
#line_titleNews {
    width: 80%;
    height: 5px;
    background-color: #6699CC;
}

#boxCardsnewsBeta {
    /* border: 2px solid red; */
    width: 90%;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
}
.cardsNews {
    width: 40%;
    min-width: 15rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    /* background-color: rgb(255, 255, 255); */
    border-radius: 10px;
    /* border: 4px solid rgb(25, 0, 255); */
}
.contaiiner_imgNewsBeta {
    width: 100%;
    min-width: 15rem;
    height: 13rem;
    background-color: #313D5A;
    background: url("../../assets/images/imagens/person-working-html-computer 1.png") no-repeat center center;
    background-size: cover;
    border-radius: 10px;
}

.descriptionCardsBeta {
    font-weight: bold;
    font-size: 1.3rem;
    text-align: center;
}

#cardsNews2 {
    transform: translateY(15%);
}

@media(max-width: 1350px) {
    #boxCardsnewsBeta {
        justify-content: center;
    }
    .cardsNews {
        width: 80%;
    }
}

@media(max-width: 1150px) {
    #containerCardAlpha {
        width: 80%;
    }
    #containerCardBeta {
        width: 100%;
    }
    #boxCardsnewsBeta {
        width: 100%;
        justify-content: space-between;
    }
    .cardsNews {
        width: 40%;
    }
    #cardsNews2 {
        transform: translateY(0);
    }
}

@media(max-width: 850px) {
    #containerCardAlpha {
        width: 100%;
        transform: translateY(0);
    }
}

@media(max-width: 650px) {
    .cardsNews {
        width: 90%;
    }
    #boxCardsnewsBeta {
        justify-content: center;
    }
}
</style>