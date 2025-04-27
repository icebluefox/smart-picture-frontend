import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
// @ts-ignore
import HomePage from "../pages/HomePage/HomePage.vue";
// @ts-ignore
import UserLoginPage from "../pages/UserLoginPage/UserLoginPage.vue";
// @ts-ignore
import UserRegisterPage from "../pages/UserRegisterPage/UserRegisterPage.vue";
// @ts-ignore
import MessageDemo from "../pages/MessageDemo.vue";
// @ts-ignore
import PicturePage from "../pages/PicturePage/PicturePage.vue";
// @ts-ignore
import PictureDetailPage from "../pages/PicturePage/view/PictureDetailPage.vue";
// @ts-ignore
import NotFoundPage from "../pages/NotFound/NotFoundPage.vue";
import {mainRoutes, otherRoutes} from "./routes";
import {useUserStore} from "@/stores/useUserStore";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        ...mainRoutes,
        ...otherRoutes
    ]
})

// 不在这里初始化store
// const userStore = useUserStore()

// 添加全局前置守卫，在每次路由切换前重置滚动条位置
router.beforeEach((to, from, next) => {
    // 重置滚动条位置到顶部
    window.scrollTo(0, 0)
    
    // 获取路由元信息
    const routeMeta = to.meta;
    
    // 检查是否需要登录
    if (routeMeta.requireLogin) {
        // 在路由守卫内部才调用useUserStore
        const userStore = useUserStore();
        if (!userStore.isLogin()) {
            // 将当前要访问的路径作为查询参数，登录后可以重定向回来
            return next({ path: "/login", query: { redirect: to.fullPath } });
        }
    }
    
    // 继续路由导航
    next();
})

export default router