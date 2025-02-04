import { defineStore } from 'pinia'
import axios from 'axios' 
import { useAuthStore } from './auth'

export const useActivityStore = defineStore('activities', { 
    state: () => ({ 
        activities: [],
    }), 

    actions: { 
        async fetchActivities() { 
            const authStore = useAuthStore()
            if (!authStore.accessToken) return 

            try { 
                const response = await axios.get('https://www.strava.com/api/v3/athlete/activities', { 
                    headers: { Authorization: 'Bearer ${authStore.accessToken' }, 
                }); 
                this.activities = response.data
            } catch (error) { 
                console.error("Failed to fetch activites", error)
            }
        }, 
    }, 
})