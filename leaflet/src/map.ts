import {MapControl} from './map-control';

export class Map {

  public heading = 'Map Here';
  mapControl: MapControl;

  zoomToBounds() {
    alert("custom element kann noch nicht getriggert werden...")
    debugger;
    this.mapControl.zoomToFit();
  }

}