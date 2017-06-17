import * as L from 'leaflet';
import environment from './environment';
import {BindingEngine, Disposable, inject, bindable} from 'aurelia-framework';

@inject(BindingEngine)
export class MapControl {

  map: L.Map = null;
  pointOfInterests: L.Marker[] = [];

  @bindable markers: IMarker[];
  markersAndLMarkers = new Map<IMarker, L.Marker>();

  bindingEngine: BindingEngine;
  subscription: Disposable;

  constructor(bindingEngine: BindingEngine) {
    this.bindingEngine = bindingEngine;
  }

  public attached() {
    this.map = L.map('mapid', { zoomControl: false }).setView([49.01, 8.40], 13);
    this.map.on('click', e => this.setMarker(<L.LocationEvent>e));
    this.map.addLayer(L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token={accessToken}', { 
      attribution: '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/feedback/" target="_blank">Improve this map</a></strong>',
      minZoom: 3,
      maxZoom: 20,
      accessToken: environment.MAPBOX_AK,
    }));
  }

  private setMarker(event: L.LocationEvent) {
    let location = event.latlng;

    let newMarker = L.marker(location, { icon: new PointOfInterestIcon() });
    newMarker.bindPopup("<b>Hello Point Of Interest</b><br>I am a popup at " + location.toString()).addTo(this.map);
    this.pointOfInterests.push(newMarker);
  }

  public zoomToFit() {
    let allMarkers = Array.from(this.markersAndLMarkers.values()).concat(this.pointOfInterests);
    if (allMarkers.length > 0) {
      let group = L.featureGroup(allMarkers);
      this.map.fitBounds(group.getBounds());
    }
  }

  public moveTest() {
    let user = this.markersAndLMarkers[0];
    let oldPosition = user.getLatLng();
    let newPosition = new L.LatLng(oldPosition.lat + 1, oldPosition.lng + 1, oldPosition.alt);
    user.setLatLng(newPosition);
  }

  
  markersChanged() {
    this.unsubscribeMarkers();
    this.subscribeMarkers();
  }
  subscribeMarkers() {
    if (this.markers) {
      this.subscription = this.bindingEngine.collectionObserver(this.markers)
        .subscribe(splices => this.listChanged(splices));
    }
  }
  unsubscribeMarkers() {
    if (this.subscription) {
      this.subscription.dispose();
      this.subscription = null;
    }
  }

  listChanged(splices) {
    let addedItems: IMarker[] = [];
    let removedItems: IMarker[] = [];
    for (let splice of splices) {
      let spliceAddedItems = this.markers.slice(splice.index, splice.index + splice.addedCount);
      addedItems.push(...spliceAddedItems);
      removedItems.push(...splice.removed);
    }

    console.log("Markers: " + this.markers.map(i => i.lat).join(", "));
    console.log("added: " + addedItems.map(i => i.lat).join(", "));
    console.log("removed: " + removedItems.map(i => i.lat).join(", "));

    for (let added of addedItems) {
      let newMarker = L.marker([added.lat, added.lng], { icon: new UserIcon({ iconUrl: added. icon }) })
      newMarker.bindPopup(added.popup).addTo(this.map);
      this.markersAndLMarkers.set(added, newMarker);
    }

    for (let removed of removedItems) {
      let removedMarker = this.markersAndLMarkers.get(removed);
      this.markersAndLMarkers.delete(removed);
      removedMarker.removeFrom(this.map);
    }

    console.log("LMarkers: " + Array.from(this.markersAndLMarkers.values()).map(m => m.getLatLng().lat).join(", "));
  }
}

export interface IMarker {
  lat: number;
  lng: number;
  icon: string;
  popup: string;
}

let UserIcon = L.Icon.extend({
    options: {
      iconSize:     [90, 90],
      iconAnchor:   [45, 45],
      popupAnchor:  [0, -45],
      className:    'img-circle'
    }
});

let PointOfInterestIcon = L.Icon.extend({
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