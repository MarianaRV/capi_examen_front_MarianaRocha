export interface Deserializable {
  deserialize(input: any): this;
}

export class Domicilio implements Deserializable {
  domicilio!: string;
  numero_exterior!: string;
  colonia!: string;
  cp!: number;
  ciudad!: string;

  deserialize(data: any) {
    Object.assign(this, data);
    return this;
  }

  get() {
    return `Calle: ${this.domicilio}, Núm. exterior: ${this.numero_exterior}, Colonia: ${this.colonia}, Código postal: ${this.cp}, Ciudad: ${this.ciudad}`;
  }
}
