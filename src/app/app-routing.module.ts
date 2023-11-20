import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from 'src/app/menu/menu.component';
import { TareasComponent } from 'src/app/paginas/tareas/tareas.component';
import { ListaTareasComponent } from 'src/app/paginas/lista-tareas/lista-tareas.component';

const routes: Routes = [
  {path: 'paginas/lista-tareas', component: ListaTareasComponent},
  {path: 'paginas/tareas', component: TareasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
