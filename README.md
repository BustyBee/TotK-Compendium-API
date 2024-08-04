# TotK-Compendium-API

A very simple read only REST API for the new Zelda game, Tears of the Kingdom.

This Project is still very much a work-in-progress. If the API suddendly stops working, it will probably come back up sooner or later. 
Because of this, **please don't make any huge projects that rely on this API!**

The previous site I used to host this API (Cyclic) sadly doesn't exist anymore so I had to switch to Render. If you want to use this API and there is something wrong with it, feel free to open an issue here and I  will try my best to fix it as soon as I can. Also you can just host it yourself for free on render.

<br>

<a href='https://bustybee.github.io/projects/totkcompendiumapi/'>**Hyrule Compendium Website based on this API**</a>

</br>

## Endpoints

| Endpoint | URL |
| ------ | ------ |
| API Base URL: | https://totk-compendium-api.onrender.com/ |
| List of all entries: | https://totk-compendium-api.onrender.com/all |
| Single entry | https://totk-compendium-api.onrender.com/entry/ [entry name] |
| Example single entry: | https://totk-compendium-api.onrender.com/entry/hateno_cow |


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
Food entries (`category: Cooking`) have an `ingredients` property (string), instead of `locations` (list).


<br>

## Credits

| Thing | Author |
| ------ | ------ |
| Recipies | https://github.com/zealousAnemone/recipes-totk/ |
| Rest | Me |
