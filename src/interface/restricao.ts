import { IObjectRaw } from "./base"

export type IRestricaoRaw = {
    userId: number
    bookId: number
    motivation: string
    status: string
    startDate: Date
    endDate: Date | null
}

export type IRestricao = IRestricaoRaw & IObjectRaw 