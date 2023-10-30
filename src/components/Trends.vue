<template>
    <div class="w-2/5 flex hidden lg:block">
          <div class="flex flex-col justify-between space-y-5">
            <!-- search -->
            <div class="relative mr-6 mt-2">
              <input placeholder="Search" type="text" class="focus:ring-1 focus:bg-white h-12 ml-5 pl-14 focus: outline-none rounded-full bg-lightgray w-full "/>
              <i class="fa-solid fa-magnifying-glass absolute left-7 top-2 pl-3  text-xl"></i>
              <!-- <i class="fa-solid fa-circle-xmark absolute right-0 top-3 pr-3 text-xl"></i> -->
            </div>
           
            <!-- subscribe to premium -->
            <div class="flex flex-col bg-lightgray rounded-lg mr-22 ml-5 space-y-2">
              <span class="text-2xl font-bold px-3 py-3">Subscribe to Premium</span>
              <span class="text-xl px-3 py-3">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</span>
              <div class="px-3 py-3">
                <button class="px-3 py-3 bg-black text-white rounded-full text-left hover:opacity-80">Subscribe</button>
              </div>
            </div>
            
            <!-- trends ranking section -->
            <div class="flex flex-col bg-lightgray rounded-lg mr-22 ml-5 space-y-2">
              <span class="text-2xl font-bold px-3 py-3">Germany trends</span>
              <!-- trends list section -->
              <div class="flex flex-col hover:bg-gray hover:bg-opacity-40  w-full py-2" v-for="trend in 5">
                <div class="flex flex-row justify-between ml-3">
                  <div class="text-grayid ">
                    <span>1</span>
                    <span>·</span>
                    <span>Trending</span>
                  </div>
                  <div class=" hover:bg-twitter hover:bg-opacity-20 hover:text-twitter rounded-full mr-3 cursor-pointer">
                    <i class="fas fa-ellipsis-h fa-fw text-xl"></i>
                  </div>
                </div>
                <div class="ml-3 text-xl font-semibold">#SGEBVB</div>
                <div class="ml-3 text-grayid">5,237 posts</div>
              </div>
            </div>

            <!-- who to follow -->
            <div class="flex flex-col bg-lightgray rounded-lg mr-22 ml-5 space-y-2">
              <span class="text-2xl font-bold px-3 py-3">Who to follow</span>
              <!-- followers list section -->
              <div class="flex flex-col justify-between">
                <!-- each follower recommendation section -->
                <div class="flex flex-row hover:bg-gray hover:bg-opacity-40 w-full py-3 justify-between" v-for="follower in 3">
                  <!-- profile picture and name -->
                  <div class="flex flex-row space-x-3 ml-3">
                    <img src="http://picsum.photos/50" class="w-10 h-10 rounded-full "/>
                    <div class="flex flex-col">
                      <span class="text-xl font-semibold">Space X</span>
                      <span>@SpaceX</span>
                    </div>  
                  </div>
                  <!-- follow button -->
                  <div class="mr-2 ">
                    <button class="hover:opacity-80 px-4 py-2 font-bold bg-black text-white rounded-full">Follow</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
    </div>
</template>

<script>
export default{

}
</script>

<style>
</style>