import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { EtudiantLayoutComponent } from './etudiant-layout/etudiant-layout.component';
import { EnsegnLayoutComponent } from './ensegn-layout/ensegn-layout.component';
import { ChefComponent } from './chef/chef.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    EtudiantLayoutComponent,
    EnsegnLayoutComponent,
    ChefComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,RouterModule,ReactiveFormsModule
  ]
})
export class LayoutsModule { }
