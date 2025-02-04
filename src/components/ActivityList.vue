<template> 
    <div> 
        <h2>Your Activites</h2>
        <ul> 
            <li v-for="activity in activities" :key="activity.id"> 
                {{  activity.name }} - {{ (activity.distance / 1000).toFixed(2) }} km 
            </li>
        </ul>
    </div>
</template>

<script>
import { useActivityStore } from '../store/activities'
import { onMounted } from 'vue'

export default {
    setup() {
        const store = useActivityStore();
        onMounted(() => {
            store.fetchActivities(); 
        });

        return { activities: store.activities }; 
    },
}
</script>
