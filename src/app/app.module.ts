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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CiudadesComponent } from './componentes/ciudades/ciudades.component';
import { PaisesComponent } from './componentes/paises/paises.component';

@NgModule({
  declarations: [
    AppComponent,
    MybodyComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    NavegacionComponent,
    ConfigstyleComponent,
    CiudadesComponent,
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
