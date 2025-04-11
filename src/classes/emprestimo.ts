import { IEmprestimo } from "../interface/emprestimo";
import { ObjectRaw } from "./objectRaw";

export class Emprestimo extends ObjectRaw implements IEmprestimo {
    userId: number
    bookId: number
    libraryId: number
    status: string
    startDate: Date
    endDate: Date
    returnDate: Date | null

    constructor(emprestimo: IEmprestimo) {
        super(emprestimo);
        this.userId = emprestimo.userId;
        this.bookId = emprestimo.bookId;
        this.status = emprestimo.status;
        this.libraryId = emprestimo.libraryId;
        this.startDate = emprestimo.startDate;
        this.endDate = emprestimo.endDate;
        this.returnDate = emprestimo.returnDate;
    }
}