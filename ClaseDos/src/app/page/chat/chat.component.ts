import { Component, OnInit } from '@angular/core';
import { Mensaje } from '../../clases/mensaje';
import { MensajeFireService } from './../../services/mensaje-fire.service';
import { MensajeRealService } from './../../services/mensaje-real.service';
import { UsuariosService } from './../../services/usuarios.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje: Mensaje;

  constructor(private MiServicio: MensajeFireService, private MiServicioReal: MensajeRealService, private MiServicioUsuario: UsuariosService) { this.mensaje = new Mensaje(); }

  Enviar() {

    this.mensaje.usuario = this.MiServicioUsuario.usuarioVigente;

    this.MiServicio.Crear(this.mensaje).then(() => {

      console.log('se envio el msj FIRE');

    });

    this.MiServicioReal.CrearUno(this.mensaje).then(() => {

      console.log('se envio el msj REAL');

    });




  }



  ngOnInit(): void {
  }

}
