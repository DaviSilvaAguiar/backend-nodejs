import express from "express";

const posts = [
    {
      id: 1,
      descricao: "Uma foto teste",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      id: 2,
      descricao: "Gato fazendo yoga",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      id: 3,
      descricao: "Paisagem incrível!",
      imagem: "https://placecats.com/millie/300/150"
    },
  ];

const app = express();
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});