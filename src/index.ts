import * as request from 'request';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as sleep from 'sleep';

function getRequests() {
    
    const getRankInfo = require('./requests/getRankInfo.js');
    const getUserFromID = require('./requests/getUserFromID.js');
    const getPlayerStore = require('./requests/getPlayerStore.js');
    const getItemID = require('./requests/getItemID.js');

    dotenv.config();

    let playerID : string = '10a19205-2c9b-5103-a689-ed80299bc19a';
    let entitlementToken: string = `${process.env.entitlementToken}`;
    let authToken : string = `${process.env.authToken}`;
    let clientVersion : string = 'release-02.05-shipping-4-533692';

    getRankInfo.getRankInfo(playerID, entitlementToken, authToken);
    getUserFromID.getUserFromID(playerID, entitlementToken, authToken);
    getPlayerStore.getPlayerStore(playerID, entitlementToken, authToken);
    getItemID.getItemID(playerID, entitlementToken, authToken, clientVersion);

    //avoid race condition by waiting for info to be written to file
    setTimeout(parseInfo, 1500);

}

function parseInfo() {

    //comment everthing after
    const parseRank = require('./logic/parseRank.js')

    let rank = parseRank.parseRank();

    let currentMMR : number = rank[0];
    let currentRankID : number = rank[1];
    let currentRank: string = rank[2];

    console.log('Curent ELO: ', currentMMR);
    console.log('Current Rank ID: ', currentRankID);
    console.log('Current Rank Name: ', currentRank);

    const parseUser = require('./logic/parseUser.js');

    let user = parseUser.parseUser();

    let name : string = user[0];
    let tag : string = user[1];
    let gameName : string = user[2];

    console.log('In Game Name: ', gameName);

    const parseStore = require('./logic/parsePlayerStore.js');
    let storeIDs = parseStore.parseStore();

    const getSkinName = require('./logic/getSkinName.js');
    let skinNames = getSkinName.getSkinName(storeIDs);

    let bundleOffer = skinNames[0];
    let singleOffer1 = skinNames[1];
    let singleOffer2 = skinNames[2];
    let singleOffer3 = skinNames[3];   
    let singleOffer4 = skinNames[4];
    
    console.log(bundleOffer);
    console.log(singleOffer1);    
    console.log(singleOffer2);
    console.log(singleOffer3);
    console.log(singleOffer4);

}

getRequests();
