
export type IGetQuery = {
    page?: number
    pageSize?: number
    search?: string
}
export type IGetResponse<IRawData> = {
    results: IRawData[]
    total: number
}
export interface IStatus {
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    deactivatedAt: Date | null
}
export interface IObjectRaw extends IStatus {
    id: number
}   