import { IObjectRaw } from "./base"

export type ILibraryRaw = {
    name: string
    quantityBooks: number
    rows: number
    shelves: number
}


export type ILibrary = ILibraryRaw & IObjectRaw 