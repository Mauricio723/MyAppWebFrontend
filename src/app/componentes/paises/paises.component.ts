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

  nombrePaisesOrdenado : any[];

  mostrarSeccionPaises : boolean;

  constructor (private servicioMyAppWeb : Myappweb01Service) {

    this.mostrarSeccionPaises = false;

    this.nombrePaisesOrdenado = [];

  }


  ngOnInit(): void {
    
  }

  mostrarPaises() {

    this.servicioMyAppWeb.obtenerNombresPaises().subscribe (
      datosApiPaises => {
        this.datosPaises01 = datosApiPaises;

        //console.log(JSON.stringify(this.datosPaises01));

        this.crearArregloOrdenado();
      }
    );
        

    this.mostrarSeccionPaises = true;

  }

  crearArregloOrdenado() {

    for (let indice = 0; indice < this.datosPaises01.length; indice++) {
      this.nombrePaisesOrdenado[indice] = this.datosPaises01[indice].name.official;

      //console.log(JSON.stringify(this.nombrePaisesOrdenado[indice]));

    }
   
    // ordenamos el arreglo nombrePaisesOrdenado

    this.nombrePaisesOrdenado.sort((a, b) => {
      if (a === b) {
        return 0;
      }
      if (a < b) {
        return -1;
      }
      return 1;
    });

    //console.log(JSON.stringify(this.nombrePaisesOrdenado));

  }

  mostrarPaisPorNombre(nombrePais : string) {

    this.servicioMyAppWeb.obtenerPaisPorNombre(nombrePais).subscribe (
      datosPais => {
        this.datosPaisPorNombre = datosPais;

        //console.log(JSON.stringify(this.datosPaisPorNombre));

      }
    );

    //this.mostrarSeccionPaises = false;

  }

}
