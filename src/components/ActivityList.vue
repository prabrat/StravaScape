<template> 
    <div> 
        <h2>Your Activities</h2>
        <ul> 
            <li v-for="activity in activities" :key="activity.id"> 
                {{ activity.name }} - {{ formatDistance(activity) }}
            </li>
        </ul>
    </div>
</template>

<script>
import { useActivityStore } from '../store/activities'
import { onMounted, computed } from 'vue'  

export default {
    setup() {
        const store = useActivityStore();

        onMounted(() => {
            store.fetchActivities(); 
        });

        // Function to format distance based on activity type
        const formatDistance = (activity) => {
            if (!activity.distance) return "0"; 

            // Handle different activity types based on Strava's classification
            const type = activity.sport_type || activity.type; // Strava API may use "sport_type" or "type"

            if (["Run", "Ride", "Walk", "Hike"].includes(type)) {
                return `${(activity.distance / 1000).toFixed(2)} km`; // Convert meters to km
            } else if (["Swim", "Rowing"].includes(type)) {
                return `${activity.distance.toFixed(0)} m`; // Keep meters
            } else {
                return `${(activity.distance / 1000).toFixed(2)} km`; // Default to km
            }
        };

        return { 
            activities: computed(() => store.activities), 
            formatDistance
        }; 
    },
}
</script>
