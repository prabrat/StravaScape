<template> 
    <div ref="overlay" class="overlay" :style="backgroundStyle"> 
        <h1>{{ activity.name }}</h1> 
        <p v-if="selectedStats.includes('Distance')">{{ formatDistance(activity) }}</p>
        <p v-if="selectedStats.includes('Moving Time')">Moving Time: {{ formatTime(activity.moving_time) }}</p>
        <p v-if="selectedStats.includes('Elapsed Time')">Elapsed Time: {{ formatTime(activity.elapsed_time) }}</p>
        <p v-if="selectedStats.includes('Heart Rate')">Avg HR: {{ activity.average_heartrate }} bpm</p>
        <p v-if="selectedStats.includes('Calories')">Calories: {{ activity.calories }}</p>
        <button @click="downloadImage">Download</button>
    </div>
</template>

<script> 
import html2canvas from "html2canvas"

export default { 
    props: ["activity", "selectedStats", "backgroundImage"], 

    computed: {
        backgroundStyle() {
            return this.backgroundImage ? { backgroundImage: `url(${this.backgroundImage})` } : {};
        }
    },

    methods: { 
        async downloadImage() { 
            const canvas = await html2canvas(this.$refs.overlay)
            const link = document.createElement("a")
            link.download = "activity.png"
            link.href = canvas.toDataURL()
            link.click()
        },
        formatDistance(activity) {
            return activity.distance > 1000 
                ? `${(activity.distance / 1000).toFixed(2)} km`
                : `${activity.distance.toFixed(0)} m`;
        },
        formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            return `${minutes}m ${remainingSeconds}s`;
        }
    },
}
</script>

<style>
.overlay {
    position: relative;
    width: 500px;
    height: 300px;
    padding: 20px;
    color: white;
    text-align: center;
    background-size: cover;
    background-position: center;
}
</style>
