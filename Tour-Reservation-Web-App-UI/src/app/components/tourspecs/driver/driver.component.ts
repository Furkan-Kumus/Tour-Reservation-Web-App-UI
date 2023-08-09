import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  
      ngOnInit(): void {
        throw new Error('Method not implemented.');
      }
    
      isSubmitted: boolean = false;
    
      addDriver() {
        this.isSubmitted = true;
      }
    
      closeTab() {
        this.isSubmitted = false;
      }
    }
    
  

