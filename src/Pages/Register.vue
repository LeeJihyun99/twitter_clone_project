<template>
    <div class="flex flex-col items-center space-y-6 mt-10">
        <i :class="`fa-brands fa-x-twitter text-6xl ${loading ? 'animate-bounce': ''}`"></i>
        <span class="text-3xl font-bold">Join TTwitter today</span>
        <input v-model="email" type="text" placeholder="email" class="w-96 pl-2  h-14 border border-grayid rounded"/>
        <input v-model="username" type="text" placeholder="username" class="w-96 pl-2  h-14 border border-grayid rounded"/>
        <input v-model="password" type="password" placeholder="password" class="w-96 pl-2  h-14 border border-grayid rounded"/>
        <button class="w-96 hover:bg-opacity-80 rounded bg-black py-4 text-white" @click="onRegister">Register</button>
        <router-link to="/login">
            <button class="text-grayid hover:font-semibold">Have an account already? Login</button>
        </router-link>
    </div> 
</template>


<script>
import {ref} from 'vue'
import {auth} from '../firebase/index'
export default {
    setup(){
        const email = ref('')
        const username = ref('')
        const password = ref('')
        const loading = ref(true)
        const onRegister = async ()=>{
            try{
            const credential = await auth.createUserWithEmailAndPassword(email.value, password.value);
            console.log(credential);
            }catch(e){
                console.log("create user with email and password error", e);
                alert(e.message);
            }
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