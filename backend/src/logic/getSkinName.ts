const store = require('../resources/playerStore.json');
const items = require('../resources/items.json');

module.exports = {
    getSkinName: function(storeIDs) {
        var searchField = "id";

        //console.log(storeIDs)

        let singleSkins = singleOffers(storeIDs);

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

        let bundleSkins = bundleOffers(storeIDs[0]);

        function bundleOffers(storeIDs) {
            var results;

            var searchVal = storeIDs;            
            var upperSearchVal = searchVal.toUpperCase();
            for (var i = 0; i < items.StorefrontItems.length; i++) {
                if(upperSearchVal == items.StorefrontItems[i].ID) {
                    results = (items.StorefrontItems[i].Name);
                }
            }
            return results
        }

        let skinNames = [];

        skinNames.push(bundleSkins);
        skinNames.push(singleSkins[0]);
        skinNames.push(singleSkins[1]);
        skinNames.push(singleSkins[2]);
        skinNames.push(singleSkins[3]);

        //console.log(skinNames)
        return skinNames;
    }
}