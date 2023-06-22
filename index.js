const express = require('express');
const app = express();
const PORT = 8080;

const data = require('./COMPENDIUM.json');


app.get('/entry/:entryname', (req, res) => {

    const entry = req.params.entryname;

    res.status(200).send(data[entry]);
});

app.get('/all/', (req, res) => {

    res.status(200).send(data);
});


app.listen(
    PORT,
    () => console.log(`API alive on port ${PORT}`)
);
