<template>
    <div class="main-container">
    <kam-aside-menu/>
    <div class="pages">
      <kam-header-tooltip/>
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup lang="ts">
import kamAsideMenu from '../components/kam-aside-menu.vue'
import kamHeaderTooltip from '../components/kam-header-tooltip.vue'
import { auth } from '../firebase/firebase.ts';
import { onAuthStateChanged } from 'firebase/auth';
import { ref } from 'vue';

const currentUser = ref(null);

onAuthStateChanged(auth, (user) => {
  currentUser.value = user;
});

</script>
<style scoped>
    .main-container {
  display: flex;
  justify-content: space-around;
  min-height: 100vh;
  height: 100%;
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