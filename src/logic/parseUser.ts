const user = require('../resources/user.json');


module.exports = {
    parseUser: function() {
        let name : string = user[0].GameName;
        let tag : string = user[0].TagLine;
        let gameName : string = name + ' #' + tag;

        let userInfo = [];

        userInfo.push(name);
        userInfo.push(tag);
        userInfo.push(gameName);

        return userInfo;
    }
}