import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { User } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

const router = useRouter();
const USER_STORAGE_KEY = 'user';

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(getSessionUser());
  const isAuthenticated = ref<Boolean>(false)

  const logout = async () => {
    try {
      await signOut(auth);
      isAuthenticated.value = false
      removeSessionUser();
    } catch (error: any) {
      console.error('Помилка виходу:', error.message);
    }
  };

  function getSessionUser(): User | null {
    const storedUser = sessionStorage.getItem(USER_STORAGE_KEY);
    return storedUser ? JSON.parse(storedUser) as User : null;
  }

  function removeSessionUser() {
    sessionStorage.removeItem(USER_STORAGE_KEY);
  }

  return { user, logout, onAuthStateChanged, isAuthenticated };
});