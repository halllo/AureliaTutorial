import * as L from 'leaflet';
import environment from './environment';

export class MapControl {

  map: L.Map = null;
  users: L.Marker[] = [];
  pointOfInterests: L.Marker[] = [];

  public attached() {
    this.map = L.map('mapid', { zoomControl: false }).setView([49.01, 8.40], 13);
    this.map.on('click', e => this.setMarker(<L.LocationEvent>e));
    this.map.addLayer(L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token={accessToken}', { 
      attribution: '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/feedback/" target="_blank">Improve this map</a></strong>',
      minZoom: 4,
      accessToken: environment.MAPBOX_AK,
    }));
    
    var marker = L.marker([48.99759, 8.4105], { icon: new UserIcon({ iconUrl: 'https://njks.de/public/images/profile.png' }) })
    marker.bindPopup("<b>Hello User!</b><br>I am a popup.").addTo(this.map);
    this.users.push(marker);
  }

  private setMarker(event: L.LocationEvent) {
    let location = event.latlng;

    var newMarker = L.marker(location, { icon: new PointOfInterestIcon() });
    newMarker.bindPopup("<b>Hello Point Of Interest</b><br>I am a popup at " + location.toString()).addTo(this.map);
    this.pointOfInterests.push(newMarker);
  }

  public zoomToFit() {
    alert("zoom to fit");
    // var group = L.featureGroup(this.users);
    // this.map.fitBounds(group.getBounds());
  }
}

var UserIcon = L.Icon.extend({
    options: {
      iconSize:     [90, 90],
      iconAnchor:   [45, 45],
      popupAnchor:  [0, -45]
    }
});

var PointOfInterestIcon = L.Icon.extend({
    options: {
      iconUrl:      'images/poi.png',
      iconSize:     [25, 41],
      iconAnchor:   [12, 41],
      shadowUrl:    'images/poi_shadow.png',
      shadowSize:   [41, 41],
      shadowAnchor: [13, 41],
      popupAnchor:  [0, -41]
    }
});