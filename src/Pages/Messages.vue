<template>
<div class="flex-1 flex h-screen">
    <!-- chat list -->
    <div class="w-2/5 flex-1 border-r border-gray overflow-y-auto no-scrollbar">
        <div class="flex flex-col">
            <!-- title section -->
            <div class="flex flex-row justify-between pl-3 pt-3 pr-3">
                <div class="text-2xl font-semibold">Messages</div>
                <div class="flex flex-row">
                    <div class="space-x-3">
                        <i class="text-xl fa-solid fa-gear hover:bg-gray rounded-full px-2 py-1"></i>
                        <i class="text-xl fa-regular fa-envelope hover:bg-gray rounded-full px-2 py-1"></i>
                    </div>
                </div>
            </div>
            <!-- messages list section -->
            <div class="flex hover:bg-gray cursor-pointer" v-for="message in 15" :key="message">
                <div class="flex px-3 py-3 space-x-3">
                    <img src="http://picsum.photos/50" class="hover:brightness-75 w-14 h-14 rounded-full "/>
                    <div>
                        <div class="flex space-x-2 ">
                            <div class="font-semibold text-lg">jihyun.com</div>
                            <div class="text-grayid">@jihyun</div>
                            <div class="text-grayid">Janurary 29</div>
                        </div>
                        <div class="text-grayid">message</div>
                    </div>
                    
                        
                    
                </div>
            </div>
        </div>
    </div>
    <!-- chat -->
    <div class="w-3/5 border-gray border-r hidden lg:block ">
        <div class="flex flex-col h-screen overflow-y-auto">
            <!-- profile on top  -->
            <div class="flex border-b border-gray justify-between p-3">
                <div class=flex>
                   <img src="http://picsum.photos/50" class="hover:brightness-75 w-14 h-14 rounded-full "/>
                    <div>
                        <div class="flex flex-col pl-2">
                            <div class="text-xl font-semibold">jihyun.com</div> 
                            <div>@jihyun</div>
                        </div>
                    </div> 
                </div>
                <i class="fa-solid fa-circle-info text-4xl pt-2 text-twitter opacity-60"></i>
            
            </div>
            <!-- messager info -->
            <div class="border-b border-gray hover:bg-gray hover:bg-opacity-40">
                <div class="flex flex-col items-center pt-10 pb-4">
                    <div class="flex space-x-2">
                        <span class="font-bold">jihyun.com</span>
                        <span>@jihyun</span>
                    </div>
                    <div class="flex space-x-2">
                        <div class="flex space-x-1">
                            <span class="font-semibold">28</span>
                            <span>Following</span>
                        </div>
                        <div class="flex space-x-1">
                            <span class="font-semibold">7</span>
                            <span>Followers</span>
                        </div>
                    </div>
                    <div class="flex space-x-1">
                        <i class="fa-solid fa-calendar-days pt-1 pr-1"></i>
                        <span>joined:</span>
                        <span>September 2023</span>
                    </div>
                </div>
            </div>
            
            <!-- bubbles: me and opponent -->
            <div class="flex-1" v-for="bubbles in 3">
                <!-- chat bubble: me-->
                <div class="flex flex-col items-end pt-5 pr-6">
                    <div class="px-3 py-2 text-lg bg-twitter text-white rounded-ss-2xl rounded-se-2xl rounded-es-2xl cursor-pointer">What's up?</div>
                    <div>3:45 PM</div>
                </div>  
                <!-- chat bubble: oppenent -->
                <div class="flex flex-col items-start pl-6 pt-3" v-for="bubble in 3">
                    <div class="px-3 py-2 text-lg bg-gray text-black rounded-ss-2xl rounded-se-2xl rounded-ee-2xl cursor-pointer">Hey! I'm sleeping</div>
                    <div>4:00 PM</div>
                </div>
            </div>
            
            <!-- input -->
            <div class="flex flex-row space-x-3 p-4 justify-center items-center sticky">
                <i class="text-2xl text-twitter fa-regular fa-image"></i>
                <i class="text-2xl text-twitter fa-solid fa-icons"></i>
                <input placeholder="Start a new message" type="text" class="text-lg h-10 pl-2 w-full border-2 border-twitter focus:ring-1 focus:outline-none rounded-full"/>
                <div>
                    <button class="rounded-full hover:bg-twitter hover:bg-opacity-80 w-12 h-12 ml-0 bg-twitter bg-opacity-60 text-white font-bold">send</button>
                </div>
            </div>  
           
            
        </div>
        
    </div>
</div>
</template>

<script>
export default {
    
}
</script>

<style>
</style>