import { IObjectRaw } from "./base"

export type IReservaRaw = {
    userId: number
    bookId: number
    status: string
    startDate: Date
}

export type IReserva = IReservaRaw & IObjectRaw 