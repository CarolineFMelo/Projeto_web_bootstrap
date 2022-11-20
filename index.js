const express = require('express');
const path = require('path');

const localhost = '127.1.0.1';
const port = 8080

let app = express();

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/popperjs', express.static(path.join(__dirname, 'node_modules/@popperjs/core/dist/umd')));
app.use('/img', express.static(path.join(__dirname, 'src/img/')));

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    res.sendFile(__dirname + '/views/index.html');
});

app.listen(port, localhost, () => {
    console.log(`Servidor rodando http://${localhost}:${port}`);
});