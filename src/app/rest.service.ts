import { Injectable } from '@angular/core';
//import { HttpClient} from '@angular/import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { PeticionEstadosPaises, PeticionPaises, PeticionProfecionales } from 'src/app/peticionProfesionales';
import { EstadosPaises, ListaEstadosPaises, ListaPaises, ListaProfecionales, ListaProfesiones } from './models/model.interface';



@Injectable({
  providedIn: 'root'
})
export class RestService {

  public paises: ListaPaises[] = [];
  public ciudad : EstadosPaises[] = [];
 

  constructor(private http: HttpClient) { }

  //http://51.75.55.74:44393/api/usuario/ObtenerPrefesionales
  public getProfecionales(url: string, peticion: PeticionProfecionales) {
    const body = JSON.stringify(peticion);
    console.log(body)
    const headers = { 'content-type': 'application/json' }
    return this.http.post<ListaProfecionales[]>(url, body, { 'headers': headers }) // get a profesionales
  }
  //http://51.75.55.74:44393/api/configuracion/ListarPaises
  public getPaises(url: string, 
    peticion : PeticionPaises) {
    return this.http.get<ListaPaises[]>(url) // get a paises
  }

  //http://51.75.55.74:8080/api/configuracion/ListarEstadosPaises/
  public getCiudades(url: string, 
    peticion : PeticionEstadosPaises) {
      const body = JSON.stringify(peticion);
      console.log(body)
      const headers = { 'content-type': 'application/json' }
    return this.http.post<ListaEstadosPaises[]>(url, body, { 'headers': headers })// get Estados
  }


  //http://51.75.55.74:8080/api/usuario/ObtenerProfesiones
  public getProfesiones(url: string) {
    return this.http.get<ListaProfesiones[]>(url)// get a profesionales
  }

}
