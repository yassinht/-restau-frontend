import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuEnsgnComponent } from './menu-ensgn/menu-ensgn.component';

const routes: Routes = [
  { path: '', component: MenuEnsgnComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuEnsgnRoutingModule { }
