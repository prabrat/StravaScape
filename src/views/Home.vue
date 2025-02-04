<template> 
    <div> 
        <h1>Welcome to StravaScape</h1>
        <p v-if="!authStore.accessToken">Waiting for authentication...</p>
        <AuthButton v-if="!authStore.accessToken" /> 
        <ActivityList v-else /> 
    </div>
</template>

<script> 
import { useAuthStore } from '../store/auth'
import AuthButton from '../components/AuthButton.vue'
import ActivityList from '../components/ActivityList.vue'

export default { 
    components: { AuthButton, ActivityList },
    setup() {
        const authStore = useAuthStore();
        console.log("Auth Store Token:", authStore.accessToken);
        return { authStore };
    },
}
</script>
