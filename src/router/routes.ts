import HomePage from "../pages/HomePage/HomePage.vue";
import PicturePage from "../pages/PicturePage/PicturePage.vue";
import PictureDetailPage from "../pages/PicturePage/view/PictureDetailPage.vue";
import UserLoginPage from "../pages/UserLoginPage/UserLoginPage.vue";
import UserRegisterPage from "../pages/UserRegisterPage/UserRegisterPage.vue";
import MessageDemo from "../pages/MessageDemo.vue";
import NotFoundPage from "../pages/NotFound/NotFoundPage.vue";
import SpacePage from "../pages/SpacePage/SpacePage.vue";

export const mainRoutes = [
    {
        path: '/',
        name: '首页',
        component: HomePage,
    },
    {
        path: '/picture',
        name: '素材库',
        component: PicturePage,
        children: [
            {
                path: '',
                name: '图片瀑布流',
                component: () => import('../pages/PicturePage/view/WaterfallPage.vue')
            },
            {
                path: 'detail/:id',
                name: '图片详情',
                component: PictureDetailPage
            },
            {
                path: 'upload',
                name: '上传图片',
                component: () => import('../pages/PicturePage/view/PictureUploadPage.vue'),
                meta:{
                    requireLogin:true
                }
            }
        ]
    },
    {
        path: "/space",
        name: "空间",
        component: SpacePage
    }

]


export const otherRoutes = [
    {
        path: '/login',
        name: 'userLogin',
        component: UserLoginPage
    },
    {
        path: '/register',
        name: 'userRegister',
        component: UserRegisterPage
    },
    {
        path: '/message-demo',
        name: 'messageDemo',
        component: MessageDemo
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFoundPage
    }
]