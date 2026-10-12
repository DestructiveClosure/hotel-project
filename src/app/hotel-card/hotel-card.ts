import { CurrencyPipe, DatePipe, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';

@Component({
  imports: [NgStyle, DatePipe, CurrencyPipe],
  selector: 'app-hotel-card',
  styleUrl: './hotel-card.css',
  templateUrl: './hotel-card.html',
})
export class HotelCard implements OnInit {
  @Input() hotel: any;

  // In the child component to we need to create an EventEmitter with @Output to subscribe to the click
  @Output() hotelBooked = new EventEmitter<any>();

  // Creating an extra Output decorator event to handle wishList feature
  @Output() wishListAdded = new EventEmitter<any>();

  ngOnInit(): void {
    console.log(`${this.hotel.title} initialized`)
  }
  // Instead of using viewDetails we now use onHotelBooked and pass this without the argument to emit the event
  onHotelBooked(): void{
    this.hotelBooked.emit(this.hotel);
  }

  // Creating a new EventEmitter for wishlist

  onAddToWishList(): void{
    this.wishListAdded.emit(this.hotel);
  }

  // viewDetails(title: string): void {
  //   alert(`You've clicked on details for ${title}`)
  // }
}
