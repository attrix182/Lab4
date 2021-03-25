import { Component, OnInit } from '@angular/core';
import {UsuariosService} from '../../services/usuarios.service'

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: string = 'nadie';

  constructor(private MiServicio:UsuariosService) 
  {
    console.log(MiServicio.usuarioVigente);

  }

  Guardar() {

    this.MiServicio.usuarioVigente = this.usuario;

  }

  ngOnInit(): void {
    this.usuario = this.MiServicio.usuarioVigente;
  }

}
