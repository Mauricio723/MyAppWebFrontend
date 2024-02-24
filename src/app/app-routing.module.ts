import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ConfigstyleComponent } from './componentes/configstyle/configstyle.component';
import { PaisesComponent } from './componentes/paises/paises.component';
import { CiudadesComponent } from './componentes/ciudades/ciudades.component';
import { ApuntesComponent } from './componentes/apuntes/apuntes.component';
import { FisicaquimicaComponent } from './componentes/fisicaquimica/fisicaquimica.component';

const routes: Routes = [
  {path: "inicio", component: InicioComponent},
  {path: "configuracion", component: ConfigstyleComponent},
  {path: "paises", component: PaisesComponent},
  {path: "ciudades", component: CiudadesComponent}, 
  {path: "apuntes", component: ApuntesComponent},
  {path: "fisica&quimica", component: FisicaquimicaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
