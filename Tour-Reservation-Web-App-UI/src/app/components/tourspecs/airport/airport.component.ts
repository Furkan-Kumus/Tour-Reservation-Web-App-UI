import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.css']
})
export class AirportComponent  implements OnInit {

    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
  
    isSubmitted: boolean = false;
  
    addAirport() {
      this.isSubmitted = true;
    }
  
    closeTab() {
      this.isSubmitted = false;
    }
  }
  
