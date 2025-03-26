import {PageQueryRequest, PageQueryResult} from "../service";
import myAxios from "../../request";


export interface WaterfallQueryRequest extends PageQueryRequest {
    searchText: string
    tags: string[]
    category: string
}

export interface PicturePagePictureVo {
    id: Number
    url: string
    compressUrl: string
    thumbnailUrl: string
    picName: string
    category: string
    tags: string[]
    author: string
    avatar: string
    /**
     * 当前用户是否点赞
     */
    isFavorite: boolean
}

export interface PictureDetailVo {
    /**
     * 图片id
     */
    id: Number

    /**
     * 原图
     */
    url: string

    /**
     * 压缩图
     */
    compressUrl: string

    /**
     * 分类
     */
    category: string

    /**
     * 简介
     */
    introduction: string

    /**
     * 标签（JSON 数组）
     */
    tags: string[] // 前端使用时需要 JSON.parse() 转换

    /**
     * 图片体积
     */
    picSize: number

    /**
     * 图片宽度
     */
    picWidth: number

    /**
     * 图片高度
     */
    picHeight: number

    /**
     * 图片主色调
     */
    picColor: string

    /**
     * 上传时间
     */
    uploadTime: Date

    /**
     * 当前用户是否点赞
     */
    isFavorite: boolean

    /**
     * 当前用户是否收藏
     */
    isCollect: boolean

    /**
     * 点赞数
     */
    favoriteCount: number

    /**
     * 浏览数
     */
    viewCount: number

    /**
     * 收藏数
     */
    collectCount: number

    /**
     * 下载数
     */
    downloadCount: number

    /**
     * 作者名
     */
    author: string

    /**
     * 作者id
     */
    authorId: number

    /**
     * 作者头像
     */
    avatar: string
}

export const picturePageQueryRequestByPost = (picturePageQueryRequest: WaterfallQueryRequest) => {
    return myAxios.request<PageQueryResult<PicturePagePictureVo>>({
        method: "POST",
        url: "/picture/page/waterfall",
        data: picturePageQueryRequest
    })
}

export const pictureDetailQueryRequestByGet = (id: string) => {
    return myAxios.request<PictureDetailVo>({
        method:"GET",
        url:`/picture/search/detail/${id}`
    })
}