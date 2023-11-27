<template>
    <div class="flex flex-col items-center space-y-6 mt-10">
        <i :class="`fa-brands fa-x-twitter text-6xl ${loading ? 'animate-bounce': ''}`"></i>
        <span class="text-3xl font-bold">Join TTwitter today</span>
        <input v-model="username" type="text" placeholder="username" class="w-96 pl-2  h-14 border border-grayid rounded"/>
        <input v-model="email" type="text" placeholder="email" class="w-96 pl-2  h-14 border border-grayid rounded"/>
        <input v-model="password" type="password" placeholder="password" class="w-96 pl-2  h-14 border border-grayid rounded"/>
        <button v-if="loading" class="w-96 rounded bg-black bg-opacity-50 py-4 text-white">Registering..</button>
        <button v-else class="w-96 hover:bg-opacity-80 rounded bg-black py-4 text-white" @click="onRegister">Register</button>
        <router-link to="/login">
            <button class="text-grayid hover:font-semibold">Have an account already? Login</button>
        </router-link>
    </div> 
</template>


<script>
import {ref} from 'vue'
import {auth, USER_COLLECTION} from '../firebase/index'
import {useRouter} from 'vue-router';
export default {
    setup(){
        const email = ref('')
        const username = ref('')
        const password = ref('')
        const loading = ref(false)
        const router = useRouter()
        const onRegister = async ()=>{
            if(!email.value || !username.value || !password.value){
                alert("Please enter all (email, username, and password).");
                return;
            }
            try{
            loading.value = true;
            const credential = await auth.createUserWithEmailAndPassword(email.value, password.value);
            const user = credential.user;
            const doc = USER_COLLECTION.doc(user.uid)
            await doc.set({
                uid: user.uid,
                email:email.value,
                username:username.value,
                profile_image_ural: 'profile.jpeg',
                num_tweets:0,
                followers:[],
                followings: [],
                created_at: Date.now()
            })
            alert("succesfully registered! Please log in.");
            router.push("/login");
            }catch(e){
                switch(e.code){
                    case "auth/invalid-email":
                        alert("invalid email format!");
                        break;
                    case "auth/weak-password":
                        alert("password should be at least 6 characters!");
                        break;
                }
                alert(e.message);
            }finally{
                loading.value = false;
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