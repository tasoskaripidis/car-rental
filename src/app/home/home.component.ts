import { Component, HostListener, Output, EventEmitter } from '@angular/core';
import { CarsService } from '../services/cars.service';
import { listOfcars } from '../services/cars.service';
import { CurrencyPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NgFor, CurrencyPipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  filteredCars: string = '';
  cars: listOfcars[];
  favoriteCars: listOfcars[] = [];
  constructor(private carsService: CarsService, private route: Router) {
    this.cars = this.carsService.getCars();
  }

  filterCar(): listOfcars[] {
    if (!this.filteredCars.trim()) {
      return this.cars;
    }

    return this.cars.filter((el) => {
      return el.model.toLowerCase().includes(this.filteredCars.toLowerCase());
    });
  }

  @HostListener('window:scroll')
  windowSroll(): void {
    const scrollposition = window.scrollY;
    // console.log(scrollposition);
    const arrow = document.querySelector('.arrow');
    if (scrollposition > 450) {
      arrow?.classList.add('arrow-disappear');
    } else if (scrollposition < 450) {
      arrow?.classList.remove('arrow-disappear');
    }
  }

  addBtn(car: listOfcars) {
    this.carsService.addToFavorites(car);
  }
}
