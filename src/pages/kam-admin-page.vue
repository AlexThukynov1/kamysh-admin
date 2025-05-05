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
import {ref, onMounted} from 'vue';
import kamAsideMenu from '../components/kam-aside-menu.vue'
import kamHeaderTooltip from '../components/kam-header-tooltip.vue'
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from '../firebase/firebase'
import {useRouter} from 'vue-router'
import {useUserStore} from '../store/user-store.ts'

const store = useUserStore();
const router = useRouter();



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