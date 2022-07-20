import { Domicilio } from "./Domicilio";

export interface Deserializable {
  deserialize(input: any): this;
}

export class Usuario implements Deserializable {
  nombre!: string;
  fechaNacimiento!: Date;
  edad!: number;
  domicilio!: Domicilio;

  deserialize(userData: any) {
    this.nombre = userData.name;
    this.fechaNacimiento = userData.fecha_nacimiento;
    this.edad = userData.edad;
    this.domicilio = new Domicilio().deserialize(userData.domicilio);
    return this;
  }
}
