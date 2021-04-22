import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './page/chat/chat.component';
import { ListadoComponent } from './page/listado/listado.component';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire'
import { environment } from 'src/environments/environment';
import { UsuarioComponent } from './page/usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ListadoComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
