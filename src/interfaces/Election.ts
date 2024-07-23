export interface Election {
    idProceso:      number;
    nombreProceso:  string;
    fechaInicio:    Date;
    fechaFin:       Date;
    tiempoEspera:   number;
    estadoProceso:  string;
    partidoProceso: PartidoProceso[];
    emailAdmin:     string;
}

export interface PartidoProceso {
    idPartido:        number;
    nombrePartido:    string;
    nombrePostulante: string;
    imagenPartido:    boolean;
}

export interface UserElection {
    idUP:       number;
    estadoVoto: string;
    email:      string;
    proceso:    Election;
    idPartido:  null;
}
