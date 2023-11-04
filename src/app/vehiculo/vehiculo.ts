export class Vehiculo {
    public id: number;
    public marca: string;
    public linea: string;
    public referencia: string;
    public modelo: number;
    public kilometrake: number;
    public color: string;
    public imagen: string;

    public constructor(id: number, marca: string, linea: string, referencia: string, modelo: number, kilometrake: number, color: string, imagen: string) {
        this.id = id;
        this.marca = marca;
        this.linea = linea;
        this.referencia = referencia;
        this.modelo = modelo;
        this.kilometrake = kilometrake;
        this.color = color;
        this.imagen = imagen;
    }
}