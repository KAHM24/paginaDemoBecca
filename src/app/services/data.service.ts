import { Injectable } from '@angular/core';
import {ListaPaises, EstadosPaises, ListaProfecionales} from '../models/model.interface'

@Injectable()
export class DataService {
  private paices: ListaPaises[] = [
    {
        "Nombre": "Andorra                                             ",
        "Tipo": null,
        "Lugar": 0,
        "Codigo": "AND",
        "Id": 6
    },
    {
        "Nombre": "Colombia                                            ",
        "Tipo": null,
        "Lugar": 0,
        "Codigo": "COL",
        "Id": 48
    },
    {
        "Nombre": "Spain                                               ",
        "Tipo": null,
        "Lugar": 0,
        "Codigo": "ESP",
        "Id": 67
    },
    {
        "Nombre": "France                                              ",
        "Tipo": null,
        "Lugar": 0,
        "Codigo": "FRA",
        "Id": 73
    },
    {
        "Nombre": "Mexico                                              ",
        "Tipo": null,
        "Lugar": 0,
        "Codigo": "MEX",
        "Id": 136
    }
];
  private estados: EstadosPaises[] = [
      {
        "id" : 136,
        "name": "Mexico DF"
      },
      {
        "id" : 136,
        "name": "Monterrey"
      },
      {
        "id" : 67,
        "name": "Madrid"
      },
      {
        "id" : 67,
        "name": "Barcelona"
      },
      {
        "id" : 48,
        "name": "Bogota"
      },
      {
        "id" : 48,
        "name": "Barranquilla"
      },
  ];

  private profesionales: ListaProfecionales[] = 
  [
    {
        "tokenRecovery": null,
        "EmpresaId": null,
        "Email": "",
        "Especialidad": "developer",
        "Clave": "",
        "PrimerNombre": "Miguel",
        "SegundoNombre": "",
        "PrimerApellido": "Valero",
        "SegundoApellido": "",
        "FechaNacimiento": "0001-01-01T00:00:00",
        "Activo": 0,
        "Lugar": 0,
        "NumeroMovil": "",
        "Licencia": 0,
        "Token": "",
        "EsColegiado": 0,
        "NumeroColegiado": "",
        "UltimaVezLogin": "0001-01-01T00:00:00",
        "PlataformaPago": "",
        "NuevaClave": "",
        "Foto": "~/Image/juofxxgqirntxjhmmv@wqcefp.com/perfil-juofxxgqirntxjhmmv@wqcefp.com.jpg",
        "ColegioProfesional": 0,
        "EspecialidadesList": null,
        "InteresesList": null,
        "ProfesionesList": null,
        "NombreUsuario": "",
        "Genero": "",
        "NumeroDocumento": "",
        "Telefono": "",
        "TipoUsuario": 0,
        "TipoDocumento": 0,
        "CodigoPostal": 0,
        "IdGenero": 0,
        "FechaCreacion": "0001-01-01T00:00:00",
        "Dominio": "cunaguaro.net",
        "Trial": false,
        "TrialTime": false,
        "SuspenderCuenta": false,
        "DiasTrial": 0.0,
        "NumeroPagina": 0,
        "MessageId": null,
        "ProfesionId": 0,
        "Profesion": "Informático",
        "PaisId": 0,
        "Pais": "Venezuela                                           ",
        "ProvinciaId": 0,
        "Provincia": "Caracas                            ",
        "Pago": false,
        "IdRol": 0,
        "Id": 172
    },
    {
        "tokenRecovery": null,
        "EmpresaId": null,
        "Email": "",
        "Especialidad": "Programación",
        "Clave": "",
        "PrimerNombre": "Pepe",
        "SegundoNombre": "",
        "PrimerApellido": "Lopez",
        "SegundoApellido": "",
        "FechaNacimiento": "0001-01-01T00:00:00",
        "Activo": 0,
        "Lugar": 0,
        "NumeroMovil": "",
        "Licencia": 0,
        "Token": "",
        "EsColegiado": 0,
        "NumeroColegiado": "",
        "UltimaVezLogin": "0001-01-01T00:00:00",
        "PlataformaPago": "",
        "NuevaClave": "",
        "Foto": "~/Image/wjqpblqhajykzsawsy@miucce.com/perfil-wjqpblqhajykzsawsy@miucce.com.jpg",
        "ColegioProfesional": 0,
        "EspecialidadesList": null,
        "InteresesList": null,
        "ProfesionesList": null,
        "NombreUsuario": "",
        "Genero": "",
        "NumeroDocumento": "",
        "Telefono": "",
        "TipoUsuario": 0,
        "TipoDocumento": 0,
        "CodigoPostal": 0,
        "IdGenero": 0,
        "FechaCreacion": "0001-01-01T00:00:00",
        "Dominio": "Loyaltech",
        "Trial": false,
        "TrialTime": false,
        "SuspenderCuenta": false,
        "DiasTrial": 0.0,
        "NumeroPagina": 0,
        "MessageId": null,
        "ProfesionId": 0,
        "Profesion": "Informático",
        "PaisId": 0,
        "Pais": "Venezuela                                           ",
        "ProvinciaId": 0,
        "Provincia": "Caracas                            ",
        "Pago": false,
        "IdRol": 0,
        "Id": 179
    },
    {
        "tokenRecovery": null,
        "EmpresaId": null,
        "Email": "",
        "Especialidad": "bases de datos",
        "Clave": "",
        "PrimerNombre": "Pepe",
        "SegundoNombre": "",
        "PrimerApellido": "Lopez",
        "SegundoApellido": "",
        "FechaNacimiento": "0001-01-01T00:00:00",
        "Activo": 0,
        "Lugar": 0,
        "NumeroMovil": "",
        "Licencia": 0,
        "Token": "",
        "EsColegiado": 0,
        "NumeroColegiado": "",
        "UltimaVezLogin": "0001-01-01T00:00:00",
        "PlataformaPago": "",
        "NuevaClave": "",
        "Foto": "~/Image/wjqpblqhajykzsawsy@miucce.com/perfil-wjqpblqhajykzsawsy@miucce.com.jpg",
        "ColegioProfesional": 0,
        "EspecialidadesList": null,
        "InteresesList": null,
        "ProfesionesList": null,
        "NombreUsuario": "",
        "Genero": "",
        "NumeroDocumento": "",
        "Telefono": "",
        "TipoUsuario": 0,
        "TipoDocumento": 0,
        "CodigoPostal": 0,
        "IdGenero": 0,
        "FechaCreacion": "0001-01-01T00:00:00",
        "Dominio": "Loyaltech",
        "Trial": false,
        "TrialTime": false,
        "SuspenderCuenta": false,
        "DiasTrial": 0.0,
        "NumeroPagina": 0,
        "MessageId": null,
        "ProfesionId": 0,
        "Profesion": "Informático",
        "PaisId": 0,
        "Pais": "Venezuela                                           ",
        "ProvinciaId": 0,
        "Provincia": "Caracas                            ",
        "Pago": false,
        "IdRol": 0,
        "Id": 179
    },
    {
        "tokenRecovery": null,
        "EmpresaId": null,
        "Email": "",
        "Especialidad": "algoritmos",
        "Clave": "",
        "PrimerNombre": "Pepe",
        "SegundoNombre": "",
        "PrimerApellido": "Lopez",
        "SegundoApellido": "",
        "FechaNacimiento": "0001-01-01T00:00:00",
        "Activo": 0,
        "Lugar": 0,
        "NumeroMovil": "",
        "Licencia": 0,
        "Token": "",
        "EsColegiado": 0,
        "NumeroColegiado": "",
        "UltimaVezLogin": "0001-01-01T00:00:00",
        "PlataformaPago": "",
        "NuevaClave": "",
        "Foto": "~/Image/wjqpblqhajykzsawsy@miucce.com/perfil-wjqpblqhajykzsawsy@miucce.com.jpg",
        "ColegioProfesional": 0,
        "EspecialidadesList": null,
        "InteresesList": null,
        "ProfesionesList": null,
        "NombreUsuario": "",
        "Genero": "",
        "NumeroDocumento": "",
        "Telefono": "",
        "TipoUsuario": 0,
        "TipoDocumento": 0,
        "CodigoPostal": 0,
        "IdGenero": 0,
        "FechaCreacion": "0001-01-01T00:00:00",
        "Dominio": "Loyaltech",
        "Trial": false,
        "TrialTime": false,
        "SuspenderCuenta": false,
        "DiasTrial": 0.0,
        "NumeroPagina": 0,
        "MessageId": null,
        "ProfesionId": 0,
        "Profesion": "Informático",
        "PaisId": 0,
        "Pais": "Venezuela                                           ",
        "ProvinciaId": 0,
        "Provincia": "Caracas                            ",
        "Pago": false,
        "IdRol": 0,
        "Id": 179
    },
    {
        "tokenRecovery": null,
        "EmpresaId": null,
        "Email": "",
        "Especialidad": "developer",
        "Clave": "",
        "PrimerNombre": "Lola",
        "SegundoNombre": "",
        "PrimerApellido": "Lopez",
        "SegundoApellido": "",
        "FechaNacimiento": "0001-01-01T00:00:00",
        "Activo": 0,
        "Lugar": 0,
        "NumeroMovil": "",
        "Licencia": 0,
        "Token": "",
        "EsColegiado": 0,
        "NumeroColegiado": "",
        "UltimaVezLogin": "0001-01-01T00:00:00",
        "PlataformaPago": "",
        "NuevaClave": "",
        "Foto": "~/Image/nvvtzrpvrbdptawjgd@niwghx.com/perfil-nvvtzrpvrbdptawjgd@niwghx.com.jpg",
        "ColegioProfesional": 0,
        "EspecialidadesList": null,
        "InteresesList": null,
        "ProfesionesList": null,
        "NombreUsuario": "",
        "Genero": "",
        "NumeroDocumento": "",
        "Telefono": "",
        "TipoUsuario": 0,
        "TipoDocumento": 0,
        "CodigoPostal": 0,
        "IdGenero": 0,
        "FechaCreacion": "0001-01-01T00:00:00",
        "Dominio": "sadfasffd",
        "Trial": false,
        "TrialTime": false,
        "SuspenderCuenta": false,
        "DiasTrial": 0.0,
        "NumeroPagina": 0,
        "MessageId": null,
        "ProfesionId": 0,
        "Profesion": "Informático",
        "PaisId": 0,
        "Pais": "Venezuela                                           ",
        "ProvinciaId": 0,
        "Provincia": "Maracaíbo                          ",
        "Pago": false,
        "IdRol": 0,
        "Id": 180
    }
];
  //constructor() { }

  getPaises() : ListaPaises[]{
    return this.paices;
  }

  getCiudades() : EstadosPaises[]{
    return this.estados;
  }

  getProfecionales() : ListaProfecionales[]{
    return this.profesionales;
  }

}