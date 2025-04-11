import { IObjectRaw } from "../interface/base";

export class ObjectRaw implements IObjectRaw {
    id: number;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    deactivatedAt: Date | null;

    constructor(commonFields: IObjectRaw) {
        this.id = commonFields.id;
        this.createdAt = commonFields.createdAt;
        this.updatedAt = commonFields.updatedAt;
        this.deletedAt = commonFields.deletedAt;
        this.deactivatedAt = commonFields.deactivatedAt;
    }
}
