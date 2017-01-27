"use strict";
var router_1 = require('@angular/router');
var poll_item_component_1 = require("./votingApp/components/poll.item.component");
var home_component_1 = require("./votingApp/components/home.component");
exports.appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'new-poll', component: poll_item_component_1.NewPollDetailComponent },
    { path: 'home', component: home_component_1.HomeComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(exports.appRoutes);
//# sourceMappingURL=app.routing.js.map