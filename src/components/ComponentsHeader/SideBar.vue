<script setup lang="ts">
import { ref, watch, defineProps } from 'vue'

const props = defineProps({
    Isvalue_SideBar: Boolean,
})

const SideBar = ref<HTMLElement | null>(null)
watch(() => props.Isvalue_SideBar,
    (newVal) => {
        if (newVal) {
            SideBar.value?.classList.add("active")
        } else {
            SideBar.value?.classList.remove("active")
        }
    }
)
</script>

<template>
    <div id="SideBar" ref="SideBar">

    </div>
</template>

<style scoped>
#SideBar {
    position: fixed;
    top: 0;
    left: -200%;
    width: 30%;
    height: 100vh;
    /* background: rgb(122, 122, 122); */
    background-color: #4A5A80;
    backdrop-filter: blur(3px);
    z-index: 100;
    padding: 16vh 20px 20px 20px;
    transition: all 0.5s ease-in-out;
}

#SideBar.active {
    left: 0;
}

@media(min-width: 1100px) {
    #SideBar.active {
        left: -200%;
    }
}

@media(max-width: 1100px) {
    #SideBar {
        width: 40%;
    }
}
@media(max-width: 750px) {
    #SideBar {
        width: 50%;
    }
}
@media(max-width: 600px) {
    #SideBar {
        width: 70%;
    }
}
@media(max-width: 350px) {
    #SideBar {
        width: 100%;
    }
}
</style>