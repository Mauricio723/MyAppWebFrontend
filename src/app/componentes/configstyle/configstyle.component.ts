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

  constructor() {


    this.colorOscuro = "rgb(0,0,0)";
    this.colorClaro = "rgb(255,255,255)";


    this.colorFondoNuevo = "rgb(0,255,0)";
    this.colorTextoNuevo = "rgb(255,0,255)";

    this.tipoColorFondo = "fondo_claro";

    this.textoColorOscuro = "Color Texto";
    this.textoColorClaro = "Color Fondo";

    this.sizeTextoNuevo = "1em";

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


}
