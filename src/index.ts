import { Destination } from './Destination';
import { Cargo } from './Cargo';
import { TrackingMap } from './TrackingMap';
// 
const map = new TrackingMap('g-map');

const destination = new Destination();
console.log(destination);

const cargo = new Cargo();
console.log(cargo);

map.attachMarker(cargo);
map.attachMarker(destination);