const express = require('express');
const bodyParser = require('body-parser');


// Criação da aplicação
const app = express();

// requisição parse urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// requisição parse json
app.use(bodyParser.json())


//Render engine 
var fs = require('fs'); // this engine requires the fs module
app.engine('html', function (filePath, options, callback) { // define the template engine
  fs.readFile(filePath, function (err, content) {
    if (err) return callback(new Error(err));
    var partials = __dirname + '/app/views/partials/';
    fs.readFile(partials+'header.html',function(e, header){
      fs.readFile(partials+'footer.html',function(e, footer){
        return callback(null,header.toString()+content.toString()+footer.toString());
      });
    })
  });
});

app.set('views', __dirname + '/app/views');
app.set('view engine', 'html'); // register the template engine


// define uma rota raiz
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Turtle NodeJS application."});
   // res.render('index');
});


//////TENTATIVAS COM WILLIE
app.get('/lista', (req, res) => {
    res.render('listagem');
});

// Require da rota
require('./app/routes/note.routes.js')(app);

// app trabalhará na porta 3000 e avisa no log da aplicação
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

// Comunicacao com MongoDB
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Conexão com Database e aviso no log da aplicação
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

