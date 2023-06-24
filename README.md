# TotK-Compendium-API

A very simple read only REST API for the new Zelda game, Tears of the Kingdom.

This Project is still very much a work-in-progress. If the API suddendly stops working, it will probably come back up sooner or later. 
Because of this, **please don't make any huge projects that rely on this API!**

<br>

<a href='https://bustybee.github.io/projects/totkcompendiumapi/'>**Hyrule Compendium Website based on this API**</a>

</br>

## Endpoints

| Endpoint | URL |
| ------ | ------ |
| API Base URL: | https://totk-compendium.cyclic.app/ |
| List of all entries: | https://totk-compendium.cyclic.app/all |
| Single entry | https://totk-compendium.cyclic.app/entry/ [entry name] |
| Example single entry: | https://totk-compendium.cyclic.app/entry/hateno_cow |


<br>



## Example response
/entry/hateno_cow
```json
{
    "name": "Hateno Cow",
    "description": "Originating in Hateno Village, these cows are kept as livestock primarily for their milk. Their horns are smaller than a water buffalo's, and they're much more docile and therefore easier to raise. Their horns are decorated with bright colors when taken out to pasture.",
    "image": "https://raw.githubusercontent.com/BustyBee/TotK-Compendium-DATA/main/images/Animal_Cow_A_Detail.png",
    "thumbnail": "https://raw.githubusercontent.com/BustyBee/TotK-Compendium-DATA/main/images/Animal_Cow_A_Icon.png",
    "category": "Animal",
    "gamename": "Animal_Cow_A",
    "locations": [
        "Hateno Village",
        "Lurelin Village"
    ]
}
```

<br>
This project was made by me and I have built this from the ground up.
