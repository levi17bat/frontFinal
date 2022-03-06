import { Imagem } from "../imagem/imagem.model";

export interface Professor {
    _id?:String,
    nome: String,
    nick: String, 
    senha: String, 
    status: Boolean,
    imagens: Imagem []
}
