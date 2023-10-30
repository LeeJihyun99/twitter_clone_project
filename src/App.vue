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

    <div class="flex-1">
      <div class=" flex h-screen">
        <!-- main middle section -->
        <div class="w-2/5 flex-1 border-r border-gray overflow-y-auto no-scrollbar">
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
            <!-- tweeting section -->
            <div class="flex px-3 py-3 border-b border-gray">
              <img src="http://picsum.photos/50" class="hover:brightness-75 w-16 h-16 rounded-full "/>
              <div class="ml-2 flex-1 flex flex-col">
                <div contentEditable="true" placeholder="What's happening?" class="w-full text-2xl focus:outline-none mb-3 resize-none"></div>
                <div class="text-right border-t border-gray">
                  <Button class="bg-twitter hover:bg-twitteronMouse text-white rounded-full mt-2 px-6 py-2 text-xl text-bold">Post</Button> 
              </div>
            </div>
            </div>
            <!-- tweets -->
            <div class="flex flex-col" v-for="tweet in 10">
              <button class="flex hover:bg-lightgray w-full border-b border-gray">
                <img src="http://picsum.photos/50" class=" mx-3 my-3 hover:brightness-75 w-16 h-16 rounded-full "/>
                <div class="flex-1 flex flex-col pt-3 w-full text-start">
                  <!-- profile, id, and more section -->
                  <div class="flex flex-row w-full justify-between">
                    <div class="py-2 text-xl space-x-2">
                      <span class="font-semibold">name</span>
                      <span class="text-grayid">@twitter-id</span>
                      <span class="text-grayid">·</span>
                      <span >1h</span>
                    </div>
                    <div class="px-2 py-2 hover:bg-twitter hover:bg-opacity-20 hover:text-twitter rounded-full mr-3">
                      <i class="fas fa-ellipsis-h fa-fw text-xl"></i>
                    </div>
                  </div>
                  <div class="text-lg">Here you can write description of your tweet and also add some tags as well!</div>
                  <div class="text-lg text-twitteronMouse">#tweet #css #html #coding</div>
                  <div class="mr-8">
                    <img src="http://picsum.photos/50" class=" mx-3 my-3 rounded-md w-full h-80"/>
                  </div>
                  <!-- bottom menu icons(comments, retweet, like, view, bookmark, share) -->
                  <div class="flex flex-row justify-between w-full mb-2">
                    <!-- comment button -->
                    <div class="flex flex-row space-x-2 px-3 py-1 hover:text-twitteronMouse hover:bg-twitter hover:bg-opacity-20 rounded-full">
                      <i class="fa-regular fa-comment text-xl "></i>
                      <div>244</div>
                    </div>
                    <!-- retweet button -->
                    <div class="flex flex-row space-x-2 px-3 py-1 hover:text-retweet hover:bg-retweet hover:bg-opacity-20 rounded-full">
                      <i class="fa-solid fa-retweet text-xl"></i>
                      <div>20</div>
                    </div>
                    <!-- like button -->
                    <div class="flex flex-row space-x-2 px-3 py-1 hover:text-heart hover:bg-heart hover:bg-opacity-20 rounded-full">
                      <i class="fa-regular fa-heart text-xl"></i>
                      <div>200</div>
                    </div>
                    <!-- view button -->
                    <div class="flex flex-row space-x-2 px-3 py-1 hover:text-twitteronMouse hover:bg-twitter hover:bg-opacity-20 rounded-full">
                      <i class="fa-solid fa-chart-column text-xl"></i>
                      <div>2.1k</div>
                    </div>
                    <!-- bookmark and share section -->
                    <div class="flex flex-row space-x-2 mr-3 ">
                      <!-- bookmark button -->
                        <i class="fa-regular fa-bookmark px-3 py-1 hover:text-twitteronMouse text-xl hover:bg-twitter hover:bg-opacity-20 rounded-full"></i>
                        <i class="fa-solid fa-arrow-up-from-bracket px-3 py-1 hover:text-twitteronMouse text-xl hover:bg-twitter hover:bg-opacity-20 rounded-full"></i>
                    </div>
                  </div>
                </div>
              </button>              
            </div>
          </div>
        </div>
        <!-- trend section -->
        <div class="w-2/5 flex hidden lg:block">
          <div class="flex flex-col justify-between space-y-5">
            <!-- search -->
            <div class="relative mr-40 mt-2">
              <input placeholder="Search" type="text" class="focus:ring-1 focus:bg-white h-12 ml-5 pl-14 focus: outline-none rounded-full bg-lightgray w-full "/>
              <i class="fa-solid fa-magnifying-glass absolute left-7 top-2 pl-3  text-xl"></i>
              <!-- <i class="fa-solid fa-circle-xmark absolute right-0 top-3 pr-3 text-xl"></i> -->

            </div>
            <!-- <div class="flex flex-row justify-center rounded-full space-x-4 bg-lightgray ml-5 mr-36 mt-3 py-3">
              <i class="fa-solid fa-magnifying-glass text-gray  mt-0.5 text-xl"></i>
              <input class="border-0 outline-none w-4/6 bg-lightgray" type="text"  placeholder="Search"/>
              <i class="fa-solid fa-circle-xmark mt-0.5 text-xl"></i>
            </div> -->
            <!-- subscribe to premium -->
            <div class="flex flex-col bg-lightgray rounded-lg mr-36 ml-5 space-y-2">
              <span class="text-2xl font-bold px-3 py-3">Subscribe to Premium</span>
              <span class="text-xl px-3 py-3">Subscribe to unlock new features and if eligible, receive a share of ads revenue.</span>
              <div class="px-3 py-3">
                <button class="px-3 py-3 bg-black text-white rounded-full text-left hover:opacity-80">Subscribe</button>
              </div>
            </div>
            
            <!-- trends ranking section -->
            <div class="flex flex-col bg-lightgray rounded-lg mr-36 ml-5 space-y-2">
              <span class="text-2xl font-bold px-3 py-3">Germany trends</span>
              <!-- trends list section -->
              <div class="flex flex-col justify-between space-y-1 hover:bg-grayonMouse hover:bg-opacity-50 w-full py-3" v-for="trend in 10">
                <div class="flex flex-row justify-between ml-3">
                  <div class="text-grayid">
                    <span>1</span>
                    <span>·</span>
                    <span>Bundesliga · Trending</span>
                  </div>
                  <div class="px-2 py-2 hover:bg-twitter hover:bg-opacity-20 hover:text-twitter rounded-full mr-3">
                    <i class="fas fa-ellipsis-h fa-fw text-xl"></i>
                  </div>
                </div>
                <div class="ml-3 text-xl font-semibold">#SGEBVB</div>
                <div class="ml-3 text-grayid">5,237 posts</div>
              </div>
            </div>

            <!-- who to follow -->
            <div class="flex flex-col bg-lightgray rounded-lg mr-36 ml-5 space-y-2">
              <span class="text-2xl font-bold px-3 py-3">Who to follow</span>
              <!-- followers list section -->
              <div class="flex flex-col justify-between">
                <!-- each follower recommendation section -->
                <div class="flex flex-row hover:bg-grayonMouse hover:bg-opacity-50 w-full py-3 justify-between" v-for="follower in 3">
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
      </div>
    </div>

  </div>
</template>

<script >
</script>


<style>
[contentEditable=true]:empty:before {
    content: attr(placeholder);
    opacity: 0.6;
  }
</style>
