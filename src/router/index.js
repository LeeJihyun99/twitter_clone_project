import { createRouter, createWebHistory} from 'vue-router';
import Home from '../Pages/Home.vue';
import Notifications from '../Pages/Notifications.vue';
import  Messages  from '../Pages/Messages.vue';
import Profile from '../Pages/Profile.vue';
import Register from '../Pages/Register.vue';
import Login from '../Pages/Login.vue';
import store from '../store'
const routes = [
    {
        path: '/',
        title: 'Home',
        component: Home,
        icon:'fa-solid fa-house text-3xl',
        meta: {isMenu: true, layout: 'DefaultLayout',
        requireAuth:true}
     },
     {
         path: '/',
         title: 'Explore',
         component: Home,
         icon:'fa-regular fa-bell text-3xl',
         meta: {isMenu: true, layout: 'DefaultLayout',
         requireAuth:true}
     },
     { 
        path: '/notifications',
        title: 'notifications',
        component: Notifications,
        icon:'fa-regular fa-bell text-3xl',
        meta: {isMenu: true, layout: 'DefaultLayout',
        requireAuth:true}
     },
     {
        path: '/messages',
        title: 'messages',
        component: Messages,
        icon:'fa-regular fa-message text-3xl',
        meta: {isMenu: true, layout: 'DefaultLayout',
        requireAuth:true},

     },
     {
         path: '/',
         title: 'list',
         component: Home,
         icon:'fa-regular fa-rectangle-list text-3xl',
         meta: {isMenu: true, layout: 'DefaultLayout',
         requireAuth:true},
     },
     {
         path: '/',
         title: 'communities',
         component: Home,
         icon:'fa-solid fa-users text-3xl',
         meta: {isMenu: true, layout: 'DefaultLayout',
         requireAuth:true}
     },
     {
        path: '/profile',
        title: 'Profile',
        component: Profile,
        icon:'fa-regular fa-user text-3xl',
        meta: {isMenu: true, layout: 'DefaultLayout',
        requireAuth:true}
     },
     {
        path: '/register',
        component: Register,
        meta: {isMenu: false, layout: 'EmptyLayout'}
     },
     {
        path: '/login',
        component: Login,
        meta: {isMenu: false, layout: 'EmptyLayout'}
     },
     
]

const router = createRouter({
    history : createWebHistory(),
    routes,
})

router.beforeEach((to,from,next)=>{
   const currentUser = store.state.user;
   const requireAuth = to.matched.some(record => record.meta.requireAuth);
   if(to.fullPath === "/login"){
      window.sessionStorage.clear();
      console.log(window.sessionStorage);
   }
   if(requireAuth && !currentUser) {
      next('/login')
   }else {next();}

})
export default router