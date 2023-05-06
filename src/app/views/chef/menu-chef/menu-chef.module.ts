import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuChefRoutingModule } from './menu-chef-routing.module';
import { MenuChefComponent } from './menu-chef/menu-chef.component';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MenuChefComponent
  ],
  imports: [
    CommonModule,
    MenuChefRoutingModule,ReactiveFormsModule,FormsModule,RouterModule
  ]
})
export class MenuChefModule { }
