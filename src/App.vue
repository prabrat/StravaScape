<script setup>
import { RouterView, RouterLink } from 'vue-router';
import { useAuthStore } from './store/auth';

const authStore = useAuthStore();
</script>

<template>
  <div class="app-container">
    <header class="app-header">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <button v-if="authStore.isAuthenticated" @click="authStore.logout">Logout</button>
      </nav>
    </header>
    
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-container {
  font-family: Arial, sans-serif;
  text-align: center;
}

.app-header {
  background-color: #42b983;
  padding: 1rem;
}

nav a {
  margin: 0 15px;
  text-decoration: none;
  color: white;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}
</style>
