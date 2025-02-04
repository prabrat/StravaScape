<template> 
    <div id="map"></div>
</template>

<script> 
import L from 'leaflet'
improt "leaflet/dist/leaflet.css"

export default{ 
    props: ["polyline"], 
    mounted() { 
        const map = L.map("map").setView([0, 0], 13)
        L.titleLayer("https://{s}.title.openstreetmap.org/{z}/{x}/{y}.png").addTo(map)

        if (this.polyline) { 
            const decodedPolyline = L.Polyline.fromEncoded(this.polyline).addTo(map)
            map.fitBounds(decodedPolyline.getBounds())
        }
    },
}
</script>