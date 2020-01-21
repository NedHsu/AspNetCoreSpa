import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { MatCardModule } from '@angular/material/card';
import { VoteComponent } from './vote.component';
import { RouterModule } from '@angular/router';
import { routes } from './vote.routes';



@NgModule({
  declarations: [
    VoteComponent,
  ],
  imports: [
    SharedModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ]
})
export class VoteModule { }
