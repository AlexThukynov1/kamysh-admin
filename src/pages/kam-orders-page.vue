<template>
    <div class="container">
        <h2 class="page-title">Замовлення</h2>
        <kam-orders :orders="orders"/>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import IOrder from '../interfaces/order-interface.ts'
import kamOrders from '../components/kam-orders.vue'

const orders = ref<IOrder[]>([
    {
        id:0,
        clientId: 1,
        itemsId: [1,0,1,2],
        orderStatus: 'Новий',
        info: '',
        managerId: 1
    },
    {
        id:1,
        clientId: 2,
        itemsId: [1,0,1],
        orderStatus: 'В роботі',
        info: '',
        managerId: 2
    },
    {
        id:2,
        clientId: 3,
        itemsId: [1,1,2],
        orderStatus: 'Оплачено',
        info: '',
        managerId: 2
    },
    {
        id:3,
        clientId: 1,
        itemsId: [0,1,2],
        orderStatus: 'Доставка',
        info: '',
        managerId: 3
    },
    {
        id:4,
        clientId: 4,
        itemsId: [1,0,1],
        orderStatus: 'Виконано',
        info: '',
        managerId: 0
    },
    {
        id:5,
        clientId: 5,
        itemsId: [1,0,1,2,3],
        orderStatus: 'Відмінений',
        info: '',
        managerId: 1
    }
])

</script>

<style scoped>

</style>