import {PageQueryRequest, PageQueryResult} from "../service";
import myAxios from "../../request";
import {UserVo} from "@/api/user-service";


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

export interface PictureUploadRequest {
    id?: number;      // 图片ID（用于修改）
    spaceId?: number; // 空间ID（不传默认公共图库）
    url?: string;     // 图片URL（URL方式上传必传）
    picName?: string; // 图片名称
    category?: string;// 图片类别
    tags?: string[];  // 图片标签
    introduction?: string; // 图片简介
}


// 完整图片信息结构（更新核心部分）
interface PictureVo {
    id: number;                  // 图片ID
    url: string;                 // 原图URL
    compressUrl: string;         // 压缩图URL
    thumbnailUrl: string;        // 缩略图URL
    picName: string;             // 图片名称
    introduction: string;        // 图片简介
    tags: string[];              // 标签数组
    category: string;            // 图片分类
    picSize: number;             // 文件体积（单位：字节）
    picWidth: number;            // 图片宽度（像素）
    picHeight: number;           // 图片高度（像素）
    picScale: number;            // 宽高比例
    picFormat: string;           // 格式（如 JPEG/PNG）
    picColor?: string;           // 主色调（可选，如 "#FF0000"）
    userId: number;              // 上传者ID
    createTime: string;          // 创建时间（ISO 8601 格式）
    editTime: string;            // 最后编辑时间
    updateTime: string;          // 最后更新时间
    user: UserVo;           // 上传者详细信息
}

export interface PictureFavoriteRequest {
    id: Number
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
        method: "GET",
        url: `/picture/search/detail/${id}`
    })
}

export const pictureUploadRequestByPost = (file: File, pictureUploadRequest: PictureUploadRequest) => {
    const formData = new FormData();
    formData.append('file', file);

    // 添加图片信息
    if (pictureUploadRequest.picName) {
        formData.append('picName', pictureUploadRequest.picName);
    }

    if (pictureUploadRequest.category) {
        formData.append('category', pictureUploadRequest.category);
    }

    if (pictureUploadRequest.tags && pictureUploadRequest.tags.length > 0) {
        pictureUploadRequest.tags.forEach(tag => {
            formData.append('tags', tag);  // 每个 tag 单独追加
        });
    }

    if (pictureUploadRequest.introduction) {
        formData.append('introduction', pictureUploadRequest.introduction);
    }

    if (pictureUploadRequest.spaceId) {
        formData.append('spaceId', pictureUploadRequest.spaceId.toString());
    }

    return myAxios.request({
        method: "POST",
        url: "/picture/upload",
        data: formData,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

export const doFavoritePictureRequestByPost = (pictureFavoriteRequest:PictureFavoriteRequest) => {
    return myAxios.request({
        method: "POST",
        url: "/favorite/picture/do",
        data:pictureFavoriteRequest
    })
}

export const undoFavoritePictureRequestByPost = (pictureFavoriteRequest:PictureFavoriteRequest) => {
    return myAxios.request({
        method: "POST",
        url: "/favorite/picture/undo",
        data:pictureFavoriteRequest
    })
}