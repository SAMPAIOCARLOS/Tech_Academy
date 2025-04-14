<script setup lang="ts">

</script>

<template>
    <div id="containerNotifications">
        <div id="titleNotifications">
            <h1>Notificação</h1>
        </div>

        <div id="containerCardsNotifications">
            <div id="cardsNotifications">
                <h1 id="titleCards">FRONT-END</h1>
                <p id="descriptionCards">Atualizações no módulo de Front-End, confir agora:</p>

                <button id="buttonCard">Ver novidades</button>
            </div>
        </div>
    </div>
</template>


<style scoped>
#containerNotifications {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    
}

#titleNotifications {
    width: 100%;
    /* border: 2px solid rgb(0, 0, 0); */
    padding: 4rem 0;
    font-size: 2rem;
    color: #000000c4;
}

#containerCardsNotifications {
    width: 100%;
    /* border: 3px solid blue; */
    display: flex;
    justify-content: flex-start;
    gap: 3rem;
}

#cardsNotifications {
    background-color: #ffffff;
    width: 30%;
    height: 30vh;
    min-height: 20rem;
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.301);
    transition: box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #000000af;
}
#cardsNotifications:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.466);
}

#titleCards {
    font-size: 2.5rem;
}

#descriptionCards {
    width: 80%;
    font-size: 1.5rem;
    text-align: center;
    font-weight: bold;
}

#buttonCard {
    width: 50%;
    padding: 10px;
    background-color: #F57E00;
    border: none;
    border-radius: 7px;
    color: #ffffff;
    font-weight: bold;
    font-size: 1.4rem;
    cursor: pointer;
}
</style>