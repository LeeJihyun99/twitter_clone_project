<template>
  <div class="flex h-screen container mx-auto relative">
    <!-- side section  -->
    <div class="w-20 xl:w-1/5 flex flex-col pt-5 justify-between border-r border-gray">
      <!-- logo + side menu icons + twitter button -->
      <div class="flex flex-col items-center xl:items-start">
        <!-- twitter logo -->
        <i class="fa-brands fa-x-twitter text-4xl px-3  mb-3"></i>
        <!--side menu icons + twitter button -->
        <div class="flex flex-col items-start">
          <!-- side menu icons -->
          <div class="flex flex-col flex-1 items-start space-y-4">
            <router-link :to="route.path" class="hover:bg-gray px-3 py-2 rounded-full cursor-pointer" v-for="route in routes" :key="route">
              <div v-if="route.meta.isMenu">
                <i :class="route.icon"></i>
                <span class="hidden xl:inline-block ml-5 text-2xl">{{ route.title }}</span>
              </div>
            </router-link>
          </div>
          <!-- twitter button -->
          <div class="w-full flex mt-4 pl-3 ">
            <button class=" bg-twitter hover:bg-twitteronMouse rounded-full w-full h-16">
              <span class="text-white text-xl font-bold hidden xl:block">Post</span>
              <i class="fas fa-plus text-white text-xl font-bold xl:hidden"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- profile button -->
      <div class="xl:px-4 mb-3 relative" @click="showProfileDropdown = !showProfileDropdown">
          <button class="hidden xl:flex hover:bg-gray rounded-full mt-3 px-4 w-full h-14 items-center">
            <img src="http://picsum.photos/50" class="w-10 h-10 rounded-full "/>
            <div class="xl:ml-2 hidden xl:block">
              <div class="font-bold">Jihyun Lee</div>
              <div class="text-grayid text-left">@ljihyun99</div>
            </div>
            <i class="ml-auto fas fa-ellipsis-h fa-fw text-2xl hidden xl:block"></i>
          </button>
          <div class="xl:hidden flex justify-center">
            <img src="http://picsum.photos/50" class="w-10 h-10 rounded-full "/>
          </div>
      </div>
    </div>

    <!-- main section -->
    <div class="flex-1 flex h-screen">
      <router-view />
    </div>
  
    <!--profile dropdown-->
    <div v-if="showProfileDropdown" class="absolute bottom-20 left-8 flex flex-col font-semibold text-lg shadow-lg space-y-4 border border-gray rounded-md">
      <div class="border-b-black hover:bg-gray pl-6 pr-6 pt-4 pb-4 cursor-pointer">Add an existing account</div>
      <div @click ="onLogout" class="pl-6 pr-6 pt-4 pb-4 hover:bg-gray cursor-pointer">Log out @ljihyun99</div>
    </div>
  </div>
</template>

<script >
import {ref, onBeforeMount} from 'vue'
import router from '../router'
import {auth} from '../firebase'
import store from '../store'
export default {
  setup() {
    const routes = ref([])
    const showProfileDropdown = ref(false);
    const onLogout = async ()=> {
      await auth.signOut();
      store.commit("SET_USER", null);
      await router.replace('/login');
    }
    onBeforeMount(()=> {
      routes.value = router.options.routes
    })
    return {routes,showProfileDropdown, onLogout}
   
  }
}

</script>


<style>
[contentEditable=true]:empty:before {
    content: attr(placeholder);
    opacity: 0.6;
  }
</style>
