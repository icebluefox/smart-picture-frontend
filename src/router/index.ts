import {createRouter, createWebHistory} from 'vue-router'
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

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        ...mainRoutes,
        ...otherRoutes
    ]
})

// 添加全局前置守卫，在每次路由切换前重置滚动条位置
router.beforeEach((to, from, next) => {
  // 重置滚动条位置到顶部
  window.scrollTo(0, 0)
  // 继续路由导航
  next()
})

export default router