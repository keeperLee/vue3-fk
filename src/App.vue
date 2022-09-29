<template>
    <h1 v-if="loading">Loading!.....</h1>
<!--    <img v-if="loaded" :src="result.message" >-->
    <Suspense>
        <template #default>
            <AsyncShow></AsyncShow>
        </template>
        <template #fallback>
            <h1>Suspense loading</h1>
        </template>
    </Suspense>
    <button @click="openModal">Open Modal</button>
    <Modal :is-open="modalIsOpen" @close-modal = 'onModalClose'>MY MODAL!!!</Modal>
    <img v-if="loaded" :src="result[0].url" >
</template>

<script lang="ts">
import { defineComponent,watch,ref} from 'vue';
import useURLLoader from "@/hooks/useURLLoader";
import Modal from "@/components/Modal.vue";
import AsyncShow from '@/components/AsyncShow.vue'
interface DogResult {
    message:string,
    status:string
}

interface CatResult{
    id:string,
    url:string,
    width:number,
    height:number
}
export default defineComponent({
    name: 'App',
    components: {Modal,AsyncShow},
    setup() {
        // const {result,loading,loaded,error} = useURLLoader<DogResult>('https://dog.ceo/api/breeds/image/random')
        const {result,loading,loaded,error} = useURLLoader<CatResult[]>('https://api.thecatapi.com/v1/images/search')

        watch(result,()=>{
            if(result.value){
                console.log('value',result.value[0])
            }
        })


        const modalIsOpen = ref(false)
        const openModal = ()=>{
            modalIsOpen.value = true
        }
        const onModalClose = ()=>{
            modalIsOpen.value = false
        }
        return {
            result,loading,loaded,error,modalIsOpen,openModal,onModalClose
        }
    }
});
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
