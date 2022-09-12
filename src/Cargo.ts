import { faker } from "@faker-js/faker";
import { Entity } from './TrackingMap'

export class Cargo implements Entity{
  type: string;
  trackingId: string;
  location: { lat: number; lon: number;}
  weight: number;

  constructor(){
    this.type = 'Cargo';
    this.trackingId = faker.datatype.uuid();
    this.location= {
      lat: parseFloat(faker.address.latitude()),
      lon: parseFloat(faker.address.longitude()),
    }
  }

  popupText(): string {
    return `Tracking Id: ${this.trackingId}`
  }
}