<template>
        <div class="aside aside-container">
        <router-link 
            exactActiveClass="active-link" 
            class="aside__link" 
            to="/"
            >Головна
        </router-link>

        <router-link 
            exactActiveClass="active-link" 
            class="aside__link" 
            to="/catalog"
            >Товари
        </router-link>

        <router-link 
            exactActiveClass="active-link" 
            class="aside__link" 
            to="/orders"
            >Замовлення
        </router-link>

        <router-link 
            exactActiveClass="active-link" 
            class="aside__link" 
            to="/clients"
            >Клієнти
        </router-link>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.aside-container {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    flex: 1;
    border-right: solid 2px var(--border-color);
}
.aside__link {
    padding: 1rem;
    color: var(--main-text-color);
    font-size: var(--normal-font-size);
    font-weight: var(--font-bold);
}
.active-link {
    background-color: var(--border-color);
    color: var(--secondary-text-color);
}
</style>