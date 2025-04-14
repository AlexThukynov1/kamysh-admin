<template>
    <div class="">
        <table class="orders-list">
            <tr>
                <td>Номер замовлення</td>
                <td>Клієнт</td>
                <td>Товари</td>
                <td>Cтатус</td>
                <td>Інформація</td>
                <td>Менеджер</td>
            </tr>
            <tr
                v-for="order in orders"
                :key="order.id"
                class="order-item"
            >
                <td>{{ order.id }}</td>
                <td>{{ order.clientId }}</td>
                <td><ol>
                    <li
                        v-for="idItem in order.itemsId"
                    >{{ idItem }}</li>
                </ol></td>
                <td>{{ order.orderStatus }}</td>
                <td>{{ order.info }}</td>
                <td>{{ order.managerId }}</td>
            </tr>
        </table>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import IOrder from '../interfaces/order-interface.ts'

const props = defineProps({
    orders: {
        type: Array as () => IOrder[],
        required: true
        }
})

</script>

<style scoped>
.orders-list {
    background-color: var(--border-color);
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
    }
.orders-list tr td {
    border: solid 1px var(--container-color);
    padding: 1rem;
}
</style>