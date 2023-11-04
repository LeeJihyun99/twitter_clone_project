<template>
    <div class="flex flex-col items-center space-y-6 mt-10">
        <i :class="`fa-brands fa-x-twitter text-6xl ${loading ? 'animate-bounce': ''}`"></i>
        <span class="text-3xl font-bold">Join TTwitter today</span>
        <input v-model="email" type="text" placeholder="email" class="w-96 pl-2  h-14 border border-grayid rounded"/>
        <input v-model="username" type="text" placeholder="username" class="w-96 pl-2  h-14 border border-grayid rounded"/>
        <input v-model="password" type="text" placeholder="password" class="w-96 pl-2  h-14 border border-grayid rounded"/>
        <button class="w-96 hover:bg-opacity-80 rounded bg-black py-4 text-white" @click="onRegister">Register</button>
        <router-link to="/login">
            <button class="text-grayid hover:font-semibold">Have an account already? Login</button>
        </router-link>
    </div> 
</template>


<script>
import {ref} from 'vue'
export default {
    setup(){
        const email = ref('')
        const username = ref('')
        const password = ref('')
        const loading = ref(true)
        const onRegister = ()=>{
            console.log(email.value, username.value, password.value)
        }
        return{ 
            email,
            username,
            password,
            onRegister,
            loading
        }
    }
}
</script>

<style></style>