const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/my-first-project'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/my-first-project/'}),
);

app.listen(process.env.PORT || 8080);