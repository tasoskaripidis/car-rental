import { CurrencyPipe, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CarsService, listOfcars } from '../services/cars.service';

@Component({
  selector: 'app-favorite',
  imports: [NgStyle],
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css',
})
export class FavoriteComponent {
  @Input() fav: boolean = false;
  favoriteCars: listOfcars[] = [];

  constructor(private carsService: CarsService) {}

  ngOnInit() {
    this.favoriteCars = this.carsService.getFavorites();
    console.log(this.favoriteCars);
  }

  closebtn(remove: listOfcars): void {
    const removecar = this.favoriteCars.findIndex(
      (car) => car.id === remove.id
    );
    if (removecar != -1) {
      this.favoriteCars.splice(removecar, 1);
    }
  }
}
