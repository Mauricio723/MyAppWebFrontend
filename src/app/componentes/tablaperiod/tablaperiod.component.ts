import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Myappweb01Service } from 'src/app/servicios/myappweb01.service';

@Component({
  selector: 'app-tablaperiod',
  templateUrl: './tablaperiod.component.html',
  styleUrls: ['./tablaperiod.component.css']
})
export class TablaperiodComponent implements OnInit {

  @ViewChild("modal_01") my_modal_01 !: ElementRef<HTMLDialogElement>;
  
  datosTablaPeriodica: any;

  elementoTablaSeleccionado : number;
  
  constructor(private my_servicio: Myappweb01Service) { 

    this.elementoTablaSeleccionado = 0;
    
  }

  ngOnInit(): void {

    // obtenemos los datos de la tabla periódica al cargar el componente
    this.my_servicio.obtenerElementosTablaPeriodica().subscribe(
      datosTabla => {
        this.datosTablaPeriodica = datosTabla;
        //console.log(JSON.stringify(this.datosTablaPeriodica.elements[0]));
      }
    );

  }  

  abrir_modal_01(numeroElementoSeleccionado : number) {

    this.elementoTablaSeleccionado = numeroElementoSeleccionado - 1;

    this.my_modal_01.nativeElement.showModal();

  }

  cerrar_modal_01() {

    this.my_modal_01.nativeElement.close();

  }
 
}
