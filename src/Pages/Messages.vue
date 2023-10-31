<template>
<div class="flex-1 flex h-screen">
    <!-- chat list -->
    <div class="w-2/5 border-r border-gray overflow-y-auto no-scrollbar">
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
    <div class="w-3/5">b</div>
</div>
</template>

<script>
export default {
    
}
</script>

<style>
</style>