import { Component } from '@angular/core';

@Component({
  selector: 'tile',
  styleUrls: ['./tile.component.css'],
  templateUrl: './tile.component.html'
})
export class TileComponent {
  public ImageUrl: string;

  private getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  constructor() {
    this.ImageUrl = "./images/" + this.getRandomInt(0, 9) + ".png";
  }

}
