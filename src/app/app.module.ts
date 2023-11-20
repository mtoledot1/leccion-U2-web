import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TareasComponent } from './paginas/tareas/tareas.component';
import { ListaTareasComponent } from './paginas/lista-tareas/lista-tareas.component';
import { MenuComponent } from './menu/menu.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { FIREBASE_OPTIONS, FIREBASE_APP_NAME } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    ListaTareasComponent,
    MenuComponent
  ],
  imports: [
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"leccion-u2","appId":"1:656276473174:web:a285323537ffc34e2dc2f7","storageBucket":"leccion-u2.appspot.com","apiKey":"AIzaSyABgUPgAgx3r25wa0rtodrpk88BWEtzaQ8","authDomain":"leccion-u2.firebaseapp.com","messagingSenderId":"656276473174","measurementId":"G-RJCGE7H9N7"})),
  ],
  providers: [
    {provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
