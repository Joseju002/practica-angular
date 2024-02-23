const express = require('express');
const app = express();
const path = require('path');

const port = 3000;

app.use(express.static(path.join(__dirname, '../client/dist/proyecto-angular/browser')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/client/proyecto-angular/browser/index.html'));
});

app.listen(port, () => {
    console.log(`Servidor funcionando en ${port}`);
})