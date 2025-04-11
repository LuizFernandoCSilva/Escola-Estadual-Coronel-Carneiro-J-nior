import { IObjectRaw } from "./base"

export type IUserRaw = {
    name: string
    email: string
    password: string
    phone: string
    type: string
    status: string
}

export type IUser = IUserRaw & IObjectRaw