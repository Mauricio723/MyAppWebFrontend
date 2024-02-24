import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configstyle',
  templateUrl: './configstyle.component.html',
  styleUrls: ['./configstyle.component.css']
})

export class ConfigstyleComponent implements OnInit {

  mostrarSeccionConfiguracion: boolean = false;

  rootVariableStyle: any;

  sizeTextoNuevo: String;

  //mostrarEspacioConfiguracion: boolean;

  estiloBordeElemento_01: string;
  estiloBordeElemento_02: string;
  estiloBordeElemento_03: string;
  estiloBordeElemento_04: string;

  elementoConBordeSeleccionado: string;

  colorSeleccionadoConBorde: string;

  arrayColores_01: string[] = ["#000000", "#ffffff", "#000000", "#ffffff",
    "#000000", "#ffffff", "#000000", "#ffffff"];

  // Variables para el tamaño de texto

  anchoNavegador: number;
  fontSizeSelect: string;
  fontSizeNuevo: string;
  fontSizeRelativo: number;
  fontSizePorAnchoNavegador: number;

  constructor(private myRouter: Router) {

    this.sizeTextoNuevo = "1em";

    //this.mostrarEspacioConfiguracion = false;

    this.estiloBordeElemento_01 = "1px solid black";
    this.estiloBordeElemento_02 = "1px solid black";
    this.estiloBordeElemento_03 = "1px solid black";
    this.estiloBordeElemento_04 = "1px solid black";

    this.elementoConBordeSeleccionado = "";

    this.colorSeleccionadoConBorde = "#000000";

    // #########################

    this.fontSizeSelect = "100";
    this.fontSizeNuevo = "";
    
    this.anchoNavegador = 0;   
    this.fontSizeRelativo = 1;
    this.fontSizePorAnchoNavegador = 0;

  }

  ngOnInit(): void {

    this.rootVariableStyle = document.documentElement;

    this.verificarSessionStorage();

    this.establecerFontSize();
    
  }

  /*
  cambiarSizeTexto() {
    this.rootVariableStyle.style.setProperty("--size_texto_01", this.sizeTextoNuevo);
  }
  */

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
    //this.mostrarEspacioConfiguracion = false;

    this.myRouter.navigate(["/inicio"]);

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

  /*
  btnMostrarConfiguracionColores() {
    //this.mostrarEspacioConfiguracion = true;
  }
  */

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

    //this.mostrarEspacioConfiguracion = false;

    this.myRouter.navigate(["/inicio"]);

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
    //this.mostrarEspacioConfiguracion = false;

    this.myRouter.navigate(["/inicio"]);

  }

  // Tamaños de texto

  establecerFontSize() {

    this.anchoNavegador = window.innerWidth;

    if (this.anchoNavegador <= 200) {
      this.fontSizePorAnchoNavegador = -30;
    }
    if (this.anchoNavegador > 200 && this.anchoNavegador <= 500) {
      this.fontSizePorAnchoNavegador = -20;
    }
    if (this.anchoNavegador > 500 && this.anchoNavegador <= 700) {
      this.fontSizePorAnchoNavegador = -10;
    }
    if (this.anchoNavegador > 700 && this.anchoNavegador <= 900) {
      this.fontSizePorAnchoNavegador = 0;
    }
    if (this.anchoNavegador > 900 && this.anchoNavegador <= 1100) {
      this.fontSizePorAnchoNavegador = 10;
    }
    if (this.anchoNavegador > 1100 && this.anchoNavegador <= 1200) {
      this.fontSizePorAnchoNavegador = 20;
    }
    if (this.anchoNavegador > 1200) {
      this.fontSizePorAnchoNavegador = 30;
    }

    this.fontSizeRelativo = this.fontSizePorAnchoNavegador + parseFloat(this.fontSizeSelect);

    this.fontSizeNuevo = "" + (this.fontSizeRelativo) / 100 + "em";
    this.rootVariableStyle.style.setProperty("--font_size_01", this.fontSizeNuevo);

    this.fontSizeNuevo = "" + (this.fontSizeRelativo + 20) / 100 + "em";
    this.rootVariableStyle.style.setProperty("--font_size_02", this.fontSizeNuevo);

    this.fontSizeNuevo = "" + (this.fontSizeRelativo + 40) / 100 + "em";
    this.rootVariableStyle.style.setProperty("--font_size_03", this.fontSizeNuevo);

    this.fontSizeNuevo = "" + (this.fontSizeRelativo + 50) / 100 + "em";
    this.rootVariableStyle.style.setProperty("--font_size_04", this.fontSizeNuevo);

    this.fontSizeNuevo = "" + (this.fontSizeRelativo + 60) / 100 + "em";
    this.rootVariableStyle.style.setProperty("--font_size_05", this.fontSizeNuevo);

    this.fontSizeNuevo = "" + (this.fontSizeRelativo + 80) / 100 + "em";
    this.rootVariableStyle.style.setProperty("--font_size_06", this.fontSizeNuevo);

  }

}
