import { IObjectRaw } from "./base"

export type IRelatorioRaw = {
    userId: number
    bookId: number
    type: string
    dataGeration: Date
}

export type IRelatorio = IRelatorioRaw & IObjectRaw
