import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Country',
  templateUrl: './Country.component.html',
  styleUrls: ['./Country.component.css'],
})
export class CountryComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  isSubmitted: boolean = false;

  addCountry() {
    this.isSubmitted = true;
  }

  closeTab() {
    this.isSubmitted = false;
  }
}
