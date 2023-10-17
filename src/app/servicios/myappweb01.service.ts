import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Myappweb01Service {

  constructor(private myHttp: HttpClient) { }


  // Sección Paises - desde API Countries

  obtenerCiudades(): Observable<any> {

    return this.myHttp.get<any>("https://restcountries.com/v3.1/all");

  }

  obtenerNombresPaises(): Observable<any> {
    return this.myHttp.get<any>("https://restcountries.com/v3.1/all?fields=name,translations");
  }

  obtenerPaisPorNombre(nombrePais : string): Observable<any> {

    return this.myHttp.get<any>("https://restcountries.com/v3.1/name/" + nombrePais);

    //https://restcountries.com/v3.1/region/europe
  }

  obtenerDatosConFiltros(): Observable<any> {
    return this.myHttp.get<any>("https://restcountries.com/v3.1/all?fields=name,capital,currencies");
  }

}
