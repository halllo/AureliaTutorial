import * as L from 'leaflet';
import environment from './environment';
import {BindingEngine, Disposable, inject, bindable} from 'aurelia-framework';

@inject(BindingEngine)
export class MapControl {

  @bindable onMapClicked;
  @bindable markers: IMarker[];
  markersAndLMarkers = new Map<IMarker, L.Marker>();

  map: L.Map = null;

  bindingEngine: BindingEngine;
  subscription: Disposable;

  constructor(bindingEngine: BindingEngine) {
    this.bindingEngine = bindingEngine;
  }

  public attached() {
    this.map = L.map('mapid', { zoomControl: false }).setView([49.01, 8.40], 13);
    this.map.on('click', (e: L.LocationEvent) => {
      this.onMapClicked({ location: [e.latlng.lat, e.latlng.lng] });
    });
    this.map.addLayer(L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token={accessToken}', { 
      attribution: '© <a href="https://www.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/feedback/" target="_blank">Improve this map</a></strong>',
      minZoom: 3,
      maxZoom: 20,
      accessToken: environment.MAPBOX_AK,
    }));
  }

  public zoomToFit() {
    let allMarkers = Array.from(this.markersAndLMarkers.values());
    if (allMarkers.length > 0) {
      let group = L.featureGroup(allMarkers);
      this.map.fitBounds(group.getBounds());
    }
  }
  
  private markersChanged() {
    this.unsubscribeMarkers();
    this.subscribeMarkers();
  }
  private subscribeMarkers() {
    if (this.markers) {
      this.subscription = this.bindingEngine.collectionObserver(this.markers)
        .subscribe(splices => this.listChanged(splices));
    }
  }
  private unsubscribeMarkers() {
    if (this.subscription) {
      this.subscription.dispose();
      this.subscription = null;
    }
  }

  private listChanged(splices) {
    let addedItems: IMarker[] = [];
    let removedItems: IMarker[] = [];
    for (let splice of splices) {
      let spliceAddedItems = this.markers.slice(splice.index, splice.index + splice.addedCount);
      addedItems.push(...spliceAddedItems);
      removedItems.push(...splice.removed);
    }

    for (let added of addedItems) {
      let newMarker = L.marker([added.lat, added.lng], { 
        icon: this.isImageMarker(added) 
          ? new UserIcon({ iconUrl: added.image }) 
          : new PointOfInterestIcon()
      });
      newMarker.bindPopup(added.popup).addTo(this.map);
      this.markersAndLMarkers.set(added, newMarker);
      added.placed(() => this.markerChanged(added));
    }

    for (let removed of removedItems) {
      let removedMarker = this.markersAndLMarkers.get(removed);
      this.markersAndLMarkers.delete(removed);
      removedMarker.removeFrom(this.map);
      removed.unplaced();
    }

    if (environment.debug) {
      console.log(
        "Markers: " + this.markers.map(i => this.markerString(i)).join(", ") + "\n"
        + "\tadded: " + addedItems.map(i => this.markerString(i)).join(", ") + "\n"
        + "\tremoved: " + removedItems.map(i => this.markerString(i)).join(", ") + "\n"
        + "LMarkers: " + Array.from(this.markersAndLMarkers.values()).map(m => this.coorindatesString(m.getLatLng())).join(", ")
      );
    }
  }

  private markerChanged(marker: IMarker) {
    var lmarker = this.markersAndLMarkers.get(marker);
    let oldPosition = lmarker.getLatLng();
    let newPosition = new L.LatLng(marker.lat, marker.lng);
    lmarker.setLatLng(newPosition);
    lmarker.getPopup().setContent(marker.popup);
    if (environment.debug) {
      console.log(`\tchanged: ${this.coorindatesString(oldPosition)} -> ${this.coorindatesString(newPosition)}`);
    }
  }

  private coorindatesString(position: L.LatLng) {
    return `[${position.lat}, ${position.lng}]`;
  }
  private markerString(marker: IMarker) {
    return `[${marker.lat}, ${marker.lng}]`;
  }
  private isImageMarker(marker: IMarker): marker is IImageMarker {
    return (<IImageMarker>marker).image !== undefined;
  }
}

export interface IMarker {
  lat: number;
  lng: number;
  popup: string;
  placed: (notifyPropertiesChanged: () => void) => void;
  unplaced: () => void;
}

export interface IImageMarker extends IMarker {
  image: string;
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