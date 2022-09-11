import { faker } from "@faker-js/faker";

export class Cargo {
  trackingId: string;
  location: { lat: number; lon: number;}

  constructor(){
    this.trackingId = faker.datatype.uuid();
    this.location= {
      lat: parseFloat(faker.address.latitude()),
      lon: parseFloat(faker.address.longitude()),
    }
  }
}