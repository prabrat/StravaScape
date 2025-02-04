<template>
    <div>
        <h1>Welcome to StravaScape</h1>
        <AuthButton v-if="!authStore.accessToken" />
        <ActivityList v-else @activitySelected="setSelectedActivity" />

        <div v-if="selectedActivity">
            <h2>Select Stats to Display</h2>
            <label v-for="stat in availableStats" :key="stat">
                <input type="checkbox" v-model="selectedStats" :value="stat" />
                {{ stat }}
            </label>

            <h2>Upload Background</h2>
            <input type="file" @change="handleImageUpload" />

            <Overlay 
                v-if="selectedActivity" 
                :activity="selectedActivity" 
                :selectedStats="selectedStats"
                :backgroundImage="backgroundImage"
            />
        </div>
    </div>
</template>

<script>
import { useAuthStore } from '../store/auth'
import AuthButton from '../components/AuthButton.vue'
import ActivityList from '../components/ActivityList.vue'
import Overlay from '../components/Overlay.vue'
import { ref } from 'vue'

export default {
    components: { AuthButton, ActivityList, Overlay },
    setup() {
        const authStore = useAuthStore();
        const selectedActivity = ref(null);
        const selectedStats = ref([]);
        const backgroundImage = ref(null);

        const availableStats = [
            "Distance", "Moving Time", "Elapsed Time", "Heart Rate", "Calories"
        ];

        const setSelectedActivity = (activity) => {
            selectedActivity.value = activity;
        };

        const handleImageUpload = (event) => {
            const file = event.target.files[0];
            if (file) {
                backgroundImage.value = URL.createObjectURL(file);
            }
        };

        return { 
            authStore, 
            selectedActivity, 
            selectedStats, 
            backgroundImage,
            availableStats, 
            setSelectedActivity, 
            handleImageUpload 
        };
    }
}
</script>
