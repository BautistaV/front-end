export class persona{
    id?: number;
    persNombre: String;
    persApellido: String;
    persLocalidad: String;
    persTitulo: String;
    persAbout: String;
    persImg: String;

    constructor(persNombre: String, persApellido: String, persLocalidad: String,
        persTitulo: String, persAbout: String, persImg: String,){
        this.persNombre = persNombre;
        this.persApellido = persApellido;
        this.persLocalidad = persLocalidad;
        this.persTitulo = persTitulo;
        this.persAbout = persAbout;
        this.persImg = persImg;
    }
}


/* export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    img: String;

    constructor(nombre: String, apellido: String, img: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
    }
}

*/