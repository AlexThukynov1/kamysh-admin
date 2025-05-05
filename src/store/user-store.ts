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


    onAuthStateChanged(auth, (currentUser) => {
        user.value = currentUser;
        setSessionUser(currentUser);
        if (!currentUser && router.currentRoute.value.meta.requiresAuth) {
            console.log(currentUser +' ' + ' ', router.currentRoute.value.meta.requiresAuth)
          router.push('/login');
        }
      });
 

  const logout = async () => {
    try {
      await signOut(auth);
      removeSessionUser();
      router.push('/login');
    } catch (error: any) {
      console.error('Помилка виходу:', error.message);
    }
  };

  function getSessionUser(): User | null {
    const storedUser = sessionStorage.getItem(USER_STORAGE_KEY);
    return storedUser ? JSON.parse(storedUser) as User : null;
  }

  function setSessionUser(user: User | null) {
    if (user) {
      sessionStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    } else {
      sessionStorage.removeItem(USER_STORAGE_KEY);
    }
  }

  function removeSessionUser() {
    sessionStorage.removeItem(USER_STORAGE_KEY);
  }

  return { user, logout, login };
});