<template>
        <div class="aside ">
        <div class="aside-container">
            <div class="logo-wrapper">
                <img class="logo" src="https://placehold.co/125x25" alt="">
            </div>
    
            <div class="aside__link-wrapper">
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
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.logo-wrapper {
    height: var(--header-height);
    border-bottom: solid 2px var(--border-color);
    display: flex;
    align-items: center;
    justify-content: center;
}
.aside {
    display: flex;
    flex-direction: column;
    width: 200px;
    
}
.aside-container {
    display: flex;
    flex-direction: column;
    width: 200px;
    border-right: solid 2px var(--border-color);
    position: fixed;
    top: 0;
    left: 0;
    min-height: 100vh;
    height: 100%;
}
.aside__link-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

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