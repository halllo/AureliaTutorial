import * as L from 'leaflet';
import environment from './environment';
import {BindingEngine, Disposable, inject, bindable} from 'aurelia-framework';

@inject(BindingEngine)
export class MapControl {

  map: L.Map = null;
  users: L.Marker[] = [];
  pointOfInterests: L.Marker[] = [];

  @bindable items: IItem[];
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
    
    let marker = L.marker([48.99759, 8.4105], { icon: new UserIcon({ iconUrl: 'https://pbs.twimg.com/profile_images/797050317871476736/VktgLGli_400x400.jpg' }) })
    marker.bindPopup("<b>Hello User!</b><br>I am a popup.").addTo(this.map);
    this.users.push(marker);
  }

  private setMarker(event: L.LocationEvent) {
    let location = event.latlng;

    let newMarker = L.marker(location, { icon: new PointOfInterestIcon() });
    newMarker.bindPopup("<b>Hello Point Of Interest</b><br>I am a popup at " + location.toString()).addTo(this.map);
    this.pointOfInterests.push(newMarker);
  }

  public zoomToFit() {
    let group = L.featureGroup(this.users.concat(this.pointOfInterests));
    this.map.fitBounds(group.getBounds());
  }

  public moveTest() {
    let user = this.users[0];
    let oldPosition = user.getLatLng();
    let newPosition = new L.LatLng(oldPosition.lat + 1, oldPosition.lng + 1, oldPosition.alt);
    user.setLatLng(newPosition);
  }

  
  itemsChanged() {
    this.unsubscribeItems();
    this.subscribeItems();
  }

  subscribeItems() {
    if (this.items) {
      this.subscription = this.bindingEngine.collectionObserver(this.items)
        .subscribe(splices => this.listChanged(splices));
    }
  }

  unsubscribeItems() {
    if (this.subscription) {
      this.subscription.dispose();
      this.subscription = null;
    }
  }

  listChanged(splices) {
    let addedItems: IItem[] = [];
    let removedItems: IItem[] = [];
    for (let splice of splices) {
      let spliceAddedItems = this.items.slice(splice.index, splice.index + splice.addedCount);
      addedItems.push(...spliceAddedItems);
      removedItems.push(...splice.removed);
    }

    console.log("all: " + this.items.map(i => i.lat).join(", "));
    console.log("added: " + addedItems.map(i => i.lat).join(", "));
    console.log("removed: " + removedItems.map(i => i.lat).join(", "));
  }
}

export interface IItem {
  lat: number;
  lng: number;
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