<template>
    <div class="flex flex-col">
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
</template>

<script>
</script>

<style>
</style>