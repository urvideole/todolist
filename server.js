const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const PORT = 3000;

const router = require('./router/index');

app.use(bodyparser.json());

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

app.use('/', router);