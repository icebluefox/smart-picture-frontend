// @ts-ignore
import axios from 'axios'

export interface ResponseResult<T = unknown> {
    message: string;
    description: string,
    code: number;
    data: T;
}

// 创建 Axios 实例
const myAxios = axios.create({
    baseURL: 'http://1.95.210.136:8088',
    timeout: 60000,
    withCredentials: true,
})

// 全局请求拦截器
myAxios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config
    },
    function (error) {
        // Do something with request error
        // @ts-ignore
        return Promise.reject(error)
    },
)

// 全局响应拦截器
myAxios.interceptors.response.use(
    function (response) {
        const { data } = response
        //未登录
        // if (data.code === 40100) {
            // // 不是获取用户信息的请求，并且用户目前不是已经在用户登录页面，则跳转到登录页面
            // if (
            //     !response.request.responseURL.includes('user/get/login') &&
            //     !window.location.pathname.includes('/user/login')
            // ) {
            //     message.warning('请先登录')
            //     window.location.href = `/user/login?redirect=${window.location.href}`
            // }
        // }
        return response.data
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        // @ts-ignore
        return Promise.reject(error)
    },
)

export default myAxios
