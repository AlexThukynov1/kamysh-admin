<template>
    <div class="container home-page">
        <h2 class="page-title">Домашня сторінка</h2>
        <div class="stats-bar">
            <div class="stats-bar-item">
                Кількість замовлень: <span>20</span>
            </div>
            <div class="stats-bar-item">
                Загальна сума: <span>125000</span>
            </div>
            <div class="stats-bar-item">
                Нових клієнтів: <span>12</span>
            </div>
        </div>
        <div class="section-bar">
            <div>
                <h3>Нові замовлення</h3>
                <div class="newOreders orders-bar">
                    <kam-orders :orders="newOrders"/>
                </div>
            </div>
            <div>
                <h3>Очікують на оплату</h3>
                <div class="waitPaidOreders orders-bar">
                    <kam-orders :orders="waitPaidOrders"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import IOrder from '../interfaces/order-interface.ts'
import kamOrders from '../components/kam-orders.vue'

const newOrders = ref<IOrder[]>([
    {
        id:55,
        clientId: 1,
        itemsId: [1,0],
        orderStatus: 'Новий',
        info: '',
        managerId: 1
    },
    {
        id:56,
        clientId: 1566,
        itemsId: [3],
        orderStatus: 'Новий',
        info: '',
        managerId: 1
    },
    {
        id:57,
        clientId: 1025,
        itemsId: [1,0,1],
        orderStatus: 'Новий',
        info: '',
        managerId: 1
    },
    {
        id:58,
        clientId: 1365,
        itemsId: [1,1,2],
        orderStatus: 'Новий',
        info: '',
        managerId: 1
    },
])
const waitPaidOrders = ref<IOrder[]>([
    {
        id:58,
        clientId: 1365,
        itemsId: [1,1,2],
        orderStatus: 'Очікує на оплату',
        info: '',
        managerId: 1
    },
    {
        id:57,
        clientId: 1365,
        itemsId: [1,1,2],
        orderStatus: 'Очікує на оплату',
        info: '',
        managerId: 1
    },
    {
        id:50,
        clientId: 1365,
        itemsId: [1,2],
        orderStatus: 'Очікує на оплату',
        info: '',
        managerId: 1
    },
])
</script>

<style scoped>
.home-page {
}
.section-bar {
    display: flex;
    gap: 2rem;
}
.orders-bar {
    max-height: 250px;
    overflow: hidden;
    overflow-y: scroll;
}
.stats-bar {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 2rem;
    margin-bottom: 2rem;
}
.stats-bar-item {
    width: 100%;
    background-color: var(--border-color);
    border-radius: 3px;
    padding: 2rem;
}
.stats-bar-item span {
    font-size: var(--big-font-size);
}
</style>