<script setup lang="ts">
import NavBar from '../../components/ComponentsHeader/NavBar.vue';
import BlogCards from './BlogCards.vue';

import TheFooter from '../../components/ComponentsMain/TheFooter.vue';
</script>

<template>

    <NavBar />

    <div id="containerBlog">
        <div id="containerHeaderBlog">

            <div id="containerInfor_headerBlog">
                <button id="buttonNews">Noticias</button>

                <h1 id="titleHeaderBlog">
                    10 alternativas ao ChatGPT: <br>
                    conheça IAs com diferentes soluções
                </h1>

                <button id="buttonLearnMore">Saiba Mais</button>

            </div>
        </div>

        <BlogCards />

    </div>

    <TheFooter />
</template>

<style scoped>
#containerBlog {
    width: 100%;
    min-height: 100vh;
    /* border: 2px solid red; */
    padding-top: 12vh;
    display: flex;
    flex-direction: column;
    background-color: #f3f3f3;
}

#containerHeaderBlog {
    width: 100%;
    min-height: 88vh;
    /* background-color: #313D5A; */
    background: url("../../assets/images/imagens/BackgrondHeaderBlog.png") no-repeat center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}

#containerInfor_headerBlog {
    width: 60%;
    /* border: 3px solid blue; */
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

#buttonNews {
    width: 14rem;
    background-color: #6699CC;
    color: #ffffff;
    font-size: 1.5rem;
    padding: 10px 30px;
    border-radius: 7px;
    border: none;
    font-weight: bold;
    transition: all 0.3s;
    cursor: pointer;
    
}
#buttonNews:hover {
    scale: 1.06;
}

#titleHeaderBlog {
    font-size: 3.5rem;
    color: #ffffff;
}

#buttonLearnMore {
    width: 14rem;
    background-color: #F57E00;
    color: #ffffff;
    font-size: 1.5rem;
    padding: 10px 30px;
    border-radius: 7px;
    font-weight: bold;
    border: none;
    transition: all 0.3s;
    cursor: pointer;
}
#buttonLearnMore:hover {
    scale: 1.06;
}


@media(max-height: 800px) {
    #containerBlog {
        padding-top: 6rem;
    }
}

@media(max-width: 1255px) {
    #containerInfor_headerBlog {
        width: 90%;
    }
    #titleHeaderBlog {
        font-size: 3rem;
    }
}

@media(max-width: 850px) {
    #titleHeaderBlog {
        font-size: 2.5rem;
    }

    #containerHeaderBlog {
        min-height: 60vh;
    }
}
</style>