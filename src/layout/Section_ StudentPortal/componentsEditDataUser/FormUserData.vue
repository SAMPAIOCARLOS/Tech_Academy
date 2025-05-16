<script setup lang="ts">
import { ref, onMounted } from 'vue';

const dataUser = ref({
    name: 'd',
    email: 'd',
    birthDate: '',
});

const textArea = ref("Lorem Ipsum is simply dummy text of the printing and typesetting industry...");

onMounted((): void => {
    const token = localStorage.getItem('token');

    // Pega os dados do localStorage
    const userFromStorage = JSON.parse(localStorage.getItem('user') as string);

    // Verifica se veio algo antes de tentar usar
    if (userFromStorage) {
        dataUser.value.name = userFromStorage.name;
        dataUser.value.email = userFromStorage.email;

        // Se a data de nascimento veio, formatamos para YYYY-MM-DD
        const rawDate = userFromStorage.birthDate;
        if (rawDate) {
            // Se a data estiver no formato DD-MM-YYYY, converta para YYYY-MM-DD
            const dateParts = rawDate.split('-');
            if (dateParts.length === 3) {
                dataUser.value.birthDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
            }
        }
    }

    console.log(token, userFromStorage);
});
</script>

<template>
    <form @submit="event => event.preventDefault()">
        <div class="containerInputs">
            <aside class="asides">
                <label for="nome" class="labels">Nome</label>
                <input type="text" id="nome" placeholder="Ex. Sthefane Silva" class="inputs" v-model="dataUser.name">
            </aside>
            <aside class="asides">
                <label for="email" class="labels">Email</label>
                <input type="text" id="email" placeholder="Ex. SthefaneSilva@gmail.com" class="inputs"
                    v-model="dataUser.email">
            </aside>
            <aside class="asides">
                <label for="dateBirth" class="labels">Data de nascimento</label>
                <input type="date" id="dateBirth" class="inputs" v-model="dataUser.birthDate">
            </aside>
        </div>

        <div class="containerInputs">
            <aside class="asides">
                <label for="BIOGRAFIA" class="labels_bio">BIOGRAFIA</label>
                <textarea name="BIOGRAFIA" id="BIOGRAFIA" class="textarea" :placeholder="textArea"></textarea>
            </aside>
        </div>

        <div class="containerInputs">
            <h1>REDES SOCIAIS</h1>
            <aside class="asides">
                <label for="Linkedin" class="labels">Linkedin</label>
                <input type="text" id="Linkedin" placeholder="Ex. SthefaneSilva123" class="inputs">
            </aside>
            <aside class="asides">
                <label for="GitHub" class="labels">GitHub</label>
                <input type="text" id="GitHub" placeholder="Ex. @sthefanesilva" class="inputs">
            </aside>
            <aside class="asides">
                <label for="Instagram" class="labels">Instagram</label>
                <input type="text" id="Instagram" placeholder="Ex. @sthefanesilva" class="inputs">
            </aside>
        </div>
    </form>
</template>

<style scoped>
form {
    /* border: 2px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    padding-bottom: 5rem;
}

.containerInputs {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.asides {
    /* border: 1px solid red; */
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.inputs {
    width: 60%;
    background-color: #ECECEC;
    padding: 15px;
    border: 10px;
    outline: none;
    border-radius: 3px;
    font-size: 1.3rem;
}

.textarea {
    min-width: 80%;
    max-width: 80%;
    min-height: 40vh;
    background-color: #ECECEC;
    border-radius: 3px;
    border: none;
    font-size: 1.4rem;
    color: #000000ad;
    padding: 3rem;
}

.labels {
    font-weight: bold;
    font-size: 1.3rem;
    color: #000000ad;
}

.labels_bio {
    font-weight: bold;
    font-size: 2rem;
    color: #000000;
}

@media(max-width: 600px) {
    .inputs {
        width: 100%;
    }
    .textarea {
        min-width: 100%;
        max-width: 100%;
    }
}
</style>