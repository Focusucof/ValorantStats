import * as request from 'request';
import * as fs from 'fs';
var rankInfo = require('../rankInfo.json')

module.exports = {
    getRankInfo: function (playerID, entitlementToken, authToken) {
        
        var options = {
            'method': 'GET',
            'url': 'https://pd.na.a.pvp.net/mmr/v1/players/' + playerID + '/competitiveupdates',
            'headers': {
                'X-Riot-Entitlements-JWT': entitlementToken,
                'X-Riot-ClientPlatform': 'ew0KCSJwbGF0Zm9ybVR5cGUiOiAiUEMiLA0KCSJwbGF0Zm9ybU9TIjogIldpbmRvd3MiLA0KCSJwbGF0Zm9ybU9TVmVyc2lvbiI6ICIxMC4wLjE5MDQyLjEuMjU2LjY0Yml0IiwNCgkicGxhdGZvcm1DaGlwc2V0IjogIlVua25vd24iDQp9',
                'Authorization': 'Bearer ' + authToken,
            }
        };

        request(options, function (error, response) {
            if(error) {
                console.log(error);
            }
            
            fs.writeFile('builds/resources/getRankInfo.json', response.body, function(err) {
                if(err) {
                    console.log(err);
                }
            });
            //getMMR(response);
        });
    }
}

function getMMR(response) {

    let json = JSON.parse(response.body)
    
    let currentMMR : number = json.Matches[0].RankedRatingAfterUpdate;
    let currentRankID : number = json.Matches[0].TierAfterUpdate;
    let currentRank: string = getRankFromID(currentRankID);

    //console.log(JSON.parse(response.body));
    console.log('Curent ELO: ', currentMMR);
    console.log('Current Rank ID: ', currentRankID);
    console.log('Current Rank Name: ', currentRank);

}

function getRankFromID(currentRankID) {

    let currentRank : string = rankInfo.Ranks[currentRankID]
    return currentRank;

}
    
