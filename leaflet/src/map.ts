import {MapControl, IMarker} from './map-control';

export class Map {

  myItems: IMarker[]

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
  
  remove() {
    this.myItems.splice(this.myItems.length - 1, 1);
  }
}

class MyItem implements IMarker {
  lat: number;
  lng: number;
  icon: string;
  popup: string;
}