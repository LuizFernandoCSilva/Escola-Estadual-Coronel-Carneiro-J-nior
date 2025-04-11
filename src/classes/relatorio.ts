import { IRelatorio } from "../interface/relatorio";
import { ObjectRaw } from "./objectRaw";

export class Relatorio extends ObjectRaw implements IRelatorio {
    userId: number
    bookId: number
    type: string
    dataGeration: Date

    constructor(relatorio: IRelatorio) {
        super(relatorio);
        this.userId = relatorio.userId;
        this.bookId = relatorio.bookId;
        this.type = relatorio.type;
        this.dataGeration = relatorio.dataGeration;
    }
}