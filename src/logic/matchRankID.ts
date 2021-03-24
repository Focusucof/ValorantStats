const playerMMR = require('../resources/getRankInfo.json');
const rankInfo = require('../rankInfo.json');

module.exports = {
    matchRankID: function() {
        let currentMMR : number = playerMMR.Matches[0].RankedRatingAfterUpdate;
        let currentRankID : number = playerMMR.Matches[0].TierAfterUpdate;
        let currentRank: string = getRankFromID(currentRankID);

        //console.log('Curent ELO: ', currentMMR);
        //console.log('Current Rank ID: ', currentRankID);
        //console.log('Current Rank Name: ', currentRank);

        let MMR = [];
        MMR.push(currentMMR);        
        MMR.push(currentRankID);    
        MMR.push(currentRank);
        
        return MMR;
    }
}

function getRankFromID(currentRankID) {

    let currentRank : string = rankInfo.Ranks[currentRankID]
    return currentRank;

}