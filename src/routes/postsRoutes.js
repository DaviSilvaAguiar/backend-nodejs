import express from "express";
import multer from "multer";
import cors from "cors";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost, deletarImagem } from "../controllers/postController.js";  // Importando a função de deletar

const corsOption = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ dest: "./uploads", storage });

const routes = (app) => {
    app.use(express.json());
    app.use(cors(corsOption));
    
    // Rota para buscar um post
    app.get("/posts", listarPosts);
    
    // Rota para criar um post
    app.post("/posts", postarNovoPost);
    
    // Rota para upload de imagem
    app.post("/upload", upload.single("imagem"), uploadImagem);
    
    // Rota para atualizar um post
    app.put("/upload/:id", atualizarNovoPost);
    
    // Nova rota para deletar imagem pelo ID
    app.delete("/posts/delete-image/:id", deletarImagem);  // A rota de exclusão
};

export default routes;
