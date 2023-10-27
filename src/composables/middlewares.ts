import { onBeforeMount } from 'vue';
import { useRouter}  from 'vue-router';

export function useMiddleware(isSignIn: undefined | boolean) {
    const router = useRouter()
    onBeforeMount(() => {
        if(!isSignIn) {
            console.log(isSignIn);
            router.push(import.meta.env.VITE_PUBLIC_SIGN_IN_URL)
        }
        
        console.log(isSignIn);
    })
}