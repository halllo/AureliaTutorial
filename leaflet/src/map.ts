import {MapControl} from './map-control';

export class Map {

  mapControl: MapControl;

  zoomToBounds() {
    this.mapControl.zoomToFit();
  }

}