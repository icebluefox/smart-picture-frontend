export const SERVICE_URL = {
    user_service: {
        user_login: "/auth/login"
    }
}

export interface PageQueryRequest {
    pageNum: Number,
    pageSize: Number,
    sortField: string,
    sort: "descend" | "asc"
}


export interface PageQueryResult<T>{
    data:T[],
    total:Number,
    pages:Number
}

export interface Pagination{
    pageNum:Number,
    pageSize:Number,
    pages:Number,
    total:Number
}