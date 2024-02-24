import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //this.rootVariableStyle = document.documentElement;

  variablesEstilosRoot : any;

  constructor() {

    this.variablesEstilosRoot = document.documentElement;

  }

  ngOnInit(): void {

    this.verificarDatosStorage();
    
  }

  /* Acá verifico los datos de sessionStorage,  porque este componente es el que siempre se carga.
  Los datos de sessionStorage se establecen en el componente ConfigstyleComponent */

  verificarDatosStorage() {

    if (sessionStorage.getItem("color_elemento_01") != undefined) {      
      this.variablesEstilosRoot.style.setProperty("--color_elemento_01", sessionStorage.getItem("color_elemento_01"));
    }
    if (sessionStorage.getItem("color_back_01") != undefined) {
      this.variablesEstilosRoot.style.setProperty("--color_back_01", sessionStorage.getItem("color_back_01"));      
    }
    if (sessionStorage.getItem("color_elemento_02") != undefined) {
      this.variablesEstilosRoot.style.setProperty("--color_elemento_02", sessionStorage.getItem("color_elemento_02"));     
    }
    if (sessionStorage.getItem("color_back_02") != undefined) {
      this.variablesEstilosRoot.style.setProperty("--color_back_02", sessionStorage.getItem("color_back_02"));     
    }
    if (sessionStorage.getItem("color_elemento_03") != undefined) {
      this.variablesEstilosRoot.style.setProperty("--color_elemento_03", sessionStorage.getItem("color_elemento_03"));
    }
    if (sessionStorage.getItem("color_back_03") != undefined) {
      this.variablesEstilosRoot.style.setProperty("--color_back_03", sessionStorage.getItem("color_back_03"));
    }
    if (sessionStorage.getItem("color_elemento_04") != undefined) {
      this.variablesEstilosRoot.style.setProperty("--color_elemento_04", sessionStorage.getItem("color_elemento_04"));
    }
    if (sessionStorage.getItem("color_back_04") != undefined) {
      this.variablesEstilosRoot.style.setProperty("--color_back_04", sessionStorage.getItem("color_back_04"));
    }

  }
  

}
