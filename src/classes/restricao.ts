import { IRestricao } from "../interface/restricao";
import { ObjectRaw } from "./objectRaw";

export class Restricao extends ObjectRaw implements IRestricao{
    userId: number
    bookId: number
    motivation: string
    status: string
    startDate: Date
    endDate: Date | null

    constructor(restricao: IRestricao) {
        super(restricao);
        this.userId = restricao.userId;
        this.bookId = restricao.bookId;
        this.motivation = restricao.motivation;
        this.status = restricao.status;
        this.startDate = restricao.startDate;
        this.endDate = restricao.endDate;
    }
}