import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HotelsList } from './hotels-list/hotels-list';

@Component({
  imports: [RouterOutlet, HotelsList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('hotel-booking-system');
}
