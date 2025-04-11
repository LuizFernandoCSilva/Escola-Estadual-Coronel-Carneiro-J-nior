import { IObjectRaw } from "./base"

export type INotificationRaw = {
    userId: number
    message: string
    type: string
    status: string

}

export type INotification = INotificationRaw & IObjectRaw  
