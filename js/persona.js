class Persona{
    constructor(nombre, apellido){
        this._nombre   = nombre;
        this._apellido = apellido;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get nombre(){
        return this._nombre;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get apellido(){
        return this._apellido;
    }

    nombreCompleto(){
        return this._nombre + " " + this._apellido;
    }

}