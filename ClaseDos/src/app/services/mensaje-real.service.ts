import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database'
import { Mensaje } from '../clases/mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeRealService {

  rutaDeLaColeccion = '/mensajeReal';
  referenciaAlaColeccion: AngularFireList<Mensaje>;

  constructor(private db: AngularFireDatabase) {
    this.referenciaAlaColeccion = db.list(this.rutaDeLaColeccion);
  }

  CrearUno(mensaje: Mensaje): any {

    return this.referenciaAlaColeccion.push(mensaje);

  }

}
