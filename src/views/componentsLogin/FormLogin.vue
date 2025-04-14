<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { LoginUser } from '../../Services/requests';
import Modal from '../../layout/Modal.vue';
import ModalError from '../../layout/ModalError.vue';

const router = useRouter()
function RouterHome(path_router: string): void {
    router.push(path_router)
}


const UserDataLogin = ref({
    email: '',
    password: ''
})

const showModal = ref(false);
const showModalError = ref(false);
async function formLogin(event: Event): Promise<void> {
    event.preventDefault()
    const endpoint = "http://localhost:8080/auth"
    

    const result_loginUser = await LoginUser(endpoint, UserDataLogin.value);
    if(result_loginUser) {
        console.log("User logado com sucesso: ", result_loginUser);
        saveDataUser(result_loginUser);
        showModal.value = true;
        showModalError.value = false;
    } else {
        showModal.value = false;
        showModalError.value = true;
    }
}


const closeModal = (): void => {
    showModal.value = false;
    showModalError.value = false;

    UserDataLogin.value.email = '';
    UserDataLogin.value.password = '';

    Router('/StudentPortal')


}
const saveDataUser = (data: any): void => {
    const token = data.token;
    localStorage.setItem('token', token);
    console.log("token: ", token);   
}

const Router = (path_router: string): void => {
    router.push(path_router)

}


</script>

<template>

    <Modal v-if="showModal" :titleCard="'Usuário logado com sucesso'" @closeModal="closeModal" />
    <ModalError v-if="showModalError" :titleCard="'Usuário ou senha incorretos'" @closeModal="closeModal" />


    <form @submit="formLogin">
        <h1 id="titleForm">Login</h1>

        <aside class="asideForm">
            <div class="coverInput">
                <div class="containerIcon_input">
                    <img src="../../assets/images/icones/icone_user.png" alt="">
                </div>
                <input type="email" class="inputs" placeholder="Email*" v-model="UserDataLogin.email" required>
            </div>
            <div class="containerCaseError">
                <img src="../../assets/images/icones/icone_alert.png" alt="">
                <p>Deu merda ai mn qual foi</p>
            </div>
        </aside>

        <aside class="asideForm">
            <div class="coverInput">
                <div class="containerIcon_input">
                    <img src="../../assets/images/icones/icone_user.png" alt="">
                </div>
                <input type="password" class="inputs" placeholder="Senha*" v-model="UserDataLogin.password" required>
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

        <button id="buttonLogin">Entrar</button>

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
    min-height: 55vh;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-bottom: 20px;
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
    justify-content: flex-start;
    gap: 10px;
    padding-right: 10px;
}

.containerIcon_input {
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
.inputs {
    width: 80%;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1.7rem;
    color: #ffffff;
}

.inputNull {
    border: 3px solid rgb(255, 32, 32);
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
    font-size: 1.4rem;
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

@media(max-width: 1250px) {
    form {
        width: 50%;
    }
}
@media(max-width: 750px) {
    form {
        width: 70%;
    }
}
@media(max-width: 500px) {
    form {
        width: 90%;
    }
}
</style>