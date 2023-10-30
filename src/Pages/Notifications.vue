<template>
    <div class="flex-1 border-r border-gray overflow-y-auto no-scrollbar">
        <div class="flex flex-col">
            <!-- title section -->
            <div class="flex flex-row justify-between mt-4 mb-4 items-center">
                <div class="text-2xl font-bold ml-4 cursor-pointer">Notifications</div>
                <i class="cursor-pointer fa-solid fa-gear text-xl hover:bg-gray hover:bg-opacity-80 rounded-full px-3 py-2 mr-2"></i>
            </div>
            <!-- menus: all, verified, mentions -->
            <div class="flex flex-row text-xl h-16 text-center">
                <div class="hover:bg-gray hover:bg-opacity-80 w-1/3 pt-4 hover:border-b-4 hover:border-twitteronMouse cursor-pointer">All</div>
                <div class="hover:bg-gray hover:bg-opacity-80 w-1/3 pt-4 hover:border-b-4 hover:border-twitteronMouse cursor-pointer">Verified</div>
                <div class="hover:bg-gray hover:bg-opacity-80 w-1/3 pt-4 hover:border-b-4 hover:border-twitteronMouse cursor-pointer">Mentions</div>
            </div>
            <!-- notifications list -->
            <div class="flex flex col" v-for="notification in 20">
                <div class="flex border-b border-gray mx-4 space-x-4 px-2 py-2 hover:bg-gray cursor-pointer">
                    <img src="http://picsum.photos/50" class="hover:brightness-75 w-14 h-14 rounded-full "/>
                    <span class="font-semibold">There was a login to your account @JihyunLee477145 from a new device on 2023년 10월 29일. Review it now.</span>
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