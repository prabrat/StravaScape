import { defineStore } from 'pinia';
import { useActivityStore } from './activities'
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
    state: () => ({
      accessToken: localStorage.getItem('strava_token') || null,
    }),
    getters: {
        isAuthenticated: (state) => !!state.accessToken,
      },
    actions: {
      async getAccessToken(code) {
        try {
          const response = await axios.post('https://www.strava.com/oauth/token', {
            client_id: "147134",
            client_secret: "3d486f2418bb343b73e7f133d9393287023057b5",
            code,
            grant_type: "authorization_code",
          });
  
          this.accessToken = response.data.access_token;
          localStorage.setItem('strava_token', this.accessToken);
        } catch (error) {
          console.error("Error fetching access token", error);
        }
      },
      logout() {
        this.accessToken = null;
        localStorage.removeItem('strava_token');
      },
    },
    persist: true,  // Makes accessToken persist automatically
  });
  