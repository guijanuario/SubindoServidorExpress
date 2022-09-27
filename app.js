const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send('<h1 style="color:red"> Aqui está funcionando a rota "/" </h1>')
});

//Sempre deve ficar no final do arquivo.
app.listen(3000, () => {
    console.log("Servidor rodando no endereço http://localhost:3000")
});