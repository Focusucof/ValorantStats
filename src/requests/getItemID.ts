import * as request from 'request';

module.exports = {
    getItemID: function(playerID, entitlementToken, authToken) {
        var options = {
            'method': 'GET',
            'url': 'https://shared.na.a.pvp.net/content-service/v2/content',
            'headers': {
                'X-Riot-Entitlements-JWT': entitlementToken,
                //'X-Riot-ClientPlatform': 'ew0KCSJwbGF0Zm9ybVR5cGUiOiAiUEMiLA0KCSJwbGF0Zm9ybU9TIjogIldpbmRvd3MiLA0KCSJwbGF0Zm9ybU9TVmVyc2lvbiI6ICIxMC4wLjE5MDQyLjEuMjU2LjY0Yml0IiwNCgkicGxhdGZvcm1DaGlwc2V0IjogIlVua25vd24iDQp9',
                'Authorization': 'Bearer ' + authToken,
                'X-Riot-ClientVersion': "release-02.05-shipping-4-533692"
            }
        }

        request(options, function(error, response) {
            if(error) {
                console.log(error);
            }
            console.log(JSON.parse(response.body));
        });
    
    }
}