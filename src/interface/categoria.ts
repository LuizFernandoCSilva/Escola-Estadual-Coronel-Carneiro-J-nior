import { IObjectRaw } from "./base"

export type ICategoriaRaw = {
    name: string
    description: string
}

export type ICategoria = ICategoriaRaw & IObjectRaw  