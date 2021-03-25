import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore/';

import { Mensaje } from '../clases/mensaje';


@Injectable({
  providedIn: 'root'
})
export class MensajeFireService {

  rutaDeLaColeccion = '/mensajeFire';
  referenciaAlaColeccion: AngularFirestoreCollection<Mensaje>;

  constructor(private bd: AngularFirestore) {
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);

  }


  Crear(mensaje:Mensaje):any
  {
    return this.referenciaAlaColeccion.add({...mensaje});
  }

  ObtenerTodos():AngularFirestoreCollection<Mensaje>
  {
    return this.referenciaAlaColeccion;
  }

  BorrarMensaje(id:any):Promise<void>
  {
   return this.referenciaAlaColeccion.doc(id).delete();

  }

  ModificarMensaje(id:any, datos:any):Promise<void>
  {
   return this.referenciaAlaColeccion.doc(id).update(datos);

  }



}
