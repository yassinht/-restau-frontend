import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MesReservesComponent } from './mes-reserves/mes-reserves.component';

const routes: Routes = [
  { path: '', component:     MesReservesComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesReservesRoutingModule { }
