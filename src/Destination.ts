import { faker } from '@faker-js/faker';

export const number = 7;

export class Destination {
  receiver: string; // person who will receive package
  location: { lat: number; lon: number; };

  constructor(){
    this.receiver = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()), 
      lon: parseFloat(faker.address.longitude())
    }
  }
}