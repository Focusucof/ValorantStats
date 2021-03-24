const playerStore = require('../resources/playerStore.json');

module.exports = {
    parseStore: function() {
        let currentBundleID : string = playerStore.FeaturedBundle.Bundle.DataAssetID;
        let item1 : string = playerStore.SkinsPanelLayout.SingleItemOffers[0]        
        let item2 : string = playerStore.SkinsPanelLayout.SingleItemOffers[1]    
        let item3 : string = playerStore.SkinsPanelLayout.SingleItemOffers[2]    
        let item4 : string = playerStore.SkinsPanelLayout.SingleItemOffers[3]
        
        let store = [];

        store.push(currentBundleID);
        store.push(item1);
        store.push(item2);
        store.push(item3);
        store.push(item4);

        return store;
    }
}