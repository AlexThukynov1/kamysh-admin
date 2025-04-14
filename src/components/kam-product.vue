<template>
    <div class="product-wrapper">
        <article 
            v-for="item in items" :key="item.id"
            class="product-item"
        >
            <i 
                class="ri-circle-fill circle"
                :class="{'availible': item.availible}"
            ></i>
            <img class="product-image" :src="item.imgSrc" :alt="item.name">
            <h3 class="product-title">{{item.name}}</h3>
            <span class="product-description">{{item.description}}</span>
            <span class="product-price">{{item.price}} грн</span>
            <div class="product-button-bar">
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
.product-wrapper {
display: grid;
grid-template-columns: repeat(5, max-content);
justify-content: center;
column-gap: 3rem;
row-gap: 3rem;

}
.product-item {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 300px;
    justify-content: space-between;
    background-color: var(--border-color);
}
.product-button-bar {
    justify-self: flex-end;
    display: flex;
    justify-content: space-between;
}
.circle {
    align-self: flex-end;
}
.product-button-bar i {
    font-size: 2rem;
}
.circle {
    color: var(--error-color);
    margin-bottom: 1rem;
}
.availible {
    color: var(--success-color);
}
</style>