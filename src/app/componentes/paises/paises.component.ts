import { Component, OnInit } from '@angular/core';
import { Myappweb01Service } from 'src/app/servicios/myappweb01.service';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})

export class PaisesComponent implements OnInit {

  datosPaises01 : any;
  datosPaisPorNombre : any;

  constructor (private servicioMyAppWeb : Myappweb01Service) {}


  ngOnInit(): void {
    
  }

  btnMostrarPaises() {

    this.servicioMyAppWeb.obtenerNombresPaises().subscribe (
      datosApiPaises => {
        this.datosPaises01 = datosApiPaises;

        //console.log(JSON.stringify(this.datosPaises01));

      }
    );
    
  }

  mostrarPaisPorNombre(nombrePais : string) {

    this.servicioMyAppWeb.obtenerPaisPorNombre(nombrePais).subscribe (
      datosPais => {
        this.datosPaisPorNombre = datosPais;

        //console.log(JSON.stringify(this.datosPaisPorNombre));

      }
    );
  }

}
