<template>
    <div>
        <article 
            v-for="item in items" :key="item.id"
            class="ptoduct-item"
        >
            <i 
                class="ri-circle-fill circle"
                :class="{'availible': item.availible}"
            ></i>
            <img :src="item.imgSrc" :alt="item.name">
            <h3>{{item.name}}</h3>
            <span>{{item.description}}</span>
            <span>{{item.price}}</span>
            <div>
               <i class="ri-pencil-line"></i> 
               <i class="ri-delete-bin-line"></i>
            </div>
        </article>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import Iproduct from '../interfaces/product-interface'

const props = defineProps({
    items: {
        type: Array as () => Iproduct[],
        required: true
        }
})

const emit = defineEmits({
    change: (id: number) => {

    },
    delete: (id: number) => {

    }  
})

</script>

<style scoped>

</style>