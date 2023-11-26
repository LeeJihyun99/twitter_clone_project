<template>
        <div class="flex flex-col items-center space-y-6 mt-10">
        <i :class="`fa-brands fa-x-twitter text-6xl ${loading ? 'animate-bounce': ''}`"></i>
        <span class="text-3xl font-bold">Login</span>
        <input v-model="email" type="text" placeholder="email" class="w-96 pl-2  h-14 border border-grayid rounded"/>
        <input @keyup.enter = "onLogin" v-model="password" type="password" placeholder="password" class="w-96 pl-2  h-14 border border-grayid rounded"/>
        <button v-if="loading" class="w-96 rounded bg-black py-4 bg-opacity-50 text-white">Logging in..</button>
        <button v-else class="w-96 hover:bg-opacity-80 rounded bg-black py-4 text-white" @click="onLogin">Login</button>
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
    import {ref, onMounted} from 'vue'
    import {USER_COLLECTION, auth} from '../firebase'
    import {useRouter} from 'vue-router'
    import store from '../store'
    export default {
        setup(){
            const email = ref('')
            const password = ref('')
            const loading = ref(false)
            const router = useRouter();
            const onLogin = async ()=>{
                if(!email.value || !password.value){
                alert("Please enter all (email and password).");
                return;
            }
                try{
                    loading.value = true;
                    const {user}= await auth.signInWithEmailAndPassword(email.value, password.value);
                    //get user info
                    const doc = await USER_COLLECTION.doc(user.uid).get();
                    store.commit('SET_USER', doc.data());
                    router.replace("/");
                }catch(e){
                    switch(e.code){
                        case "auth/invalid-email":
                            alert("wrong email format.");
                            break;
                         case "auth/invalid-login-credentials":
                            alert("wrong email or password.");
                            break;
                    }   
                    alert(e.message);
                }finally{
                    loading.value = false;
                }
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