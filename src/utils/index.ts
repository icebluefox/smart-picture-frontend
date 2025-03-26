// @ts-ignore
import aes from 'crypto-js/aes'
import enc from 'crypto-js/enc-utf8'
import {saveAs} from "file-saver";
import dayjs from "dayjs";

const KEY = "Collab-Vision"


/**
 * 加密
 * @param message
 */
export const encrypt = (message: string) => {
    return aes.encrypt(message, KEY).toString();
}

/**
 * 解密
 * @param message
 */
export const decrypt = (message: string) => {
    return aes.decrypt(message, KEY).toString(enc)
}

/**
 * 下载图片
 * @param url 图片下载地址
 * @param fileName 要保存为的文件名
 */
export function downloadImage(url?: string, fileName?: string) {
    if (!url) {
        return
    }
    saveAs(url, fileName)
}

/**
 * 时间格式化
 * @param date
 * @param format
 */
export function formatTime(date: Date | string, format: string) {
    return dayjs(date).format(format)
}

/**
 * 格式化文件大小
 * @param size
 */
export function formatSize(size?: number){
    if (!size) return '未知'
    if (size < 1024) return size + ' B'
    if (size < 1024 * 1024) return (size / 1024).toFixed(2) + ' KB'
    return (size / (1024 * 1024)).toFixed(2) + ' MB'
}

/**
 * 将颜色值转换为标准 #RRGGBB 格式
 * @param input
 */
export function toHexColor(input: string) {
    // 去掉 0x 前缀
    const colorValue = input.startsWith('0x') ? input.slice(2) : input

    // 将剩余部分解析为十六进制数，再转成 6 位十六进制字符串
    const hexColor = parseInt(colorValue, 16).toString(16).padStart(6, '0')

    // 返回标准 #RRGGBB 格式
    return `#${hexColor}`
}