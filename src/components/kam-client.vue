<template>
    <div class="client-wrapper">
        <!-- <div
            v-for="client in clients"
            :key="client.id"
            class="client"
        >
        <span class="client-id">{{ client.id }}</span>
        <span class="client-name">{{ client.firstName }}</span>
        <span class="client-last-name">{{ client.lastName }}</span>
        <span class="client-mail">{{ client.email }}</span>
        <span class="client-phone">{{ client.phone }}</span>
        <span class="client-comment">{{ client.comment }}</span> -->
        <table class="client-list">
                <tr>
                    <td>ID</td>
                    <td>Ім'я</td>
                    <td>Прізвище</td>
                    <td>Email</td>
                    <td>Телефон</td>
                    <td>Коментар</td>
                </tr>
            <tr
            v-for="client in clients"
            :key="client.id"
            class="client"
            >
                <td class="client-id">{{ client.id }}</td>
                <td class="client-name">{{ client.firstName }}</td>
                <td class="client-last-name">{{ client.lastName }}</td>
                <td class="client-mail">{{ client.email }}</td>
                <td class="client-phone">{{ client.phone }}</td>
                <td class="client-comment">{{ client.comment }}</td>
            </tr>
        </table>
        <!-- </div> -->
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import IClient from '../interfaces/client-interface.ts'

const props = defineProps({
    clients: {
        type: Array as () => IClient[],
        required: true
        }
})
</script>

<style scoped>
.client-list {
    background-color: var(--border-color);
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
    }
.client-list tr td {
    border: solid 1px var(--container-color);
    padding: 1rem;
}
/* .client-wrapper {
    display: flex;
    flex-direction: column;
}
.client {
    background-color: var(--border-color);
    border-color:var(--container-color);
    border-width: 1px 1px 0px 1px;
    border-style: solid;
    display: flex;
}
.client span {
    display: block;
    padding: 1rem;
    width: 200px;;
}
.client-id,
.client-phone,
.client-last-name,
.client-mail,
.client-name {
    border-color:var(--container-color);
    border-width: 0px 1px 0px 0px;
    border-style: solid;
}
.client:last-child {
    border-width: 1px 1px 1px 1px;
} */
</style>