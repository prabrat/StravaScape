<template> 
    <div ref="overlay" class="overlay"> 
        <h1> {{ activity.name }}</h1> 
        <p> {{ (activity.distance / 1000).toFixed(2) }} km</p>
        <button @click="downloadImage">Download</button>
    </div>
</template>

<script> 
import html2canvas from "html2canvas"

export default { 
    props: ["activity"], 
    methods: { 
        async downloadImage() { 
            const canvas = await html2canvas(this.$refs.overlay)
            const link = document.createElement("a")
            link.download = "activity.png"
            link.href = canvas.toDataURL()
            link.click()
        },
    },
}
</script>