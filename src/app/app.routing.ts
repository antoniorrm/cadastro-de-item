import { ContainerComponent } from './container/container.component';
import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';
import { FormularioComponent } from './formulario/formulario.component';



const APP_ROUTES: Routes =
[
    {path: '', redirectTo: '/mostrar', pathMatch: 'full'},
    {path: 'mostrar', component: ContainerComponent},
    {path: 'cadastro', component: FormularioComponent}
  ];

  @NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
  })
  export class routing {

}

