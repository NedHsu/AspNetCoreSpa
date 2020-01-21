import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MapComponent } from './map.component';
import { TaiwanComponent } from "./component/taiwan/taiwan.component";
// import { PageNotFoundComponent } from './';

export const routes: Routes = [
    { path: '', component: MapComponent },
    { path: 'taiwan', component: TaiwanComponent },
    // { path: 'path3', component: Name3Component },
    // { path: 'path4', component: Name4Component },
    // { path: '**', component: PageNotFoundComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MapRoutingModule {}
