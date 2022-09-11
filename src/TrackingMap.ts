import { Destination } from "./Destination";
import { Cargo } from "./Cargo";

export class TrackingMap {
  private googleMap: google.maps.Map;

  constructor(elementId: string){
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: 1.6,
      center: {
        lat: 0,
        lng: 20,
      }
    });
  }

  attachMarker(entity: Destination | Cargo): void {
    const {lat, lon} = entity.location;
    
    new google.maps.Marker({
      map: this.googleMap, 
      position: {lat, lng: lon},
      draggable: true,
      animation: null,
      opacity: 0.5,
    }); 
  

  }
}