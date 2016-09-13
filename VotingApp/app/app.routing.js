"use strict";
var router_1 = require('@angular/router');
var new_voting_item_1 = require('./votingApp/new.voting.item');
exports.appRoutes = [
    { path: '', component: new_voting_item_1.VotingItemComponent },
    { path: 'voting-item', component: new_voting_item_1.VotingItemComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(exports.appRoutes);
//# sourceMappingURL=app.routing.js.map