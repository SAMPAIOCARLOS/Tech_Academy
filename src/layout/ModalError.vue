<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';

const props = defineProps({
    titleCard: String
})

const emit = defineEmits(['closeModal'])
</script>

<template>
    <div class="overlay">
        <div class="modal">
            <button class="close-btn" @click="$emit('closeModal')">✖</button>
            <!-- <div class="edit-icon">✏️</div> -->
            <h2>{{ props.titleCard }}</h2>
            <div class="buttons">
                <button class="cancel" @click="$emit('closeModal')">Ok</button>
                <!-- <button class="save" @click="saveNewItemName">Salvar Alteração</button> -->
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Fundo escuro ao redor do modal */
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

/* Estilização do modal */
.modal {
    background: white;
    padding: 20px;
    width: 350px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    position: relative;
    text-align: center;
    animation: fadeIn 0.3s ease-in-out;
}

h2 {
    color: #000000 !important;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.9);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

/* Estilização do input */
input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
}

input:focus {
    border-color: #2196F3;
}

/* Estilização dos botões */
.buttons {
    display: flex;
    justify-content: space-between;
}

button {
    flex: 1;
    padding: 10px;
    margin: 0 5px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.3s ease;
}

.cancel {
    background: #ccc;
    color: #333;
}

.cancel:hover {
    background: #bbb;
}

.save {
    background: #4CAF50;
    color: white;
}

.save:hover {
    background: #388E3C;
}

/* Botão de fechar */
.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #555;
}

.close-btn:hover {
    color: black;
}
</style>