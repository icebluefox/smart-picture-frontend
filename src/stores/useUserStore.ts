import {defineStore} from "pinia";

import {ref} from "vue";
import type {UserVo} from "../api/user-service/index.ts";
import {getUserInfoRequestByGet, logoutUserRequestByPost} from "../api/user-service/index.ts";
import {decrypt, encrypt} from "../utils";


export const useUserStore = defineStore('userStore', () => {
    const LOCAL_STORAGE_KEY = "Collab-Vision-key"
    const loginUser = ref<UserVo>()

    /**
     * 存储当前登录用户信息
     * @param newLoginUser
     */
    const setLoginUser = (newLoginUser: UserVo) => {
        //加密存本地
        const newLoginUserStr = encrypt(JSON.stringify(newLoginUser));
        localStorage.setItem(LOCAL_STORAGE_KEY, newLoginUserStr)
        loginUser.value = newLoginUser
    }

    /**
     * 获取登录用户信息
     */
    const getLoginUser = () => {
        if (!loginUser.value) {
            // 从本地获取用户信息
            const loginUserStr = localStorage.getItem(LOCAL_STORAGE_KEY);
            if (loginUserStr == undefined || loginUserStr === '') {
                // @ts-ignore
                loginUser.value = null
                return loginUser.value;
            }

            const localUserInfo = JSON.parse(decrypt(loginUserStr)) as UserVo
            const currentTime = new Date().getTime();
            // 过期状态
            // @ts-ignore
            if (localUserInfo.expireTime < currentTime) {
                // 删除本地用户信息
                localStorage.removeItem(LOCAL_STORAGE_KEY);
                return null;
            }
            // 未过期 从远程获取用户信息
            fetchLoginUser().then(r => {});
        }

        return loginUser.value;
    }

    /**
     * 远程获取用户信息
     */
    const fetchLoginUser = async () => {
        const res = await getUserInfoRequestByGet()
        // @ts-ignore
        if (res.code == 200 && res.data) {
            loginUser.value = res.data
        }
    }

    /**
     * 判断用户是否登录
     */
    const isLogin = () => {
        getLoginUser()
        return loginUser.value !== undefined && loginUser.value !== null
    }

    /**
     * 退出登录
     */
    const logout = async () => {
        // 当前用户退出登录
        const res = await logoutUserRequestByPost()
        if (res.code == 200) {
            localStorage.removeItem(LOCAL_STORAGE_KEY)
            // @ts-ignore
            loginUser.value = null
        }
    }

    return {setLoginUser, getLoginUser, fetchLoginUser, isLogin, logout}
})