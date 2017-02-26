import { Component } from '@angular/core';

@Component({
  selector: 'tile',
  styleUrls: ['./tile.component.css'],
  templateUrl: './tile.component.html'
})
export class TileComponent {
  public ImageUrl: string;
  public TileClass: {'tileFound': boolean; 'tileNotFound': boolean};

  private getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  public onClick() {
    this.TileClass.tileFound = !this.TileClass.tileFound; 
    this.TileClass.tileNotFound = !this.TileClass.tileNotFound;
  }

  constructor() {
    this.ImageUrl = "./images/" + this.getRandomInt(0, 15) + ".png";
    this.TileClass = {tileFound: false, tileNotFound: true};
  }

}
