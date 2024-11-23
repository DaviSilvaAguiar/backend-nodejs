import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosPosts(){
    const db = conexao.db("projeto-backend-nodejs");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    const db = conexao.db("projeto-backend-nodejs");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("projeto-backend-nodejs");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set: novoPost});
}

export async function deletarPost(id) {
    const db = conexao.db("projeto-backend-nodejs");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id);
    
    // Deleta o post com o ID correspondente
    const resultado = await colecao.deleteOne({ _id: new ObjectId(objID) });
    
    return resultado.deletedCount > 0;  // Retorna true se o post foi deletado com sucesso
}