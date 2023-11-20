import { Injectable } from '@angular/core';
import { Tarea } from 'src/app/domain/tarea';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class TareasFirestoreService {

  private path = '/tareas';

  tareasRef: AngularFirestoreCollection<any>;

  constructor(private db: AngularFirestore) {
    this.tareasRef = db.collection(this.path);
    this.tareasRef.valueChanges().subscribe(data => {
      console.log(data);
    });
  }

  listar(){
    return this.tareasRef.valueChanges();
  }

  guardar(tarea: Tarea){
    const uid = this.db.createId();
    tarea.uid = uid;
    console.log('tarea: ',tarea);
    return this.tareasRef.doc(uid).set(Object.assign({}, tarea));
  }

  leer(uid: string){
    console.log('uid: ',uid);
    return this.db.doc(this.path+'/'+uid).valueChanges();
  }

}
