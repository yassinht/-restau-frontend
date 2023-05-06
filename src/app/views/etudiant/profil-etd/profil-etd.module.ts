import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilEtdRoutingModule } from './profil-etd-routing.module';
import { ProfilEtdComponent } from './profil-etd/profil-etd.component';


@NgModule({
  declarations: [
    ProfilEtdComponent
  ],
  imports: [
    CommonModule,
    ProfilEtdRoutingModule
  ]
})
export class ProfilEtdModule { }
