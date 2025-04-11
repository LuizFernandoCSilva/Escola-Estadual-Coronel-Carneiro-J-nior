import { INotification } from "../interface/notification";
import { ObjectRaw } from "./objectRaw";

export class Notification extends ObjectRaw implements INotification {
    userId: number
    message: string
    type: string
    status: string

    constructor(notification: INotification) {
        super(notification);
        this.userId = notification.userId;
        this.message = notification.message;
        this.type = notification.type;
        this.status = notification.status;
    }
}