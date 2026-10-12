import { Service } from '@angular/core';
import { Hotel } from '../hotel';

@Service()
export class HotelService {
    private hotels: Hotel[] = [
        {
          id: 1,
          title: "Junior Suite",
          desc: "Spacious and Clean",
          date: new Date().toString(),
          bedrooms: 2,
          bathroom: 1,
          image: "/angularLogo.png",
          price: 1000,
          soldOut: false
        },
        {
          id: 2,
          title: "Luxury Suite",
          desc: "Penthouse and spacious",
          date: new Date().toString(),
          bedrooms: 3,
          bathroom: 2,
          image: "/angularLogo.png",
          price: 1500,
          soldOut: true
        },
      ]

      getHotels(): any {
        return this.hotels;
      }
}
