import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { MapComponent } from './map.component';
import { RouterModule } from '@angular/router';
import { routes } from './map.routes';
import { TaiwanComponent } from './component/taiwan/taiwan.component';
import { KinmenComponent } from './kinmen/kinmen.component';


@NgModule({
  declarations: [MapComponent, TaiwanComponent, KinmenComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class MapModule { }
