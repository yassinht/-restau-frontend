import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './views/shared/auth/auth.component';
import { NotFoundComponent } from './views/shared/not-found/not-found.component';
import { EtudiantLayoutComponent } from './layouts/layouts/etudiant-layout/etudiant-layout.component';
import { EnsegnLayoutComponent } from './layouts/layouts/ensegn-layout/ensegn-layout.component';
import { RegisterComponent } from './views/shared/register/register.component';
import { ChefComponent } from './layouts/layouts/chef/chef.component';
import { AdminLayoutComponent } from './layouts/layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  {path:'',component:AuthComponent},

  {path:'registe',component:RegisterComponent},

  {path:'etudiant',component:EtudiantLayoutComponent,
children:[
  {path:'menu',loadChildren:()=>import('./views/etudiant/menu/menu.module').then(m=>m.MenuModule)},
  {path:'reserve',loadChildren:()=>import('./views/etudiant/mes-reserves/mes-reserves.module').then(m=>m.MesReservesModule)},

]},

{path:'ensegn',component:EnsegnLayoutComponent,
children:[
  {path:'menu',loadChildren:()=>import('./views/ensegn/menu-ensgn/menu-ensgn.module').then(m=>m.MenuEnsgnModule)},

]},

{path:'chef',component:ChefComponent,
children:[
  {path:'menu',loadChildren:()=>import('./views/chef/menu-chef/menu-chef.module').then(m=>m.MenuChefModule)},

]},

{path:'admin',component:AdminLayoutComponent,
children:[
  {path:'listetudiants',loadChildren:()=>import('./views/admin/list-etd/list-etd.module').then(m=>m.ListEtdModule)},

]},

{path: 'notfound', component: NotFoundComponent},
{path: '**', redirectTo: '/notfound'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
