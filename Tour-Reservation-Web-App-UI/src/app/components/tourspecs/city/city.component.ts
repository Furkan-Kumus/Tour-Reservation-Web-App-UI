import { Component ,OnInit  } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  isSubmitted: boolean = false;

  addCity() {
    this.isSubmitted = true;
  }

  closeTab() {
    this.isSubmitted = false;
  }
}
