require('dotenv').config()
const axios = require('axios');
const cors = require('cors')
const express = require('express');
const app = express();
const PORT = 8080;

// DEBUG
console.log(process.env)

app.set('trust proxy', true)
app.use(cors())

const data = require('./data/COMPENDIUM.json')
const allList = require('./data/entries_sorted.json')


app.get('/entry/:entryname', (req, res) => {

    var entry = req.params.entryname.replace(/ /g,"_").toLowerCase();

    if (entry === process.env.SECRET_ENTRY) return res.status(200).send({name: process.env.SECRET_ENTRYTITLE, description: process.env.SECRET_ENTRYDESC, image: process.env.SECRET_ENTRYIMG, locations: [process.env.SECRET_ENTRYLOCATIONS_A, process.env.SECRET_ENTRYLOCATIONS_B]});

    sendToWebhook(req.ip, '/entry/'+entry);
    console.log(`New request | IP ${req.ip.split('.')[0] + '.' + req.ip.split('.')[1] + '.[...]'} /all`);

    if (data[entry] === undefined){
        return res.status(400).send({message: "Entry not found"}); 
    }

    res.status(200).send(data[entry]);
});

app.get('/all', (req, res) => {

    sendToWebhook(req.ip, '/all');
    console.log(`New request | IP ${req.ip.split('.')[0] + '.' + req.ip.split('.')[1] + '.[...]'} /all`);

    res.status(200).send(allList);
});


app.listen(
    PORT,
    () => console.log(`API alive on port ${PORT}`)
);

async function sendToWebhook(ip, endoint){
    // let apiRes = {};
    // let success = true

    // try{
        
    //     apiRes = (await axios.get(`https://ipinfo.io/${ip}?token=${process.env.IP_TOKEN}`)).data
    // }
    // catch(err){
    //     console.log(err.message)
    //     success = false
    // }
    
    // let ipInfo = `${apiRes.region}/${apiRes.country}`
    // if (success === false) ipInfo = '_unknown_'

    const ipPriv = ip.split('.')[0] + '.' + ip.split('.')[1] + '.[...]'

    axios.post(process.env.WEBHOOKURL, {
        username: "TotK Compendium API",
        avatar_url: "",
        embeds: [
            {
                "title": "New request",
                "color": 15258703,
                "fields": [
                    {
                        "name": "Endpoint",
                        "value": endoint,
                        "inline": true
                    },
                    {
                        "name": "IP",
                        "value": ipPriv,
                        "inline": true
                    } // ,
                    // {
                    //     "name": "Info",
                    //     "value": ipInfo,
                    //     "inline": true
                    // }
                ]
            }
        ]
    })
      .catch(function (error) {
        console.log(error.message);
      });
}
