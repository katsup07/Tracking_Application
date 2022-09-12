import { faker } from '@faker-js/faker';
import { Entity } from './TrackingMap';

export const number = 7;

export class Destination implements Entity {
  type: string;
  receiver: string; // person who will receive package
  location: { lat: number; lon: number; };
  weight: number;

  constructor(){
    this.type = 'Destination';
    this.receiver = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()), 
      lon: parseFloat(faker.address.longitude())
    }
  }

  popupText(): string {
    return `Reciver Name: ${this.receiver}`
  }
}