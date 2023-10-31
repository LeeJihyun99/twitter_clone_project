<template>
    <div class="flex-1 flex">
        <!-- profile -->
        <div class="flex-1 flex flex-col border-r border-gray">
            <!-- title: back icon, name -->
            <div class="flex p-5 space-x-8">
                <button class="text-2xl fa-solid fa-arrow-left hover:bg-gray rounded-full w-10 h-10"></button>
                <div class="flex flex-col">
                    <span class="text-2xl font-bold">Jihyun Lee</span>
                    <span>50 posts</span>
                </div>
            </div>
            <!-- profile image -->
            <div class="h-80 relative flex-none">
                <!-- profile picture -->
                <div class="bg-profilebackground bg-opacity-80 h-3/4">
                    <div class="absolute bottom-1 rounded-full w-40 h-40 ml-4 bg-white">
                        <img src="http://picsum.photos/50" class="p-1 hover:brightness-75 w-40 h-40 rounded-full "/>
                    </div>
                </div>
                <!-- edit profile -->
                <div class="justify-end flex py-2">
                    <button class="text-end rounded-full border text-lg font-semibold border-grayid border-opacity-60 hover:bg-gray p-3 mt-2 mr-2 px-4">Edit Profile</button>
                </div>
                
            </div>
            <!-- profile info -->
            <div class="pl-4 space-y-3">
                <span class="text-2xl font-extrabold">Jihyun Lee</span>
                <span class="text-grayid text-lg">@Jihyun477145</span>
                <div class="text-grayid flex flex-row space-x-2">
                    <i class="fa-regular fa-calendar-days text-lg"></i>
                    <span class="text-lg">Joined</span>
                    <span class="text-lg">October 2023</span>
                </div>
                <div class="flex flex-row space-x-4">
                    <div class="space-x-1">
                       <span class="font-semibold text-lg">300</span>
                        <span class="text-grayid text-lg">Following</span> 
                    </div>
                    <div class="space-x-1">
                        <span class="font-semibold text-lg">100</span>
                        <span class="text-grayid text-lg">Followers</span>
                    </div>
                </div>
            </div>
            <!-- tabs -->
            <div class="flex justify-around h-14 mt-2 text-lg border-b border-gray">
                <button class="hover:bg-gray w-1/5 font-bold border-b-2 border-b-twitter">Posts</button>
                <button class="hover:bg-gray w-1/5">Replies</button>
                <button class="hover:bg-gray w-1/5">Highlights</button>
                <button class="hover:bg-gray w-1/5">Media</button>
                <button class="hover:bg-gray w-1/5">Likes</button>
            </div>
            <!-- Tweets -->
            <div class="overflow-y-auto">
                <Tweets v-for="tweet in 10" :key="tweet"/>
            </div>
            
        </div>
        <!-- Trends -->
        <Trends/>
    </div>>
    
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