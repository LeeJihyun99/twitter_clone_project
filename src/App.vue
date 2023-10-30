<template>
  <div class="flex h-screen container mx-auto">
    <!-- side section  -->
    <div class="w-20 lg:w-1/5 flex flex-col pt-5 justify-between border-r border-gray">
      <!-- logo + side menu icons + twitter button -->
      <div class="flex flex-col items-center lg:items-start">
        <!-- twitter logo -->
        <i class="fa-brands fa-x-twitter text-4xl px-3  mb-3"></i>
        <!--side menu icons + twitter button -->
        <div class="flex flex-col items-start">
          <!-- side menu icons -->
          <div class="flex flex-col flex-1 items-start space-y-4">
            <div class="hover:bg-gray px-3 py-2 rounded-full cursor-pointer">
              <i class="fa-solid fa-house text-3xl"></i>
              <span class="hidden lg:inline-block ml-5 text-2xl">Home</span>
            </div>
            <div class="hover:bg-gray px-3 py-2 rounded-full cursor-pointer">
              <i class="fa-solid fa-magnifying-glass text-3xl"></i>
              <span class="hidden lg:inline-block ml-5 text-2xl">Explore</span>
            </div>
            <div class="hover:bg-gray px-3 py-2 rounded-full cursor-pointer">
              <i class="fa-regular fa-bell text-3xl"></i>
              <span class="hidden lg:inline-block ml-5 text-2xl">Notification</span>
            </div>
            <div class="hover:bg-gray px-3 py-2 rounded-full cursor-pointer">
              <i class="fa-regular fa-message text-3xl"></i>
              <span class="hidden lg:inline-block ml-5 text-2xl">Messages</span>
            </div>
            <div class="hover:bg-gray px-3 py-2 rounded-full cursor-pointer">
              <i class="fa-regular fa-rectangle-list text-3xl"></i>
              <span class="hidden lg:inline-block ml-5 text-2xl">List</span>
            </div>
            <div class="hover:bg-gray px-3 py-2 rounded-full cursor-pointer">
              <i class="fa-solid fa-users text-3xl"></i>
              <span class="hidden lg:inline-block ml-5 text-2xl">Communities</span>
            </div>
            <div class="hover:bg-gray px-3 py-2 rounded-full cursor-pointer">
              <i class="fa-brands fa-x-twitter text-3xl"></i>
              <span class="hidden lg:inline-block ml-5 text-2xl">Premium</span>
            </div>
            <div class="hover:bg-gray px-3 py-2 rounded-full cursor-pointer">
              <i class="fa-regular fa-user text-3xl"></i>
              <span class="hidden lg:inline-block ml-5 text-2xl">Profile</span>
            </div>
          </div>
          <!-- twitter button -->
          <div class="w-full flex mt-4 pl-3 ">
            <button class=" bg-twitter hover:bg-twitteronMouse rounded-full w-full h-16">
              <span class="text-white text-xl font-bold hidden lg:block">Post</span>
              <i class="fas fa-plus text-white text-xl font-bold lg:hidden"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- profile button -->
      <div class="lg:px-4 mb-3 relative">
          <button class="hidden lg:flex hover:bg-gray rounded-full mt-3 px-4 w-full h-14 items-center">
            <img src="http://picsum.photos/50" class="w-10 h-10 rounded-full "/>
            <div class="lg:ml-2 hidden lg:block">
              <div class="font-bold">Jihyun Lee</div>
              <div class="text-grayid text-left">@ljihyun99</div>
            </div>
            <i class="ml-auto fas fa-ellipsis-h fa-fw text-2xl hidden lg:block"></i>
          </button>
          <div class="lg:hidden flex justify-center">
            <img src="http://picsum.photos/50" class="w-10 h-10 rounded-full "/>
          </div>
      </div>
    </div>

    <div class="flex-1 flex h-screen">
      <Notifications />
      <Trends />
    </div>

  </div>
</template>

<script >
import Trends from './components/Trends.vue';
import Notifications from '../src/Pages/Notifications.vue'
export default {
  components: {Trends, Notifications},
  setup(){},
}
</script>


<style>
[contentEditable=true]:empty:before {
    content: attr(placeholder);
    opacity: 0.6;
  }
</style>
