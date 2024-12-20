import express from "express";
import routes from "./src/routes/postsRoutes.js";

// const STRING_CONEXAO = 'mongodb+srv://danielfrogel:4EyJCAB85zbux56e@cluster0.ddeij.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// const conexao = await conectarAoBanco(STRING_CONEXAO)

/*
const posts = [
    {
        id: 1,        
        descricao: 'Uma foto teste',
        imagem: 'https://placecats.com/millie/300/150'
    },
    {
        id: 2,
        descricao: 'Paisagem incrível',
        imagem: 'https://source.unsplash.com/random/300x200'
    },
    {
        id: 3,
        descricao: 'Comida deliciosa',
        imagem: 'https://picsum.photos/id/237/300/200'
    },
    {
        id: 4,
        descricao: 'Cachorro fofo',
        imagem: 'https://place.dog/300/200'
    }
]; */

const app = express();
app.use(express.static("uploads"))
routes(app);

app.listen(3000, () => {
    console.log('Servidor executando...');
});

// Banco de Dados
// User: danielfrogel
// Senha: 4EyJCAB85zbux56e
// Link de Conexão:
// mongodb+srv://danielfrogel:4EyJCAB85zbux56e@cluster0.ddeij.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0