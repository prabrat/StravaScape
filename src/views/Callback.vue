<template> 
    <div>Connecting...</div>
</template>


<script setup>
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';
import { useAuthStore } from '../store/auth';

const store = useAuthStore();
const router = useRouter();

onMounted(async () => {
    // Extracts the authorization code from the URL 
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    // Exchanges the authorization code for an access token
    if (code) {
        await store.getAccessToken(code);
        router.push('/');
    }
});
</script>
