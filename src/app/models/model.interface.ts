export interface ListaPaises {
    Nombre: string;                                           
    Tipo: any;
    Lugar: number;
    Codigo: string;
    Id: number;
}

export interface EstadosPaises{
    id : number;
    name : string;
}

export interface ListaEstadosPaises {
    Nombre: string;                     
    PaisCodigo: String,
    Id: number;
}

export interface ListaProfesiones{
    Descripcion: string;
    Id: string;
}

export interface ListaProfecionales{
    tokenRecovery: any;
    EmpresaId: any;
    Email: string;
    Especialidad: string;
    Clave: string;
    PrimerNombre: string;
    SegundoNombre: string;
    PrimerApellido: string;
    SegundoApellido: string;
    FechaNacimiento: string;
    Activo: number;
    Lugar: number;
    NumeroMovil: string;
    Licencia: number;
    Token: string;
    EsColegiado: number;
    NumeroColegiado: any;
    UltimaVezLogin: string;
    PlataformaPago: string;
    NuevaClave: string;
    Foto: string;
    ColegioProfesional: number;
    EspecialidadesList: any;
    InteresesList: any;
    ProfesionesList: any;
    NombreUsuario: string;
    Genero: string;
    NumeroDocumento: string;
    Telefono: string;
    TipoUsuario: number;
    TipoDocumento: number;
    CodigoPostal: number;
    IdGenero: number;
    FechaCreacion: string;
    Dominio: string;
    Trial: boolean;
    TrialTime: boolean;
    SuspenderCuenta: boolean;
    DiasTrial: number;
    NumeroPagina: number;
    MessageId: any;
    ProfesionId: number;
    Profesion: string;
    PaisId: number;
    Pais: string;                                        
    ProvinciaId: number;
    Provincia: string;                  
    Pago: boolean;
    IdRol: number;
    Id: number;
}

