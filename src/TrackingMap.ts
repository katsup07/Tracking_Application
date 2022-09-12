// _ Contract that other classes must meet to satisfy to be an Entity, or be an arg for attachMarker() in TrackingMap
export interface Entity { // other classes can implement Entity
  type: string;
  location: {
    lat: number;
    lon: number;
  };
  popupText(): string;
  weight: number;
}



export class TrackingMap {
  private googleMap: google.maps.Map;

  constructor(elementId: string){
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: 2,
      center: {
        lat: 0,
        lng: 20,
      }
    });
  }

  attachMarker(entity: Entity): void {
    const {lat, lon} = entity.location;
    
   const marker = new google.maps.Marker({
      map: this.googleMap, 
      position: {lat, lng: lon},
      draggable: true,
      animation: null,
      opacity: 0.5,
    }); 
  
  marker.addListener('click', ()=> {
    const popup = new google.maps.InfoWindow({ 
      content: `<h3 style="color:blue">${entity.type}</h3> ${entity.popupText()}`});
      popup.open(this.googleMap, marker);
  });

  }
}