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

  mapaPaises = new Map();

  //arregloPaisesOrdenadoEnEspaniol : any[];

  constructor (private servicioMyAppWeb : Myappweb01Service) {

    this.mostrarSeccionPaises = false;

    this.nombrePaisesOrdenado = [];

    //this.arregloPaisesOrdenadoEnEspaniol = [];

  }

  ngOnInit(): void {
    
  }

  mostrarPaises() {

    this.servicioMyAppWeb.obtenerNombresPaises().subscribe (
      datosApiPaises => {
        this.datosPaises01 = datosApiPaises;

        //console.log(JSON.stringify(this.datosPaises01[0].translations.spa.common));
    
        this.crearMapaConPaises();

        this.crearArregloOrdenado();
        
      }
    );        

    this.mostrarSeccionPaises = true;

  }

  /*
  mostrarNombrePaisEnEspaniol() {
    for (let indice = 0; indice<this.datosPaises01.length; indice++) {
      console.log(JSON.stringify(this.datosPaises01[indice].translations.spa.common));
    }
  }  */

  crearMapaConPaises() {
    //let mapaPaises = new Map();

    for (let indice=0; indice<this.datosPaises01.length; indice++) {

      this.mapaPaises.set(this.datosPaises01[indice].translations.spa.common, this.datosPaises01[indice].name.official);
    }

  }
 
  crearArregloOrdenado() {

    for (let indice = 0; indice < this.datosPaises01.length; indice++) {
      //this.nombrePaisesOrdenado[indice] = this.datosPaises01[indice].name.official;

      this.nombrePaisesOrdenado[indice] = this.datosPaises01[indice].translations.spa.common;
      
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
