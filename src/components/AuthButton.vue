<template>
    <div class="login-container">
      <button @click="redirectToStrava">Login with Strava</button>
    </div>
  </template>
  
  <script setup>
  const redirectToStrava = () => {
    const clientId = "147134"; // Replace with your Strava Client ID
    const redirectUri = encodeURIComponent("http://localhost:5173/callback");
    const scope = "read,activity:read_all";
  
    const authUrl = `https://www.strava.com/oauth/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&approval_prompt=force&scope=${scope}`;
    
    window.location.href = authUrl; // Redirects user to Strava OAuth
  };
  </script>
  
  <style scoped>
  .login-container {
    text-align: center;
  }
  button {
    padding: 10px 20px;
    background-color: #fc4c02;
    color: white;
    font-size: 18px;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #d63b00;
  }
  </style>
  