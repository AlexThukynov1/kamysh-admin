<template>
    <div>
      <h2>Вхід в адмін-панель</h2>
      <form @submit.prevent="login">
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div>
          <label for="password">Пароль:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Увійти</button>
        <p v-if="error">{{ error }}</p>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { auth } from '@/firebase';
  import { signInWithEmailAndPassword } from 'firebase/auth';
  import { useRouter } from 'vue-router';
  
  const email = ref('');
  const password = ref('');
  const error = ref('');
  const router = useRouter();
  
  const login = async () => {
    error.value = '';
    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      router.push('/admin');
    } catch (err) {
      switch (err.code) {
        case 'auth/user-not-found':
          error.value = 'Користувача з таким email не знайдено.';
          break;
        case 'auth/wrong-password':
          error.value = 'Неправильний пароль.';
          break;
        default:
          error.value = 'Виникла помилка при вході.';
          console.error('Помилка входу:', err.message);
      }
    }
  };
  </script>