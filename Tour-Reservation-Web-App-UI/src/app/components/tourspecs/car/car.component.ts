import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent  implements OnInit {

    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
  
    isSubmitted: boolean = false;
  
    addCar() {
      this.isSubmitted = true;
    }
  
    closeTab() {
      this.isSubmitted = false;
    }
  }
  
