<script setup lang="ts">

</script>

<template>
    <form @submit="event => event.preventDefault()">
        <h1 id="titleForm">Cadastro</h1>

        <aside class="asideForm">
            <div class="coverInput">
                <div id="containerIcon_input">
                    <img src="../../assets/images/icones/icone_user.png" alt="">
                </div>
                <input type="text" id="inputEmail" placeholder="Nome completo*">
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
                <input type="text" id="inputEmail" placeholder="Confirmar Email*">
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


        <aside class="asideForm">
            <div class="coverInput">
                <div id="containerIcon_input">
                    <img src="../../assets/images/icones/icone_user.png" alt="">
                </div>
                <input type="text" id="inputEmail" placeholder="Confirmar Senha*">
            </div>
            <div class="containerCaseError">
                <img src="../../assets/images/icones/icone_alert.png" alt="">
                <p>Deu merda ai mn qual foi</p>
            </div>
        </aside>



        <button id="buttonRegister">Registrar</button>
        

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