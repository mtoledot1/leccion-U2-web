import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TareasFirestoreService } from 'src/app/services/tareas-firestore.service';
import { Tarea } from 'src/app/domain/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {

  tarea: Tarea = new Tarea();

  constructor(private router: Router, private tareasFirestore: TareasFirestoreService) {
    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if(params){
      console.log(params);
      this.tarea = params['tarea'];
    }
  }

  guardarTarea(){
    this.tareasFirestore.guardar(this.tarea);
    this.tarea = new Tarea();
  }

  listarTareas(){
    this.router.navigate(['paginas/lista-tareas']);
  }
}
