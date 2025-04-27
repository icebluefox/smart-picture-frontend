import myAxios from "../../request";

export interface UserLoginRequest {
    username: string
    password: string
}

export interface UserRegisterRequest {
    email: string
    username: string
    password: string
    checkPassword: string
    emailCode: string
}

export interface SendEmailRequest{
    email: string
    emailType:number
}

export interface UserVo {
    id: Number,
    username: string,
    nickname: string,
    email: string,
    avatar: string,
    role: string
}

export const userLoginRequestByPost = (userLoginRequest: UserLoginRequest) => {
    return myAxios.request<UserVo>({
        method: "POST",
        url: "/auth/login",
        data: userLoginRequest
    })
}

export const userRegisterRequestByPost = (userRegisterRequest: UserRegisterRequest) => {
    return myAxios.request({
        method:"POST",
        url:"/auth/register",
        data:userRegisterRequest
    })
}

export const getUserInfoRequestByGet = () => {
    return myAxios.request<UserVo>({
        method: "GET",
        url: "/auth/info"
    })
}

export const logoutUserRequestByPost = () => {
    return myAxios.request({
        method: "POST",
        url: "/auth/logout"
    })

}

export const sendEmailCodeRequestByPost = (sendEmailRequest: SendEmailRequest) => {
    return myAxios.request({
        method: "POST",
        url: "/auth/email",
        data: sendEmailRequest
    })
}
