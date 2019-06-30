import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import card from './components/card.vue'
import profile from './components/profile.vue'
import mainpage from './components/mainpage.vue'
import VideosPage from './components/VideosPage.vue'
import videoPlay from './components/videoPlay.vue'

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:"/card",
        component: card
    },
    {
        path: "/profile",
        component: profile
    },
    {
    	path: "/",
    	redirect: '/home'
    },
    {
    	path:"/mainpage",
    	component: mainpage
    },
    {
        path:"/VideosPage",
        component: VideosPage,
    },
    {
        path:"/videoPlay/:videoUrl",
        component:videoPlay,
        props:true
    }
]

var router =  new VueRouter({
    routes
})
export default router;