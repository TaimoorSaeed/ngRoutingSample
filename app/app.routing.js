"use strict";
var router_1 = require('@angular/router');
var prod_component_1 = require('./prod.component');
var prod2_component_1 = require('./prod2.component');
var prod3_component_1 = require('./prod3.component');
var appRoutes = [
    {
        path: 'prod',
        component: prod_component_1.Product
    },
    {
        path: 'prod2',
        component: prod2_component_1.Product2
    },
    {
        path: 'prod3',
        component: prod3_component_1.Product3
    },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map