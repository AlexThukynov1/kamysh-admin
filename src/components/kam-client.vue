<template>
    <div class="client-wrapper">
        <div
            v-for="client in clients"
            :key="client.id"
            class="client"
        >
        <span>{{ client.id }}</span>
        <span>{{ client.firstName }}</span>
        <span>{{ client.lastName }}</span>
        <span>{{ client.email }}</span>
        <span>{{ client.phone }}</span>
        <span>{{ client.comment }}</span>
        </div>
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

</style>