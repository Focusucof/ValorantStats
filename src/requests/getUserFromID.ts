import * as request from 'request';

module.exports = {
    getUserFromID: function (playerID, entitlementToken, authToken) {

        var options = {
            'method': 'PUT',
            'url': 'https://pd.NA.a.pvp.net/name-service/v2/players',
            'headers': {
                'X-Riot-Entitlements-JWT': entitlementToken,
                'Authorization': 'Bearer ' + authToken,
                'Content-Type': 'text/plain',
            },
            body: '[\r\n' + '"' + playerID + '"' + '\r\n]'

        };
        request(options, function (error, response) {
            if(error) {
                console.log(error);
            }
            console.log(response.body);
        });
    }
}