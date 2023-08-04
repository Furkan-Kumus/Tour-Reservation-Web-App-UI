import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent  implements OnInit {
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
  
    isSubmitted: boolean = false;
  
    addRegion() {
      this.isSubmitted = true;
    }
  
    closeTab() {
      this.isSubmitted = false;
    }
  }
  
