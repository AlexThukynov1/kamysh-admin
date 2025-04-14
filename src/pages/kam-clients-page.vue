<template>
    <div class="container">
        <h2 class="page-title">Клієнти</h2>
        <kam-client :clients="clients"/>
    </div>
</template>

<script setup lang="ts">
import kamClient from '../components/kam-client.vue'
import IClient from '../interfaces/client-interface.ts'
import {ref} from 'vue'

const clients = ref<IClient[]>([
    {
        id:0,
        firstName: 'Alex',
        lastName: '',
        email: 'client@mail.com',
        phone: '0888888888',
        comment: 'Lorem ipsum'
    },
    {
        id:1,
        firstName: 'Alex1',
        lastName: '',
        email: 'clien1t@mail.com',
        phone: '0888888888',
        comment: ''
    },
    {
        id:2,
        firstName: 'Alex2',
        lastName: '',
        email: 'client2@mail.com',
        phone: '0888888888',
        comment: ''
    },
    {
        id:3,
        firstName: 'Alex3',
        lastName: 'Alex3',
        email: 'client3@mail.com',
        phone: '0888888888',
        comment: 'Lorem ipsum'
    }
])
</script>

<style scoped>

</style>