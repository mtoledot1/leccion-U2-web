import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  paginas = [
    {title: 'Tareas', path: 'paginas/tareas'},
    {title: 'Listado de Tareas', path: 'paginas/lista-tareas'},
  ];
}
