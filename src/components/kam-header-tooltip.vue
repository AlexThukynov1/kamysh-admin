<template>
    <div class="header-tooltip tooltip">
        <div class="tooltip__container">
            <i class="ri-notification-3-line"></i>
            <i class="ri-user-line" @click="modalVisible = !modalVisible"></i>
        </div>
        <div class="modal logout" v-if="modalVisible">
           <div class="logout-block" @click="logOutFunc">
                <span class="logout-text">Вийти</span>
                <i class="ri-logout-box-r-line logout-icon"></i>
           </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {useUserStore} from '../store/user-store'

const store = useUserStore();
const modalVisible = ref(false);
const {onAuthStateChanged, logout} = store;
import {useRouter} from 'vue-router'

const router = useRouter()

const logOutFunc = async () => {
    await logout()
    await router.push('/login');

}


</script>

<style scoped>
.header-tooltip {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 2px solid var(--border-color);
    height: var(--header-height);
    padding-right: 1.5rem;
    position: relative;

}
.tooltip__container {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
}
.tooltip__container i {
    font-size: 1.5rem;
}
.notification {
    position: relative;
}
.notification::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--error-color);
}
.modal {
    position: absolute;
    right: 1.2rem;
    top:3rem;
    background-color: var(--border-color);
    padding: 1rem;
}
.logout-block {
    display: flex;
    gap: 1rem;
    cursor:pointer;
}
.logout-text {
    display: block;
}
.logout-icon {
    display: block;
}
</style>