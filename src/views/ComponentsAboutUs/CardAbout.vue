<script setup lang="ts">

</script>

<template>
    <section class="cardInformation">
        <aside id="first_containerTextContent_cardInformation">
            <h1>Nossa História</h1>
            <p>Desde a fundação, nossa missão é transformar o ensino da tecnologia. Durante a pandemia, adaptamos nossos
                cursos para um ambiente digital, investindo em plataformas modernas e inovação contínua.</p>
        </aside>
        <aside id="first_containerImage_cardInformation">
            <img src="../../assets/images/imagens/image_aboutone.png" alt="">
        </aside>
    </section>

    <section class="cardInformation cardInformationTwo" style="background-color: #A7C0D9;">
        <aside id="second_containerImage_cardInformation">
            <img src="../../assets/images/imagens/image_abouttwo.png" alt="">
        </aside>

        <aside id="second_containerTextContent_cardInformation">
            <h1>Nossa Missão</h1>
            <p>Nós focamos na democratização do conhecimento, em tecnologia, capacitando profissionais com cursos de
                alta qualidade e alinhados às necessidas do mercado. </p>
        </aside>
    </section>

    <section class="cardInformation cardInformation_footer" style="background-color: transparent;">
        <p id="textContent_footerAbout">Venha fazer parte da <span style="color: #F57E00;">Tech Academy</span>
            Junte-se a nós e transforme sua carreira com a melhor formação em tecnologia.</p>
    </section>
</template>

<style scoped>
.cardInformation {
    width: 85%;
    background-color: #F9AF61;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 2rem;
    border-radius: 15px;
    color: #ffffff;
    flex-wrap: wrap;
}

.cardInformationTwo {
    flex-wrap: wrap-reverse;
}

#first_containerTextContent_cardInformation {
    width: 60%;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
#first_containerTextContent_cardInformation > h1 {
    font-size: 2.3rem;
    padding-left: 2.5rem;
}
#first_containerTextContent_cardInformation > p {
    font-size: 1.8rem;
}
#first_containerImage_cardInformation {
    width: 30%;
}

#first_containerImage_cardInformation > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
#second_cardInformation {
    width: 85%;
    background-color: #A7C0D9;
}

#second_containerImage_cardInformation {
    width: 30%;
}

#second_containerImage_cardInformation> img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}




#second_containerTextContent_cardInformation {
    width: 60%;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

#second_containerTextContent_cardInformation>h1 {
    font-size: 2.3rem;
    text-align: end;
    padding-right: 6rem;
    color: #313D5A;
}

#second_containerTextContent_cardInformation>p {
    font-size: 1.8rem;
    color: #313D5A;
}
.cardInformation_footer {
    display: flex;
    justify-content: center;
}
#textContent_footerAbout {
    width: 70%;
    /* border: 2px solid red; */
    color: #000000;
    text-align: center;
    font-size: 2rem;
}

@media(max-width: 1000px) {
    .cardInformation {
        gap: 3rem;
        justify-content: center;
    }
    #first_containerTextContent_cardInformation {
        width: 100%;
        align-items: center;
    }
    #first_containerTextContent_cardInformation > p {
        text-align: center;
    }
    #first_containerImage_cardInformation {
        width: 80%;
    }


    #second_containerTextContent_cardInformation {
        width: 100%;
        align-items: center;
    }
    #second_containerTextContent_cardInformation > p {
        text-align: center;
    }

    #second_containerImage_cardInformation {
        width: 80%;
    }
    #textContent_footerAbout {
        width: 100%;
        font-size: 1.3rem;
    }
}

@media(max-width: 600px) {
    #first_containerImage_cardInformation {
        width: 100%;
    }
    #first_containerTextContent_cardInformation > p {
        font-size: 1.3rem;
    }
    #second_containerImage_cardInformation {
        width: 100%;
    }
    #second_containerTextContent_cardInformation>p {
        font-size: 1.3rem;
    }
    
}

@media(max-width: 500px) {
    #first_containerTextContent_cardInformation> h1 {
        font-size: 1.6rem;
        text-align: center;
    }
    #second_containerTextContent_cardInformation > h1 {
        font-size: 1.6rem;
        text-align: center;
    }
}
</style>