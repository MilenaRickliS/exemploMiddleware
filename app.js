const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

//configurar EJS como mecanismo de visualização
app.set('view engine', 'ejs'); // extensão dos arquivos
app.set('views', __dirname + '/views'); //onde estão os arquivos

//configurar o estilo que esta na public
app.use(express.static('public'));

//configurar bodyParser do formulario
app.use(bodyParser.urlencoded({extended: true}));

//simular um banco de dados
const posts = [
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
    res.render('index', {posts})
})

//rota para exibir uma postagem individual
app.get('/post/:id', (req, res) => {
    const id = req.params.id;
    const post = posts.find(post => post.id === parseInt(id));
    res.render('post', {post});
})

//rota para adicionar uma postagem
app.get('/add', (req, res) => {
    res.render('add');
})

// Rota para processar o formulário
app.post('/add', (req, res) => {
    const {titulo, conteudo} = req.body;
    const id = posts.length + 1;
    posts.push({id, titulo, conteudo});
    res.redirect('/'); 
})

//subir servidor
app.listen(port, () =>{
    console.log('Servidor rodando na porta', port)
})