import { Component, OnInit } from '@angular/core';
import { PeticionEstadosPaises, PeticionPaises, PeticionProfecionales } from 'src/app/peticionProfesionales';
import { RestService } from 'src/app/rest.service';
import {EstadosPaises, ListaEstadosPaises, ListaPaises, ListaProfecionales, ListaProfesiones} from '../../models/model.interface'
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers:[DataService]
})
export class FormComponent implements OnInit {

  public selectedPais : ListaPaises = { Id : 0, Nombre: '', Lugar : 0, Codigo : '', Tipo: ''};
  public selectedProfecion : ListaProfecionales[] = [];
  //public paises: ListaPaises[] = [];
  public paises: ListaPaises[] = [];
  public paises2: ListaPaises[] = [];
  public ciudad : ListaEstadosPaises[] = [];
  public profesionales : ListaProfecionales[] = [];
  public profesiones : ListaProfesiones[] = [];
  public idPais : String = "0";
  public idProfesion : number = 0;
  public idprovincia : number = 0;
  //public profesion! : ListaProfecionales = {};

  constructor(private dataSvc : DataService, private RestService : RestService) { }

  ngOnInit(): void {
    console.log(this.dataSvc.getPaises)
    //this.paises = this.dataSvc.getPaises();
    this.loadProfesiones();
    this.loadPaises2();
    this.loadProfecionales(0);
    
  }

  onSelectEstadoPais(idP : string):void{
    //console.log('Id->', id);
    //this.ciudad= this.dataSvc.getCiudades().filter(item => item.id == idP)
    //this.idPais = idP;
    this.loadEstatdos(idP)
    this.ciudad.filter(item => item.PaisCodigo == idP)
  }

  onSelectProfesion(idP : number):void{
    this.idProfesion = idP;
    this.loadProfecionales(this.idProfesion)
    this.profesionales.filter(item => item.ProfesionId == idP)
  }

  public loadProfecionales(idProfesion: number){
    var obj = new PeticionProfecionales();
    obj.PaisId = 0;
    obj.ProfesionId = idProfesion;
    obj.ProvinciaId = 0;
    this.RestService.getProfecionales('http://51.75.55.74:8080/api/usuario/ObtenerPrefesionales', obj).subscribe(respuesta =>{
      console.log(respuesta);
      (this.profesionales = respuesta)
  })
  }


  public loadPaises2(){
    var obj = new PeticionPaises();
    obj.PaisId = 0;
    obj.ProfesionId = 0;
    obj.ProvinciaId = 0;
    var res = this.RestService.getPaises('http://51.75.55.74:8080/api/configuracion/ListarPaises', obj).subscribe(respuesta => {
      (this.paises2 = respuesta)
    }) 


  }

  public loadEstatdos(codigo : string) {
    var obj = new PeticionEstadosPaises();
    obj.codigo = codigo
    var res = this.RestService.getCiudades('http://51.75.55.74:8080/api/configuracion/ListarEstadosPaises/', obj).subscribe(respuesta => {
      (this.ciudad = respuesta)
    }) 

  }

  public loadProfesiones() {
    var res = this.RestService.getProfesiones('http://51.75.55.74:8080/api/usuario/ObtenerProfesiones').subscribe(respuesta => {
      (this.profesiones = respuesta)
    }) 

  }


//   datosParaEditar(result){
//     this.data = new IdModelo(result.ID);
// }



}
