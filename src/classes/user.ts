import { IUser } from "../interface/user";
import { ObjectRaw } from "./objectRaw";

export class User extends ObjectRaw implements IUser {
    name: string;
    email: string;
    password: string;
    phone: string;
    type: string;
    status: string;

    constructor(user: IUser) {
        super(user);
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
        this.phone = user.phone;
        this.type = user.type;
        this.status = user.status;
    }
}