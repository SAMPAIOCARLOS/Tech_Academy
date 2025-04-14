<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = (path_router: string): void => {
    router.push(path_router);
}
</script>

<template>
    <div id="containerHome">
        <div id="titleHome">
            <h1>Home</h1>
        </div>

        
        <div id="containerContentHome">
            <button @click="goBack('/')">Voltar para pagina principal</button>
        </div>
        

    </div>
</template>


<style scoped>
#containerHome {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

}

#titleHome {
    width: 100%;
    /* border: 2px solid rgb(0, 0, 0); */
    padding: 4rem 0;
    font-size: 2rem;
    color: #000000c4;
}

#containerContentHome {
    width: 100%;
    /* border: 2px solid red; */
}

button {
    border: 1px solid #000000c0;
    width: 40%;
    padding: 1rem;
    border-radius: 5px;
    background: transparent;
    cursor: pointer;
    font-size: 1.5rem;
    transition: all 0.3s;
}

button:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.096);
    scale: 1.01;
}

@media(max-width: 900px) {
    button {
        width: 60%;
    }
}

@media(max-width: 600px) {
    button {
        width: 80%;
    }
}
@media(max-width: 450px) {
    button {
        width: 100%;
    }
}
</style>