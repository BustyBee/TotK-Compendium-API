const FileSystem = require('fs')

const data = require('./COMPENDIUM_old.json')

dataNew = {}

for (property in data){
    dataNew[property.toLowerCase()] = data[property]
}

saveJson('dataNew', dataNew)

function saveJson(filename, object){
    FileSystem.writeFile(`${filename}.json`, JSON.stringify(object), (error) => {
    if (error) throw error;
    });
    console.log(`Saved ${filename}.json`)
}