const express = require('express')
const app = express()
const port = 3000

//simular um banco de dados
const post = [
    {
        id: 1,
        titulo: 'Primeira Postagem',
        conteudo: 'Este é o conteúdo da primeira postagem'
    },
    {
        id: 2,
        titulo: 'Segunda Postagem',
        conteudo: 'Este é o conteúdo da segunda postagem'
    },
    {
        id: 3,
        titulo: 'Terceira Postagem',
        conteudo: 'Este é o conteúdo da terceira postagem'
    }
];

//rota principal 

app.get('/', (req, res) => {
    res.render('index', {post})
})

//rota para exibir uma postagem individual
app.get('/post/:id', (req, res) => {
    const id = req.params.id
    const post = post.find(post => post.id === parseInt(id))
    res.render('post', {post})
})

//rota para adicionar uma postagem
app.get('/add', (req, res) => {
    res.render('add');
})

//subir servidor
app.listen(port, () =>{
    console.log('Servidor rodando na porta', {port})
})