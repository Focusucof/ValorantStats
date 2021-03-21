import * as request from 'Request';

var getRankInfo = require('./getRankInfo.js')
var getUserFromID = require('./getUserFromID.js');

let playerID : string = '10a19205-2c9b-5103-a689-ed80299bc19a';
let entitlementToken: string = '';
let authToken : string = '';

getRankInfo.getRankInfo(playerID, entitlementToken, authToken);
getUserFromID.getUserFromID(playerID, entitlementToken, authToken);

