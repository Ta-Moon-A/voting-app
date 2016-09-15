"use strict";
var router_1 = require('@angular/router');
var heroes_component_1 = require('./heroSample/heroes.component');
var dashboard_component_1 = require('./heroSample/dashboard.component');
var hero_detail_component_1 = require('./heroSample/hero-detail.component');
exports.appRoutes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'heroes', component: heroes_component_1.HeroesComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'detail/:id', component: hero_detail_component_1.HeroDetailComponent },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(exports.appRoutes);
//# sourceMappingURL=app.routing.js.map