import {MapControl, IItem} from './map-control';

export class Map {

  myItems: IItem[]

  constructor() {
    this.myItems = [];
  }

  add() {
    let random = this.getRandomInt(1, 99)

    let newItem1 = new MyItem();
    newItem1.lat = random;
    this.myItems.push(newItem1);

    let newItem2 = new MyItem();
    newItem2.lat = random + 1;
    this.myItems.push(newItem2);
  }
  
  remove() {
    this.myItems.splice(0, 1);
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

class MyItem {
  lat: number;
  lng: number;
}