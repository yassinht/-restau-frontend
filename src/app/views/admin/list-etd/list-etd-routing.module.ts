import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEtdComponent } from './list-etd/list-etd.component';

const routes: Routes = [
  { path: '', component:  ListEtdComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListEtdRoutingModule { }
