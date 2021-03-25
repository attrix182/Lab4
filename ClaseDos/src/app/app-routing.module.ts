import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './page/chat/chat.component';
import { ListadoComponent } from './page/listado/listado.component';
import { UsuarioComponent } from './page/usuario/usuario.component';


const routes: Routes = [
  { path: 'charla', component: ChatComponent },
  { path: 'listado', component: ListadoComponent },
  { path: 'usuario', component: UsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
