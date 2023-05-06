import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuChefComponent } from './menu-chef/menu-chef.component';

const routes: Routes = [
  { path: '', component: MenuChefComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuChefRoutingModule { }
