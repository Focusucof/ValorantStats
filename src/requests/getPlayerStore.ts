import * as request from 'request';
import * as fs from 'fs';


module.exports = {
    getPlayerStore: function(playerID, entitlementToken, authToken) {
        var options = {
            'method': 'GET',
            'url': 'https://pd.na.a.pvp.net/store/v2/storefront/' + playerID,
            'headers': {
                'X-Riot-Entitlements-JWT': entitlementToken,
                //'X-Riot-ClientPlatform': 'ew0KCSJwbGF0Zm9ybVR5cGUiOiAiUEMiLA0KCSJwbGF0Zm9ybU9TIjogIldpbmRvd3MiLA0KCSJwbGF0Zm9ybU9TVmVyc2lvbiI6ICIxMC4wLjE5MDQyLjEuMjU2LjY0Yml0IiwNCgkicGxhdGZvcm1DaGlwc2V0IjogIlVua25vd24iDQp9',
                'Authorization': 'Bearer ' + authToken,
            }
        };

        request(options, function (error, response) {
            if(error) {
                console.log(error);
            }
            //console.log(JSON.parse(response.body));
            fs.writeFile('builds/resources/playerStore.json', response.body, function(err) {
                if(err) {
                    console.log(err);
                }
            });
        });
    }
}