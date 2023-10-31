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
            <div>
              <Tweets/>
            </div>
          </div>
        </div>
        <!-- trend section -->
        <Trends />
</template>

<script>
import Trends from '../components/Trends.vue';
import Tweets from '../components/Tweet.vue';
export default {
  components: {Trends,Tweets},
  setup(){},
}
</script>

<style>
</style>