import { ICategoria } from "../interface/categoria";
import { ObjectRaw } from "./objectRaw";

export class Categorical extends ObjectRaw implements ICategoria {
    name: string;
    description: string;

    constructor(categoria: ICategoria) {
        super(categoria);
        this.name = categoria.name;
        this.description = categoria.description;
    }
}