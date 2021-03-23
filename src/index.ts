import * as request from 'Request';
import * as dotenv from 'dotenv';

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

