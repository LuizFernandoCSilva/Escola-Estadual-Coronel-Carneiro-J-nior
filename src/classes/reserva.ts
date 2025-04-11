import { IReserva } from "../interface/reserva";
import { ObjectRaw } from "./objectRaw";

export class Reserva extends ObjectRaw implements IReserva {
    userId: number
    bookId: number
    status: string
    startDate: Date

    constructor(reserva: IReserva) {
        super(reserva);
        this.userId = reserva.userId;
        this.bookId = reserva.bookId;
        this.status = reserva.status;
        this.startDate = reserva.startDate;
    }
}