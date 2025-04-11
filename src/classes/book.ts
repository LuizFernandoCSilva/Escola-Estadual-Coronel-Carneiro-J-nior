import { IBook } from "../interface/book";
import { ObjectRaw } from "./objectRaw";

export class Book extends ObjectRaw implements IBook {
    title: string;
    autor: string;
    anoPublicacao: Date;
    isbn: string;
    editora: string;
    descricao: string;
    categoriaId: number;
    libraryId: number;
    quantity: number;
    status: string;
 
    constructor(book: IBook) {
        super(book);
        this.title = book.title;
        this.autor = book.autor;
        this.anoPublicacao = book.anoPublicacao;
        this.isbn = book.isbn;
        this.editora = book.editora;
        this.descricao = book.descricao;
        this.categoriaId = book.categoriaId;
        this.libraryId = book.libraryId;
        this.quantity = book.quantity;
        this.status = book.status;
    }
}