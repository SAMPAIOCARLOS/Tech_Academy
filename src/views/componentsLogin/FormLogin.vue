<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
function RouterHome(path_router: string): void {
    router.push(path_router)

}
</script>

<template>
    <form @submit="event => event.preventDefault()">
        <h1 id="titleForm">Login</h1>

        <aside class="asideForm">
            <div class="coverInput">
                <div id="containerIcon_input">
                    <img src="../../assets/images/icones/icone_user.png" alt="">
                </div>
                <input type="text" id="inputEmail" placeholder="Email*">
            </div>
            <div class="containerCaseError">
                <img src="../../assets/images/icones/icone_alert.png" alt="">
                <p>Deu merda ai mn qual foi</p>
            </div>
        </aside>

        <aside class="asideForm">
            <div class="coverInput">
                <div id="containerIcon_input">
                    <img src="../../assets/images/icones/icone_user.png" alt="">
                </div>
                <input type="text" id="inputEmail" placeholder="Senha*">
            </div>
            <div class="containerCaseError">
                <img src="../../assets/images/icones/icone_alert.png" alt="">
                <p>Deu merda ai mn qual foi</p>
            </div>
        </aside>

        <div id="containerOption_rememberMe">
            <input type="checkbox">
            <p>Lembrar-me</p>
        </div>

        <button id="buttonLogin" @click="RouterHome('/StudentPortal')">Entrar</button>

        <div id="containerForgotPassword">
            <p @click="RouterHome('/register')">Cadastre-se</p>
            <div id="lineEnd"></div>
            <p href="">Esqueci minha senha</p>
        </div>
        
    </form>
</template>

<style scoped>
form {
    background-color: #ffffff;
    width: 30%;
    height: 55vh;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}
#titleForm {
    text-align: center;
    padding: 20px;
}
.asideForm {
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.coverInput {
    width: 100%;
    height: 4rem;
    background-color: #A7C0D9;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
}

#containerIcon_input {
    width: 18%;
    min-width: 5rem;
    height: 100%;
    /* border: 2px solid red; */
    background-color: #F57E00;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}
#inputEmail {
    width: 80%;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1.7rem;
    color: #ffffff;
}

.containerCaseError {
    display: none;
    align-items: center;
    gap: 5px;
    color: rgb(255, 32, 32);
    font-weight: bold;
}

#containerOption_rememberMe {
    width: 80%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    color: #000000b4;
}

#buttonLogin {
    background-color: #F57E00;
    width: 80%;
    padding: 13px;
    border-radius: 10px;
    border: none;
    outline: none;
    color: #ffffff;
    font-weight: bold;
    font-size: 1.4vw;
    cursor: pointer;
    transition: all 0.3s;
}

#containerForgotPassword {
    width: 80%;
    display: flex;
    gap: 5px;
    
}
#containerForgotPassword > p {
    text-decoration: none;
    color: #0074F8;
    cursor: pointer;
}
#containerForgotPassword>p:hover {
    text-decoration: underline;
}
#lineEnd {
    width: 2px;
    height: 100%;
    background-color: #0074F8;
}
</style>