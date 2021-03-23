import * as request from 'request';
import * as fs from 'fs';

module.exports = {
    getItemID: function(playerID, entitlementToken, authToken, clientVersion) {

        var options = {
            'method': 'GET',
            'url': 'https://shared.na.a.pvp.net/content-service/v2/content',
            'headers': {
                'X-Riot-Entitlements-JWT': entitlementToken,
                'X-Riot-ClientVersion': clientVersion,
                'X-Riot-ClientPlatform': 'ew0KCSJwbGF0Zm9ybVR5cGUiOiAiUEMiLA0KCSJwbGF0Zm9ybU9TIjogIldpbmRvd3MiLA0KCSJwbGF0Zm9ybU9TVmVyc2lvbiI6ICIxMC4wLjE5MDQyLjEuMjU2LjY0Yml0IiwNCgkicGxhdGZvcm1DaGlwc2V0IjogIlVua25vd24iDQp9',
                'Authorization': 'Bearer ' + authToken,
                //'Cookie': '__cfduid=d689ccac7b1308094953f3da9b7ff9fc41615996959'
            }
        };

        request(options, function (error, response) {
            if (error) {
                console.log(error);
            }
            //console.log(JSON.parse(response.body));
            fs.writeFile('items.json', response.body, function(err) {
                if(err) {
                  console.log(err);
                } else {
                  console.log("JSON saved to items.json");
                }
            }); 
        });
        
    }
}