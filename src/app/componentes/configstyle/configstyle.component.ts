import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configstyle',
  templateUrl: './configstyle.component.html',
  styleUrls: ['./configstyle.component.css']
})

export class ConfigstyleComponent implements OnInit {

  mostrarSeccionConfiguracion: boolean = false;

  rootVariableStyle: any;
 
  sizeTextoNuevo: String;
 
  mostrarEspacioConfiguracion: boolean;

  estiloBordeElemento_01: string;
  estiloBordeElemento_02: string;
  estiloBordeElemento_03: string;
  estiloBordeElemento_04: string;

  elementoConBordeSeleccionado: string;

  colorSeleccionadoConBorde: string;

  arrayColores_01: string[] = ["#000000", "#ffffff", "#000000", "#ffffff",
    "#000000", "#ffffff", "#000000", "#ffffff"];

  constructor() {
   
    this.sizeTextoNuevo = "1em";
   
    this.mostrarEspacioConfiguracion = false;

    this.estiloBordeElemento_01 = "1px solid black";
    this.estiloBordeElemento_02 = "1px solid black";
    this.estiloBordeElemento_03 = "1px solid black";
    this.estiloBordeElemento_04 = "1px solid black";

    this.elementoConBordeSeleccionado = "";

    this.colorSeleccionadoConBorde = "#000000";

  }

  ngOnInit(): void {

    this.rootVariableStyle = document.documentElement;

    this.verificarSessionStorage();
   
  }

  cambiarSizeTexto() {

    this.rootVariableStyle.style.setProperty("--size_texto_01", this.sizeTextoNuevo);

  }


  btnEditarColorElemento(elementoSeleccionado: string) {

    this.elementoConBordeSeleccionado = elementoSeleccionado;

    if (elementoSeleccionado == "elemento_01") {
      this.estiloBordeElemento_01 = "2px solid red";
      this.estiloBordeElemento_02 = "1px solid black";
      this.estiloBordeElemento_03 = "1px solid black";
      this.estiloBordeElemento_04 = "1px solid black";
    }
    if (elementoSeleccionado == "elemento_02") {
      this.estiloBordeElemento_01 = "1px solid black";
      this.estiloBordeElemento_02 = "2px solid red";
      this.estiloBordeElemento_03 = "1px solid black";
      this.estiloBordeElemento_04 = "1px solid black";
    }
    if (elementoSeleccionado == "elemento_03") {
      this.estiloBordeElemento_01 = "1px solid black";
      this.estiloBordeElemento_02 = "1px solid black";
      this.estiloBordeElemento_03 = "2px solid red";
      this.estiloBordeElemento_04 = "1px solid black";
    }
    if (elementoSeleccionado == "elemento_04") {
      this.estiloBordeElemento_01 = "1px solid black";
      this.estiloBordeElemento_02 = "1px solid black";
      this.estiloBordeElemento_03 = "1px solid black";
      this.estiloBordeElemento_04 = "2px solid red";
    }

  }

  establecerColoresYGuardarCambios() {

    this.establecerTodosLosColores();
    this.guardarCambiosEnSessionStorage();
    this.mostrarEspacioConfiguracion = false;

  }

  establecerColorSeleccionado(elementoParaModificar: string) {

    if (elementoParaModificar == "elemento_texto_01") {
      this.rootVariableStyle.style.setProperty("--color_elemento_01", this.arrayColores_01[0]);
    }
    if (elementoParaModificar == "elemento_back_01") {
      this.rootVariableStyle.style.setProperty("--color_back_01", this.arrayColores_01[1]);
    }
    if (elementoParaModificar == "elemento_texto_02") {
      this.rootVariableStyle.style.setProperty("--color_elemento_02", this.arrayColores_01[2]);
    }
    if (elementoParaModificar == "elemento_back_02") {
      this.rootVariableStyle.style.setProperty("--color_back_02", this.arrayColores_01[3]);
    }
    if (elementoParaModificar == "elemento_texto_03") {
      this.rootVariableStyle.style.setProperty("--color_elemento_03", this.arrayColores_01[4]);
    }
    if (elementoParaModificar == "elemento_back_03") {
      this.rootVariableStyle.style.setProperty("--color_back_03", this.arrayColores_01[5]);
    }
    if (elementoParaModificar == "elemento_texto_04") {
      this.rootVariableStyle.style.setProperty("--color_elemento_04", this.arrayColores_01[6]);
    }
    if (elementoParaModificar == "elemento_back_04") {
      this.rootVariableStyle.style.setProperty("--color_back_04", this.arrayColores_01[7]);
    }

  }

  btnMostrarConfiguracionColores() {
    this.mostrarEspacioConfiguracion = true;
  }

  guardarCambiosEnSessionStorage() {
    sessionStorage.setItem("color_elemento_01", this.arrayColores_01[0]);
    sessionStorage.setItem("color_back_01", this.arrayColores_01[1]);
    sessionStorage.setItem("color_elemento_02", this.arrayColores_01[2]);
    sessionStorage.setItem("color_back_02", this.arrayColores_01[3]);
    sessionStorage.setItem("color_elemento_03", this.arrayColores_01[4]);
    sessionStorage.setItem("color_back_03", this.arrayColores_01[5]);
    sessionStorage.setItem("color_elemento_04", this.arrayColores_01[6]);
    sessionStorage.setItem("color_back_04", this.arrayColores_01[7]);

  }

  verificarSessionStorage() {

    if (sessionStorage.getItem("color_elemento_01") != undefined) {
      this.arrayColores_01[0] = "" + sessionStorage.getItem("color_elemento_01");
      this.rootVariableStyle.style.setProperty("--color_elemento_01", this.arrayColores_01[0]);
    }
    if (sessionStorage.getItem("color_back_01") != undefined) {
      this.arrayColores_01[1] = "" + sessionStorage.getItem("color_back_01");
      this.rootVariableStyle.style.setProperty("--color_back_01", this.arrayColores_01[1]);
    }

    if (sessionStorage.getItem("color_elemento_02") != undefined) {
      this.arrayColores_01[2] = "" + sessionStorage.getItem("color_elemento_02");
      this.rootVariableStyle.style.setProperty("--color_elemento_02", this.arrayColores_01[2]);
    }
    if (sessionStorage.getItem("color_back_02") != undefined) {
      this.arrayColores_01[3] = "" + sessionStorage.getItem("color_back_02");
      this.rootVariableStyle.style.setProperty("--color_back_02", this.arrayColores_01[3]);
    }

    if (sessionStorage.getItem("color_elemento_03") != undefined) {
      this.arrayColores_01[4] = "" + sessionStorage.getItem("color_elemento_03");
      this.rootVariableStyle.style.setProperty("--color_elemento_03", this.arrayColores_01[4]);
    }
    if (sessionStorage.getItem("color_back_03") != undefined) {
      this.arrayColores_01[5] = "" + sessionStorage.getItem("color_back_03");
      this.rootVariableStyle.style.setProperty("--color_back_03", this.arrayColores_01[5]);
    }

    if (sessionStorage.getItem("color_elemento_04") != undefined) {
      this.arrayColores_01[6] = "" + sessionStorage.getItem("color_elemento_04");
      this.rootVariableStyle.style.setProperty("--color_elemento_04", this.arrayColores_01[6]);
    }
    if (sessionStorage.getItem("color_back_04") != undefined) {
      this.arrayColores_01[7] = "" + sessionStorage.getItem("color_back_04");
      this.rootVariableStyle.style.setProperty("--color_back_04", this.arrayColores_01[7]);
    }

  }

  establecerValoresPredeterminados() {
    sessionStorage.removeItem("color_elemento_01");
    sessionStorage.removeItem("color_back_01");
    sessionStorage.removeItem("color_elemento_02");
    sessionStorage.removeItem("color_back_02");
    sessionStorage.removeItem("color_elemento_03");
    sessionStorage.removeItem("color_back_03");
    sessionStorage.removeItem("color_elemento_04");
    sessionStorage.removeItem("color_back_04");

    this.arrayColores_01[0] = "rgb(0, 0, 0)";
    this.arrayColores_01[1] = "rgb(255, 255, 255)";
    this.arrayColores_01[2] = "rgb(0, 0, 0)";
    this.arrayColores_01[3] = "rgb(255, 255, 255)";
    this.arrayColores_01[4] = "rgb(0, 0, 0)";
    this.arrayColores_01[5] = "rgb(255, 255, 255)";
    this.arrayColores_01[6] = "rgb(0, 0, 0)";
    this.arrayColores_01[7] = "rgb(255, 255, 255)";

    this.establecerTodosLosColores();

    this.mostrarEspacioConfiguracion = false;

  }

  establecerTodosLosColores() {

    this.rootVariableStyle.style.setProperty("--color_elemento_01", this.arrayColores_01[0]);
    this.rootVariableStyle.style.setProperty("--color_back_01", this.arrayColores_01[1]);
    this.rootVariableStyle.style.setProperty("--color_elemento_02", this.arrayColores_01[2]);
    this.rootVariableStyle.style.setProperty("--color_back_02", this.arrayColores_01[3]);
    this.rootVariableStyle.style.setProperty("--color_elemento_03", this.arrayColores_01[4]);
    this.rootVariableStyle.style.setProperty("--color_back_03", this.arrayColores_01[5]);
    this.rootVariableStyle.style.setProperty("--color_elemento_04", this.arrayColores_01[6]);
    this.rootVariableStyle.style.setProperty("--color_back_04", this.arrayColores_01[7]);

  }

  salirSinGuardarCambios() {
    this.mostrarEspacioConfiguracion = false;
  }
}
