const express = require('express');
const app = express();
const port = 8080;

app.get('/', (request, response) => {
    response.statusCode = 200;
    response.send("Hello world");
})

app.listen(port, () => {})