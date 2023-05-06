import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesReservesRoutingModule } from './mes-reserves-routing.module';
import { MesReservesComponent } from './mes-reserves/mes-reserves.component';


@NgModule({
  declarations: [
    MesReservesComponent
  ],
  imports: [
    CommonModule,
    MesReservesRoutingModule
  ]
})
export class MesReservesModule { }
