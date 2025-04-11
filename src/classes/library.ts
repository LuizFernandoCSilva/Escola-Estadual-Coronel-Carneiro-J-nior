import { ILibrary } from "../interface/library";
import { ObjectRaw } from "./objectRaw";

export class Library extends ObjectRaw implements ILibrary{
    name: string
    quantityBooks: number
    rows: number
    shelves: number

    constructor(library: ILibrary) {
        super(library);
        this.name = library.name;
        this.quantityBooks = library.quantityBooks;
        this.rows = library.rows;
        this.shelves = library.shelves;
    }

}