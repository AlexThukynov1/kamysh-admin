

<template>
  <div class="main-container">
    <kam-aside-menu/>
    <div class="pages">
      <kam-header-tooltip/>
      <RouterView />
    </div>
  </div>
</template>
<script setup lang="ts">
import kamAsideMenu from './components/kam-aside-menu.vue';
import kamHeaderTooltip from './components/kam-header-tooltip.vue';
</script>
<style scoped>
.main-container {
  display: flex;
  justify-content: space-around;
  height: 100vh;
  align-items: stretch;
  width: 100%;
  margin-inline: auto;
}
.pages {
  flex: 5;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
