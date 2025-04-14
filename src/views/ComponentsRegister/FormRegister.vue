<script setup lang="ts">
import { ref } from 'vue';

import Modal from '../../layout/Modal.vue';

const UserDataFull = ref({
    name: '',
    email: '',
    confirmEmail: '',
    birth: '',
    password: '',
    confirmPassword: ''
});


const UserData = ref({
    name: UserDataFull.value.name,
    email: UserDataFull.value.email,
    birth: UserDataFull.value.birth,
    password: UserDataFull.value.password
})

async function registerUser(endpoint: string, userData?: any): Promise<any> {
    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })

        if (!response.ok) throw new Error(response.statusText)

        const data = await response.json();
        return data;
        
    } catch (error) {
        console.log("deu erro ao tentar registrar o user: ", error);
        
    }
}

const showModal = ref(false);
async function register_form(event: Event): Promise<void> {
    event.preventDefault();
    const endpoint = 'http://localhost:8080/user';

    console.log(UserData.value);
    

    const result_register = await registerUser(endpoint, UserData.value);
    if (result_register) {
        console.log("User registrado com sucesso: ", result_register);
        showModal.value = true;
    }
}



</script>

<template>
    <form @submit="register_form">
        <h1 id="titleForm">Cadastro</h1>

        <aside class="asideForm">
            <div class="coverInput">
                <div id="containerIcon_input">
                    <img src="../../assets/images/icones/icone_user.png" alt="">
                </div>
                <input type="text" class="inputs" placeholder="Nome completo*" v-model="UserDataFull.name">
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
                <input type="text" class="inputs" placeholder="Email*" v-model="UserDataFull.email">
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
                <input type="text" class="inputs" placeholder="Confirmar Email*" v-model="UserDataFull.confirmEmail">
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
                <input type="date" class="inputs" placeholder="data de nascimento" v-model="UserDataFull.birth">
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
                <input type="text" class="inputs" placeholder="Senha*" v-model="UserDataFull.password">
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
                <input type="text" class="inputs" placeholder="Confirmar Senha*" v-model="UserDataFull.confirmPassword">
            </div>
            <div class="containerCaseError">
                <img src="../../assets/images/icones/icone_alert.png" alt="">
                <p>Deu merda ai mn qual foi</p>
            </div>
        </aside>



        <button id="buttonRegister">Registrar</button>


    </form>


    <Modal v-if="showModal" @closeModal="showModal = false"/>
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
    padding-bottom: 3rem;
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

.inputs {
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

#buttonRegister {
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


</style>