import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListEtdRoutingModule } from './list-etd-routing.module';
import { ListEtdComponent } from './list-etd/list-etd.component';


@NgModule({
  declarations: [
    ListEtdComponent
  ],
  imports: [
    CommonModule,
    ListEtdRoutingModule
  ]
})
export class ListEtdModule { }
