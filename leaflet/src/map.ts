import {MapControl, IMarker} from './map-control';

export class Map {

  myItems: MyItem[];
  
  constructor() {
    this.myItems = [];
  }

  add() {
    let newItem = new MyItem();
    newItem.lat = 48.99759 + Math.random();
    newItem.lng = 8.4105 + Math.random();
    newItem.icon = 'https://pbs.twimg.com/profile_images/797050317871476736/VktgLGli_400x400.jpg';
    newItem.popup = '<b>Hello User!</b><br>I am a popup.';
    this.myItems.push(newItem);
  }
  
  removeLast() {
    this.myItems.splice(this.myItems.length - 1, 1);
  }

  moveLast() {
    let lastItem = this.myItems[this.myItems.length - 1];

    lastItem.lat = lastItem.lat + 0.1;
    lastItem.lng = lastItem.lng + 0.1;
    lastItem.popup = lastItem.popup + "!";

    lastItem.changed();
  }
}

class MyItem implements IMarker {
  lat: number;
  lng: number;
  icon: string;
  popup: string;

  private notifyPropertiesChanged: () => void;
  
  placed(notifyPropertiesChanged: () => void) {
    this.notifyPropertiesChanged = notifyPropertiesChanged;
    console.warn("placed");
  }

  unplaced() {
    console.warn("unplaced");
    this.notifyPropertiesChanged = null;
  }

  changed() {
    if (this.notifyPropertiesChanged) { 
      this.notifyPropertiesChanged();
    }
  }
}