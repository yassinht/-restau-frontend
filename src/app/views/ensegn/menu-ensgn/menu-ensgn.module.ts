import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuEnsgnRoutingModule } from './menu-ensgn-routing.module';
import { MenuEnsgnComponent } from './menu-ensgn/menu-ensgn.component';


@NgModule({
  declarations: [
    MenuEnsgnComponent
  ],
  imports: [
    CommonModule,
    MenuEnsgnRoutingModule
  ]
})
export class MenuEnsgnModule { }
