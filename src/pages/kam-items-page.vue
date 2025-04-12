<template>
    <div>
        <h2>Товари</h2>
        <kam-product :items="items"/>
        
    </div>
</template>

<script setup lang="ts">
import KamProduct from '../components/kam-product.vue'
import Iproduct from '../interfaces/product-interface'

import {ref} from 'vue'
    const items = ref<Iproduct[]>([
        {
            id:0,
            name: "Item 1",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis officia sint reprehenderit maxime fuga, iste tenetur vel nostrum harum mollitia placeat voluptas laboriosam ipsa error!",
            imgSrc: "https://placehold.co/100x100",
            price: 100.00,
            availible: true
        },
        {
            id:1,
            name: "Item 2",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis officia sint reprehenderit maxime fuga, iste tenetur vel nostrum harum mollitia placeat!",
            imgSrc: "https://placehold.co/100x100",
            price: 150.00,
            availible: true
        },
        {
            id:2,
            name: "Item 3",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis officia sint reprehenderit maxime fuga, iste tenetur vel nostrum harum mollitia placeat voluptas laboriosam ipsa errorvoluptas laboriosam ipsa error oluptas laboriosam ipsa errorvoluptas laboriosam ipsa error!",
            imgSrc: "https://placehold.co/100x100",
            price: 175.00,
            availible: false
        }
    ])
</script> 
<style scoped>
</style>
