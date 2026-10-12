import { Component, inject, OnInit, signal } from '@angular/core';
import { Hotel } from '../hotel';
import { HotelCard } from '../hotel-card/hotel-card';
import { HotelService } from '../services/hotel';

@Component({
  imports: [HotelCard],
  selector: 'app-hotels-list',
  styleUrl: './hotels-list.css',
  templateUrl: './hotels-list.html',
})
export class HotelsList implements OnInit {
  title = signal("Available Hotels");

  // Creating a new array that will hold wishList 
  wishlist: any[] = [];
  hotelService = inject(HotelService);
  hotels: Hotel[] = this.hotelService.getHotels();

  ngOnInit(): void {
    console.log(`HotelsList Component Initialized`);
  }

  onHotelBooked(hotel: any): void{
    alert(`Parent heard about booking: ${hotel.title} with a ${hotel.desc}`)
  }

  onWishlistAdded(hotel: any): void{
    alert(`Wishlist event triggered for: ${hotel.title}`);
    // Pushing the hotel that was added to the array so that we can use it in UI
    this.wishlist.push(hotel);
  }

  
}
