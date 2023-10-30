<template>
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
        <Trends />
</template>

<script>
import Trends from '../components/Trends.vue';
export default {
  components: {Trends},
  setup(){},
}
</script>

<style>
</style>