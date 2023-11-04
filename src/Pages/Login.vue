<template>
        <div class="flex flex-col items-center space-y-6 mt-10">
        <i :class="`fa-brands fa-x-twitter text-6xl ${loading ? 'animate-bounce': ''}`"></i>
        <span class="text-3xl font-bold">Login</span>
        <input v-model="email" type="text" placeholder="email" class="w-96 pl-2  h-14 border border-grayid rounded"/>
        <input v-model="password" type="text" placeholder="password" class="w-96 pl-2  h-14 border border-grayid rounded"/>
        <button class="w-96 hover:bg-opacity-80 rounded bg-black py-4 text-white" @click="onLogin">Login</button>
        <div class="flex space-x-2">
            <button class="text-grayid hover:font-semibold">Forgot password?</button>
            <span>·</span>
            <router-link to="/register">
                <button class="text-grayid hover:font-semibold">Sign up for X</button>
            </router-link>
        </div>
    </div> 
</template>

<script>
    import {ref} from 'vue'
    export default {
        setup(){
            const email = ref('')
            const password = ref('')
            const loading = ref(true)
            const onLogin = ()=>{
                console.log(email.value, password.value)
            }
            return{ 
                email,
                password,
                onLogin,
                loading
            }
        }
    }   
</script>

<style></style>