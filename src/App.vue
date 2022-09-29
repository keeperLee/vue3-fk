<template>
    <h1 v-if="loading">Loading!.....</h1>
    <!--    <img v-if="loaded" :src="result.message" >-->
    <Suspense>
        <!--slot中只能有一个根元素，如果根元素内有多个异步请求的组件，会按顺序依次加载-->
        <template #default>
            <div>
                <!--                <AsyncShow></AsyncShow>-->
                <DogShow></DogShow>
            </div>
        </template>
        <template #fallback>
            <h1>Suspense loading</h1>
        </template>
    </Suspense>
    <button @click="openModal">Open Modal</button>
    <Modal :is-open="modalIsOpen" @close-modal='onModalClose'>MY MODAL!!!</Modal>
    <img v-if="loaded" :src="result[0].url" alt="">
    <p>{{errorCaptured}}</p>
</template>

<script lang="ts">
import {defineComponent, watch, ref ,onErrorCaptured} from 'vue';
import useURLLoader from "@/hooks/useURLLoader";
import Modal from "@/components/Modal.vue";
import AsyncShow from '@/components/AsyncShow.vue'
import DogShow from "@/components/DogShow.vue";

interface DogResult {
    message: string,
    status: string
}

interface CatResult {
    id: string,
    url: string,
    width: number,
    height: number
}

export default defineComponent({
    name: 'App',
    components: {
        Modal,
        // AsyncShow,
        DogShow
    },
    setup() {
        const errorCaptured = ref(null)
        onErrorCaptured((e:any)=>{
            errorCaptured.value = e
            return true
        })
        // const {result,loading,loaded,error} = useURLLoader<DogResult>('https://dog.ceo/api/breeds/image/random')
        const {result, loading, loaded, error} = useURLLoader<CatResult[]>('https://api.thecatapi.com/v1/images/search')

        watch(result, () => {
            if (result.value) {
                console.log('value', result.value[0])
            }
        })

        const modalIsOpen = ref(false)
        const openModal = () => {
            modalIsOpen.value = true
        }
        const onModalClose = () => {
            modalIsOpen.value = false
        }
        return {
            result, loading, loaded, error, modalIsOpen, openModal, onModalClose,errorCaptured
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
