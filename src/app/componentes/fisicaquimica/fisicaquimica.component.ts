import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fisicaquimica',
  templateUrl: './fisicaquimica.component.html',
  styleUrls: ['./fisicaquimica.component.css']
})
export class FisicaquimicaComponent implements OnInit {

  mostrarTablaPeriodica : boolean;

  constructor() {

    this.mostrarTablaPeriodica = false;

  }

  ngOnInit(): void {
    
  }

  btn_mostrarTabla() {
    this.mostrarTablaPeriodica = true;
  }

}
