import { Routes } from '@angular/router';
import {MyorderhistoryComponent} from './myorderhistory/myorderhistory.component'
import { OpenordersComponent } from './openorders/openorders.component';

export const appRoutes:Routes=[
    {
        path:'route1',
        component:MyorderhistoryComponent
    },
    {
        path:'route2',
        component:OpenordersComponent
    },

];