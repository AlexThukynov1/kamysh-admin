import { defineStore } from 'pinia';
import {ref} from 'vue';
import type { User } from 'firebase/auth';
import {auth} from '../firebase/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';


const router = useRouter();

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null);

  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser;
    if (!currentUser && router.currentRoute.value.meta.requiresAuth) {
      router.push('/login');
    }
  });

  const logout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error: any) {
      console.error('Помилка виходу:', error.message);
    }
  };

  return { user, onAuthStateChanged, logout}
})