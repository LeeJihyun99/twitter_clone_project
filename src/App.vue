<template>
  <div class="flex h-screen">
    <!-- side section  -->
    <div class="w-1/5 flex flex-col lg:ml-16 pt-5 justify-between border-r border-gray">
      <!-- logo + side menu icons + twitter button -->
      <div class="flex flex-col items-center lg:items-start">
        <!-- twitter logo -->
        <i class="fa-brands fa-x-twitter text-4xl lg:ml-10 mb-3"></i>
        <!--side menu icons + twitter button -->
        <div class="flex flex-col items-start">
          <!-- side menu icons -->
          <div class="flex flex-col flex-1 items-start lg:ml-10 space-y-4">
            <div class="hover:bg-gray px-4 py-2 rounded-full">
              <i class="fa-solid fa-house text-3xl"></i>
              <span class="hidden lg:inline-block ml-5 text-2xl">Home</span>
            </div>
            <div class="hover:bg-gray px-4 py-2 rounded-full">
              <i class="fa-solid fa-magnifying-glass text-3xl"></i>
              <span class="hidden lg:inline-block ml-5 text-2xl">Explore</span>
            </div>
            <div class="hover:bg-gray px-4 py-2 rounded-full">
              <i class="fa-regular fa-bell text-3xl"></i>
              <span class="hidden lg:inline-block ml-5 text-2xl">Notification</span>
            </div>
            <div class="hover:bg-gray px-4 py-2 rounded-full">
              <i class="fa-regular fa-message text-3xl"></i>
              <span class="hidden lg:inline-block ml-5 text-2xl">Messages</span>
            </div>
            <div class="hover:bg-gray px-4 py-2 rounded-full">
              <i class="fa-regular fa-rectangle-list text-3xl"></i>
              <span class="hidden lg:inline-block ml-5 text-2xl">List</span>
            </div>
            <div class="hover:bg-gray px-4 py-2 rounded-full">
              <i class="fa-solid fa-users text-3xl"></i>
              <span class="hidden lg:inline-block ml-5 text-2xl">Communities</span>
            </div>
            <div class="hover:bg-gray px-4 py-2 rounded-full">
              <i class="fa-brands fa-x-twitter text-3xl"></i>
              <span class="hidden lg:inline-block ml-5 text-2xl">Premium</span>
            </div>
            <div class="hover:bg-gray px-4 py-2 rounded-full">
              <i class="fa-regular fa-user text-3xl"></i>
              <span class="hidden lg:inline-block ml-5 text-2xl">Profile</span>
            </div>
          </div>
          <!-- twitter button -->
          <div class="w-full flex lg:ml-10 mt-4">
            <button class=" bg-twitter hover:bg-twitteronMouse rounded-full w-full h-16">
              <span class="text-white text-xl font-bold hidden lg:block">Post</span>
              <i class="fas fa-plus text-white text-xl font-bold lg:hidden"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- profile button -->
      <div class="lg:pr-3 lg:ml-10 mb-3 relative">
          <button class="hidden lg:flex hover:bg-gray rounded-full mt-3 px-2 w-full h-12 items-center">
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

    <!-- main middle section -->
    <div class="flex-1">
      <div class="flex h-screen">
        <div class="flex-1 border-r border-gray">
          <div class="flex flex-col">
            <!-- top row -->
            <div class="flex flex-row border-b border-gray h-16">
              <button class="hover:bg-gray w-5/12 text-xl text-center">For you</button>
              <button class="hover:bg-gray w-5/12 text-xl text-center">Following</button>
              <div class="w-2/12 flex justify-end my-2">
                <button class=" hover:bg-gray rounded-full py-0 px-3 text-xl">
                  <i class="fa-solid fa-gear"></i>
                </button>
              </div>
            </div>
            <!-- write post section -->
            <div class="flex px-3 py-3 border-b border-gray">
              <img src="http://picsum.photos/50" class="w-16 h-16 rounded-full "/>
              <div class="ml-2 flex-1 flex flex-col">
                <textarea placeholder="What's happening?" class="w-full text-lg font-bold focus:outline-none mb-3 resize-none"></textarea>
                <div class="text-right border-t border-gray">
                  <Button class="bg-twitter text-white font-bold rounded-full mt-2 px-4 py-2">Post</Button> 
              </div>
            </div>
            </div>
            <div>posts</div>
          </div>
        </div>
      </div>
    </div>
    <!-- side section -->
    <div class="flex-1 hidden lg:block">side bar</div>
  </div>
</template>

<script >
</script>


<style>
</style>
