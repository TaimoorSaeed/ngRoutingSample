import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';
import { Product} from './prod.component';
import { Product2} from './prod2.component';
import { Product3} from './prod3.component';


const appRoutes: Routes = [
    {
        path: 'prod',
        component: Product
    },
    {
        path: 'prod2',
        component: Product2
    },
    {
        path: 'prod3',
        component: Product3
    },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

