import { Component, OnInit } from '@angular/core';
import { Myappweb01Service } from 'src/app/servicios/myappweb01.service';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})

export class CiudadesComponent implements OnInit {

  datosCiudades01 : any;

  constructor (private servicioMyAppWeb : Myappweb01Service) {}

  ngOnInit(): void {
    
  }

  btnMostrarCiudades() {

    this.servicioMyAppWeb.obtenerCiudades().subscribe(
      datosApi => {
        this.datosCiudades01 = datosApi;

        //console.log(JSON.stringify(this.datosCiudades01[0].translations.spa));

        console.log("Cantidad de paices en la api: " + this.datosCiudades01.length);

      }
    );
  }

}
