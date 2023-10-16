import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MybodyComponent } from './componentes/mybody/mybody.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { ConfigstyleComponent } from './componentes/configstyle/configstyle.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MybodyComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    NavegacionComponent,
    ConfigstyleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
