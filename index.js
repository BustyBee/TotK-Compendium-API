const express = require('express');
const app = express();
const PORT = 8080;

app.set('trust proxy', true)

const data = require('./COMPENDIUM.json');


app.get('/entry/:entryname', (req, res) => {

    const entry = req.params.entryname;

    console.log(`User with IP ${req.ip} requested /entry/${entry}`)

    res.status(200).send(data[entry]);
});

app.get('/all/', (req, res) => {

    res.status(200).send(data);
});


app.listen(
    PORT,
    () => console.log(`API alive on port ${PORT}`)
);
