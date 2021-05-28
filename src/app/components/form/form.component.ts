import { Component, OnInit } from '@angular/core';
import { PeticionEstadosPaises, PeticionPaises, PeticionProfecionales } from 'src/app/peticionProfesionales';
import { RestService } from 'src/app/rest.service';
import {EstadosPaises, ListaEstadosPaises, ListaPaises, ListaProfecionales, ListaProfesiones} from '../../models/model.interface'
import { DataService } from '../../services/data.service'
import { environment } from 'src/environments/environment';

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
  location = "https://beccapp.beccasoftware.com/"

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
    this.RestService.getProfecionales(environment.appUrlBase + '/usuario/ObtenerPrefesionales', obj).subscribe(respuesta =>{
      console.log(respuesta);
      (this.profesionales = respuesta)
  })
  }


  public loadPaises2(){
    var obj = new PeticionPaises();
    obj.PaisId = 0;
    obj.ProfesionId = 0;
    obj.ProvinciaId = 0;
    var res = this.RestService.getPaises(environment.appUrlBase + '/configuracion/ListarPaises', obj).subscribe(respuesta => {
      (this.paises2 = respuesta)
    }) 


  }

  public loadEstatdos(codigo : string) {
    var obj = new PeticionEstadosPaises();
    obj.codigo = codigo
    var res = this.RestService.getCiudades(environment.appUrlBase + '/configuracion/ListarEstadosPaises/', obj).subscribe(respuesta => {
      (this.ciudad = respuesta)
    }) 

  }

  public loadProfesiones() {
    var res = this.RestService.getProfesiones(environment.appUrlBase + '/usuario/ObtenerProfesiones').subscribe(respuesta => {
      (this.profesiones = respuesta)
    }) 

  }


  //   datosParaEditar(result){
  //     this.data = new IdModelo(result.ID);
  // }

  openwindow(dominio:string) {
    window.open(this.location + dominio);
  }



}
