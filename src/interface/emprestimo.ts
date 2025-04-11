import { IObjectRaw } from "./base"

export type IEmprestimoRaw = {
    userId: number
    bookId: number
    libraryId: number
    status: string
    startDate: Date
    endDate: Date
    returnDate: Date | null
}

export type IEmprestimo = IEmprestimoRaw & IObjectRaw 