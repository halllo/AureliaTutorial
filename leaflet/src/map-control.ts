import * as L from 'leaflet';

export class MapControl {

  public attached() {
    let map = L.map('mapid').setView([51.505, -0.09], 13);
    let urlTemplate = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
    map.addLayer(L.tileLayer(urlTemplate, { minZoom: 4 }));
  }

}