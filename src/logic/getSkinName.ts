const store = require('../resources/playerStore.json');
const items = require('../resources/items.json');

module.exports = {
    getSkinName: function(storeIDs) {
        var searchField = "id";

        //console.log(storeIDs)

        let results = singleOffers(storeIDs);

        function singleOffers(storeIDs) {
            var results = [];

            for (var i = 1; i < storeIDs.length; i++) {
                var searchVal = storeIDs[i];
                var upperSearchVal = searchVal.toUpperCase();
                for (var j = 0; j < items.SkinLevels.length ; j++) {
                    if(upperSearchVal == items.SkinLevels[j].ID) {
                        results.push(items.SkinLevels[j].Name);
                    }
                    /*if(items.SkinLevels[j].ID == upperSearchVal){
                        results.push(items.SkinLevels[j].Name);
                    }*/
                }
            }
            return results
        }

        function bundleOffers(storeIDs) {

        }

        console.log(results);
        
    }
}