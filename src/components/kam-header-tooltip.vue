<template>
    <div class="header-tooltip tooltip">
        <div class="tooltip__container">
            <i class="ri-notification-3-line"></i>
            <i class="ri-user-line"></i>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.header-tooltip {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 2px solid var(--border-color);
    height: var(--header-height);
    padding-right: 1.5rem;

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
</style>