import { IObjectRaw } from "./base"

export type IBookRaw = {
    title: string
    autor: string
    anoPublicacao: Date
    isbn: string
    editora: string
    descricao: string
    categoriaId: number
    libraryId: number
    quantity: number
    status: string
}

export type IBook = IBookRaw & IObjectRaw
