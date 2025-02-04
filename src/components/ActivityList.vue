<template> 
    <div> 
        <h2>Your Activities</h2>
        <ul> 
            <li 
                v-for="activity in activities" 
                :key="activity.id" 
                @click="selectActivity(activity)"
                class="activity-item"
            > 
                {{ activity.name }} - {{ (activity.distance).toFixed(2) }} m
            </li>
        </ul>

        <!-- Show overlay when an activity is selected -->
        <Overlay v-if="selectedActivity" :activity="selectedActivity" />
    </div>
</template>

<script>
import { useActivityStore } from '../store/activities'
import { onMounted, computed, ref } from 'vue'  
import Overlay from './Overlay.vue' 

export default {
    components: { Overlay },

    setup() {
        const store = useActivityStore();
        const selectedActivity = ref(null); // Reactive state for selected activity

        onMounted(() => {
            store.fetchActivities(); 
        });

        // Function to update selected activity
        const selectActivity = (activity) => {
            console.log("Selected Activity:", activity); // Debugging log
            selectedActivity.value = activity;
        };

        return { 
            activities: computed(() => store.activities),
            selectedActivity,
            selectActivity
        }; 
    },
}
</script>

<style>
/* Style to indicate clickability */
.activity-item {
    cursor: pointer;
    padding: 10px;
    border-bottom: 1px solid #ccc;
}
.activity-item:hover {
    background-color: #f0f0f0;
}
</style>
