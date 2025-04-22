<template>
    <div class="login-wrapper container">
      <h2 class="page-title">Вхід в адмін-панель</h2>
      <form @submit.prevent="login" class="login-form">
        <div class="input-wrapper">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="input-wrapper">
          <label for="password">Пароль:</label>
          <input type="password" id="password" v-model="password" value="{{import.meta.env.VUE_APP_API_KEY}}" required>
        </div>
        <button class="form-button " type="submit">Увійти</button>
        <p v-if="error">{{ error }}</p>
      </form>

      <router-link to="/admin">Admin</router-link>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { auth } from '../firebase/firebase';
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
  <style scoped>
  .login-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
  }
  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    background-color: var(--border-color);
    max-width: 500px;
    padding: 1.5rem;
    border-radius: 5px;
  }
  .input-wrapper {
    display: flex;
    gap: 0.25rem;
    flex-direction: column;
  }
  .input-wrapper input {
    display: block;
    min-width: 300px;
    background-color: var(--main-text-color);
    color: var(--container-color);
    padding: .5rem;
  }
  .input-wrapper label {
    text-align-last: left;
  }
  .form-button {
    background-color: var(--main-text-color);
    color: var(--container-color);
    padding: 0.75rem 1.25rem;
    border-radius: 5px;
  }
  </style>