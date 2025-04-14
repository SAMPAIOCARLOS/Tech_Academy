<script setup lang="ts">
import { ref, watch, defineEmits } from 'vue'

import NavigationStudentPortal from './NavigationStudentPortal.vue'

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


const emit = defineEmits(['selectItem'])


function selectItem(event: Event): void {
    emit('selectItem', event)
}
</script>

<template>
  <div id="contentSideBar" ref="SideBar">
    <div id="containerContentSideBar">
      <NavigationStudentPortal :Isvalue_TextSideBar="Isvalue_SideBar" @selectItem="selectItem($event)" />
    </div>
  </div>
</template>


<style scoped>
#contentSideBar {
    position: fixed;
    top: 0;
    left: 0;
    width: 5.5rem;
    height: 100vh;
    /* background: rgb(122, 122, 122); */
    background-color: #4A5A80;
    backdrop-filter: blur(3px);
    z-index: 100;
    padding: 16vh 20px 20px 20px;
    transition: all 0.5s ease-in-out;
}

#contentSideBar.active {
    width: 25%;
    left: 0;
}

#containerContentSideBar {
    /* border: 2px solid red; */
    padding-top: 7rem;
}

@media(max-width: 1000px) {
  #contentSideBar.active {
      width: 35%;
    }
}
@media(max-width: 750px) {
  #contentSideBar.active {
    width: 50%;
  }
}

@media(max-width: 600px) {
  #contentSideBar.active {
    width: 60%;
  }

  #contentSideBar {
    left: -100%;
  }
}
@media(max-width: 500px) {
  #contentSideBar.active {
    width: 70%;
  }
}
@media(max-width: 400px) {
  #contentSideBar.active {
    width: 100%;
  }
}

</style>