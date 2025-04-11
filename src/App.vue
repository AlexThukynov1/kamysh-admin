

<template>
  <div class="main-container">
    <kam-aside-menu/>
    <div class="pages">
      <RouterView />
    </div>
  </div>
</template>
<script setup lang="ts">
import kamAsideMenu from './components/kam-aside-menu.vue';
</script>
<style scoped>
.main-container {
  display: flex;
  justify-content: space-around;
  height: 100vh;
  align-items: stretch;
  gap: 2rem;
  width: 100%;
  margin-inline: auto;
}
.pages {
  flex: 5;
}
</style>
