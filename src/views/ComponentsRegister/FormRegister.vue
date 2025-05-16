<script setup lang="ts">
import { ref, computed } from 'vue';
import { registerUser } from '../../Services/requests';

import Modal from '../../layout/Modal.vue';
import ModalError from '../../layout/ModalError.vue';

import { useRouter } from 'vue-router'
const router = useRouter()

const UserDataFull = ref({
    name: '',
    email: '',
    confirmEmail: '',
    birth: '',
    password: '',
    confirmPassword: ''
});


const UserData = computed(() => ({
    name: UserDataFull.value.name,
    email: UserDataFull.value.email,
    birth: UserDataFull.value.birth,
    password: UserDataFull.value.password
}));



const showModal = ref(false);
const showModalError = ref(false);
async function register_form(event: Event): Promise<void> {
    event.preventDefault();
    const endpoint = 'http://localhost:8080/user';

    console.log(UserData.value);


    const result_register = await registerUser(endpoint, UserData.value);
    if (result_register) {
        console.log("User registrado com sucesso: ", result_register);
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

    Router('/login')
}

function Router(path_router: string): void {
    router.push(path_router)

}

</script>

<template>
    <Modal v-if="showModal" :titleCard="'Cadastro realizado com sucesso'" @closeModal="closeModal" />
    <ModalError v-if="showModalError" :titleCard="'Erro ao realizar cadastro'" @closeModal="closeModal" />


    <form @submit="register_form">
        <h1 id="titleForm">Cadastro</h1>

        <section class="sectionForm">
            <aside class="asideForm">
                <div class="coverInput">
                    <div class="containerIcon_input">
                        <img src="../../assets/images/icones/icone_user.png" alt="">
                    </div>
                    <input type="text" class="inputs" placeholder="Nome completo*" v-model="UserDataFull.name" required>
                </div>

            </aside>
            <aside class="asideForm">
                <div class="coverInput">
                    <div class="containerIcon_input">
                        <img src="../../assets/images/icones/icone_user.png" alt="">
                    </div>
                    <input type="email" class="inputs" placeholder="Email*" v-model="UserDataFull.email" required>
                </div>
            </aside>
        </section>

        <section class="sectionForm">
            <aside class="asideForm">
                <div class="coverInput">
                    <div class="containerIcon_input">
                        <img src="../../assets/images/icones/icone_user.png" alt="">
                    </div>
                    <input type="email" class="inputs" placeholder="Confirmar Email*"
                        v-model="UserDataFull.confirmEmail" required>
                </div>

            </aside>
            <aside class="asideForm">
                <div class="coverInput">
                    <div class="containerIcon_input">
                        <img src="../../assets/images/icones/icone_user.png" alt="">
                    </div>
                    <input type="date" class="inputs inputDate" placeholder="data de nascimento"
                        v-model="UserDataFull.birth" required>
                </div>

            </aside>
        </section>


        <section class="sectionForm">
            <aside class="asideForm">
                <div class="coverInput">
                    <div class="containerIcon_input">
                        <img src="../../assets/images/icones/icone_user.png" alt="">
                    </div>
                    <input type="password" class="inputs" placeholder="Senha*" v-model="UserDataFull.password" required>
                </div>

            </aside>
            <aside class="asideForm">
                <div class="coverInput">
                    <div class="containerIcon_input">
                        <img src="../../assets/images/icones/icone_user.png" alt="">
                    </div>
                    <input type="password" class="inputs" placeholder="Confirmar Senha*"
                        v-model="UserDataFull.confirmPassword" required>
                </div>

            </aside>
        </section>



        <button id="buttonRegister">Registrar</button>


    </form>



</template>

<style scoped>
form {
    background-color: #ffffff;
    width: 60%;
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
.sectionForm {
    width: 90%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
}

.asideForm {
    width: 45%;
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
    gap: 10px;
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
/* .inputDate {
    font-size: 1rem;
} */


#buttonRegister {
    background-color: #F57E00;
    width: 40%;
    padding: 13px;
    border-radius: 10px;
    border: none;
    outline: none;
    color: #ffffff;
    font-weight: bold;
    font-size: 1.7rem;
    cursor: pointer;
    transition: all 0.3s;
}

@media(max-width: 1300px) {
    .sectionForm {
        justify-content: center;
    }
    .asideForm {
        width: 80%;
    }
}

@media(max-width: 800px) {
    form {
        width: 80%;
    }
    .asideForm {
        width: 100%;
    }
    #buttonRegister {
        width: 60%;
    }
}

@media(max-width: 500px) {
    form {
        width: 95%;
    }
}
</style>