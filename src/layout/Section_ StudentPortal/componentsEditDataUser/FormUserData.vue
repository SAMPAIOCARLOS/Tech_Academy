<script setup lang="ts">
import { ref } from 'vue';


const textArea = ref("Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
</script>

<template>
    <form @submit="event => event.preventDefault()">
        <div class="containerInputs">
            <aside class="asides">
                <label for="nome" class="labels">Nome</label>
                <input type="text" id="nome" placeholder="Ex. Sthefane Silva" class="inputs">
            </aside>
            <aside class="asides">
                <label for="email" class="labels">Email</label>
                <input type="text" id="email" placeholder="Ex. SthefaneSilva@gmail.com" class="inputs">
            </aside>
            <aside class="asides">
                <label for="dateBirth" class="labels">Data de nascimento</label>
                <input type="date" id="dateBirth" class="inputs">
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
</style>