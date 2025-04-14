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
            <h2>{{ props.titleCard }}</h2>
            <div class="buttons">
                <button class="ok-btn" @click="$emit('closeModal')">Entendi</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}

.modal {
    background-color: #fff;
    padding: 2rem;
    width: 90%;
    max-width: 400px;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    position: relative;
    animation: fadeIn 0.3s ease;
    text-align: center;
}

h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #333;
}

.buttons {
    display: flex;
    justify-content: center;
}

.ok-btn {
    background-color: #4f46e5;
    color: #fff;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease;
}

.ok-btn:hover {
    background-color: #4338ca;
}

.close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border: none;
    font-size: 1.25rem;
    color: #888;
    cursor: pointer;
    transition: color 0.2s;
}

.close-btn:hover {
    color: #333;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
