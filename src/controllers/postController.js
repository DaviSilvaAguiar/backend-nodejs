import { getTodosPosts, criarPost, atualizarPost, deletarPost } from "../models/postsModels.js";
import fs from "fs";
import gerarDescricaoComGemini from "../services/geminiService.js";

// Função para listar os posts
export async function listarPosts(req, res) {
    const posts = await getTodosPosts();
    res.status(200).json(posts);
}

// Função para criar um novo post
export async function postarNovoPost(req, res) {
    const novoPost = req.body;
    try {
        const postCriado = await criarPost(novoPost);
        res.status(200).json(postCriado);
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({ "Erro": "Falha na requisição" });
    }
}

// Função para upload de imagem
export async function uploadImagem(req, res) {
    const novoPost = {
        descricao: "",
        imgUrl: "",
        alt: ""
    };

    try {
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
        
        // Renomeia a imagem com o ID do post
        fs.renameSync(req.file.path, imagemAtualizada);
        
        // Define a URL completa da imagem
        const urlImagem = `http://localhost:3000/uploads/${postCriado.insertedId}.png`;
        
        // Atualiza o post com a URL da imagem
        postCriado.imgUrl = urlImagem;

        res.status(200).json(postCriado);  // Retorna o post com a URL da imagem
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({ "Erro": "Falha na requisição" });
    }
}


// Função para atualizar um post
export async function atualizarNovoPost(req, res) {
    const id = req.params.id;
    const urlImagem = `http://localhost:3000/${id}.png`;

    try {
        const imgBuffer = fs.readFileSync(`uploads/${id}.png`);
        const descricao = await gerarDescricaoComGemini(imgBuffer);

        const post = {
            imgUrl: urlImagem,
            descricao: descricao,
            alt: req.body.alt
        };

        const postCriado = await atualizarPost(id, post);
        res.status(200).json(postCriado);
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({ "Erro": "Falha na requisição" });
    }
}

// Função para deletar a imagem e o post
export async function deletarImagem(req, res) {
    const { id } = req.params;  // Pegando o ID da URL

    try {
        // Primeiro, tenta excluir o post no banco de dados
        const postDeletado = await deletarPost(id);  // Assumindo que você tem uma função no modelo para deletar

        if (!postDeletado) {
            return res.status(404).json({ message: 'Post não encontrado.' });
        }

        // Agora, tenta excluir a imagem do sistema de arquivos
        const caminhoImagem = `uploads/${id}.png`;
        if (fs.existsSync(caminhoImagem)) {
            fs.unlinkSync(caminhoImagem);  // Exclui o arquivo de imagem
        }

        res.status(200).json({ message: 'Imagem e post deletados com sucesso!' });
    } catch (erro) {
        console.error(erro.message);
        res.status(500).json({ message: 'Erro ao deletar a imagem e o post.', error: erro });
    }
}
