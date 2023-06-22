require('dotenv').config()
const axios = require('axios');
const express = require('express');
const app = express();
const PORT = 8080;

let requestNum = 0;

app.set('trust proxy', true)
app.use(cors())

const data = require('./COMPENDIUM.json');


app.get('/entry/:entryname', (req, res) => {

    const entry = req.params.entryname.replace(/ /g,"_").toLowerCase();

    requestNum += 1;
    sendToWebhook(requestNum, req.ip, 'entry/'+entry);
    console.log(`${requestNum} requests since last build | IP ${req.ip} requested /entry/${entry}`)

    res.status(200).send(data[entry]);
});

app.get('/all/', (req, res) => {

    requestNum += 1;
    sendToWebhook(requestNum, req.ip, 'all');
    console.log(`${requestNum} requests since last build | IP ${req.ip} /all`);

    res.status(200).send(data);
});


app.listen(
    PORT,
    () => console.log(`API alive on port ${PORT}`)
);

function sendToWebhook(reqnum,ip, endoint){
    axios.post(process.env.WEBHOOKURL, {
        username: "TotK Compendium API",
        avatar_url: "",
        embeds: [
            {
                "title": `${reqnum} requests since last build`,
                "color": 15258703,
                "fields": [
                    {
                        "name": "Request by",
                        "value": ip,
                        "inline": true
                    },
                    {
                        "name": "Endpoint",
                        "value": endoint,
                        "inline": true
                    }
                ]
            }
        ]
    })
      .catch(function (error) {
        console.log(error.message);
      });
}