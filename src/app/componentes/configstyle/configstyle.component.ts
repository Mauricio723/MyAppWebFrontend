import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configstyle',
  templateUrl: './configstyle.component.html',
  styleUrls: ['./configstyle.component.css']
})

export class ConfigstyleComponent implements OnInit {

  mostrarSeccionConfiguracion: boolean = false;

  botonConfiguracionDesabilitado: boolean = false;


  colorFondoNuevo: string = "";
  colorTextoNuevo: string = "";

  rootVariableStyle: any;

  colorOscuro: string;
  colorClaro: string;

  tipoColorFondo: string;

  textoColorOscuro: String = "";
  textoColorClaro: String = "";

  sizeTextoNuevo: String;

  checkedInputOscuro: boolean = false;
  checkedInputClaro: boolean = true;

  // Pruebas con configuración - si funciona modificar el resto - si no borrar

  //myMap_01 = new Map();    // creo un map para los tipos de colores del documento

  //colorSelecInputPrueba: string;

  //elementoParaModificarColor: string;

  /*
  coloresDocObjeto = {
    color_doc_obj_01 : "color documento 01",
    color_doc_obj_02 : "color documento 02",
    color_doc_obj_03 : "color documento 03",
    color_doc_obj_04 : "color documento 04"
  }
  */

  // Otras pruebas - con bordes seleccionados

  mostrarEspacioConfiguracion : boolean;

  estiloBordeElemento_01: string;
  estiloBordeElemento_02: string;
  estiloBordeElemento_03: string;
  estiloBordeElemento_04: string;

  elementoConBordeSeleccionado: string;

  colorSeleccionadoConBorde: string;

  arrayColores_01: string[] = ["#000000", "#ffffff", "#000000", "#ffffff", 
                               "#000000", "#ffffff", "#000000", "#ffffff"];

  constructor() {


    this.colorOscuro = "rgb(0,0,0)";
    this.colorClaro = "rgb(255,255,255)";


    this.colorFondoNuevo = "rgb(0,255,0)";
    this.colorTextoNuevo = "rgb(255,0,255)";

    this.tipoColorFondo = "fondo_claro";

    this.textoColorOscuro = "Color Texto";
    this.textoColorClaro = "Color Fondo";

    this.sizeTextoNuevo = "1em";

    // Pruebas con configuración - si funciona modificar el resto - si no borrar

    

    //this.colorSelecInputPrueba = "rgb(200,200,200)";

    //this.elementoParaModificarColor = "color_doc_01";

    // nuevas pruebas - con bordes seleccionados

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

    if (sessionStorage.getItem("colorOscuroGuardado") != undefined) {
      this.colorOscuro = "" + sessionStorage.getItem("colorOscuroGuardado");
    }

    if (sessionStorage.getItem("colorClaroGuardado") != undefined) {
      this.colorClaro = "" + sessionStorage.getItem("colorClaroGuardado");
    }

    if (sessionStorage.getItem("tipoFondoGuardado") != undefined) {
      this.tipoColorFondo = "" + sessionStorage.getItem("tipoFondoGuardado");
    }

    this.establecerColoresPagina();

  }


  clkBtnConfigurarPagina() {
    this.mostrarSeccionConfiguracion = true;
    this.botonConfiguracionDesabilitado = true;
  }

  obtenerValorInputRadio(tipoFondo: string) {

    this.tipoColorFondo = tipoFondo;
    this.establecerCheckedInput();
    this.establecerColoresPagina();

  }

  establecerCheckedInput() {
    if (this.tipoColorFondo === "fondo_oscuro") {
      this.checkedInputOscuro = true;
      this.checkedInputClaro = false;
    }
    if (this.tipoColorFondo === "fondo_claro") {
      this.checkedInputOscuro = false;
      this.checkedInputClaro = true;
    }
  }

  establecerColoresPagina() {

    if (this.tipoColorFondo === "fondo_oscuro") {
      this.checkedInputOscuro = true;
      this.checkedInputClaro = false;
      this.colorFondoNuevo = this.colorOscuro;
      this.colorTextoNuevo = this.colorClaro;
      this.textoColorOscuro = "Color Fondo";
      this.textoColorClaro = "Color Texto";
    }

    if (this.tipoColorFondo === "fondo_claro") {
      this.checkedInputOscuro = false;
      this.checkedInputClaro = true;
      this.colorFondoNuevo = this.colorClaro;
      this.colorTextoNuevo = this.colorOscuro;
      this.textoColorClaro = "Color Fondo";
      this.textoColorOscuro = "Color Texto";
    }

    this.rootVariableStyle.style.setProperty("--color_fondo_03", this.colorFondoNuevo);

    this.rootVariableStyle.style.setProperty("--color_texto_03", this.colorTextoNuevo);

  }

  changeSelectColores() {
    this.establecerColoresPagina();
  }

  cambiarSizeTexto() {

    this.rootVariableStyle.style.setProperty("--size_texto_01", this.sizeTextoNuevo);

  }

  clkBtnGuardarCambios() {

    sessionStorage.setItem("colorOscuroGuardado", this.colorOscuro);
    sessionStorage.setItem("colorClaroGuardado", this.colorClaro);
    sessionStorage.setItem("tipoFondoGuardado", this.tipoColorFondo);

    this.mostrarSeccionConfiguracion = false;
    this.botonConfiguracionDesabilitado = false;

  }

  clkBtnValoresPredeterminados() {

    sessionStorage.removeItem("colorOscuroGuardado");
    sessionStorage.removeItem("colorClaroGuardado");
    sessionStorage.removeItem("tipoFondoGuardado");

    this.colorOscuro = "#000000";
    this.colorClaro = "#FFFFFF";
    this.tipoColorFondo = "fondo_claro";

    this.establecerColoresPagina();

    this.mostrarSeccionConfiguracion = false;
    this.botonConfiguracionDesabilitado = false;

  }

  clkBtnSalirSinGuardarCambios() {
    this.mostrarSeccionConfiguracion = false;
    this.botonConfiguracionDesabilitado = false;
  }

  // Espacio para prueba de configuración nueva
  
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

  establecerColorConBorde(elementoParaModificar: string) {

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

}
