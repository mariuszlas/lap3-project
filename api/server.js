const express = require('express');
const cors = require('cors');
const router = require('./routes/router.js');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);

app.get('/', (req, res) => {
    res.json({ msg: 'hello world' });
});

module.exports = app;
