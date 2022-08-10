export class Person {

    id?: number;
    persNombre: String;
    persApellido: String;
    persLocalidad: String;
    persTitulo: String;
    persAbout: String;
    persImg: String;

    constructor(persNombre: String, persApellido: String, persLocalidad: String, persTitulo: String, persAbout: String, persImg: String,){
        this.persNombre = persNombre;
        this.persApellido = persApellido;
        this.persLocalidad = persLocalidad;
        this.persTitulo = persTitulo;
        this.persAbout = persAbout;
        this.persImg = persImg;
    }
}
