import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Create_Flight } from 'src/app/contracts/users/create_flight';
import { flight } from 'src/app/entities/flight';
import { FlightService } from 'src/app/services/common/models/flight.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
})
export class FlightsComponent implements OnInit {
  constructor(
    /* private toastrService: CustomToastrService, */
    private formBuilder: FormBuilder,
    private flightService: FlightService
  ) {}

  frmFlight: FormGroup;

  ngOnInit(): void {
    this.frmFlight = this.formBuilder.group({
      FlightCode: ['', [Validators.required]],
      FlightRegion: ['', [Validators.required]],
    });
  }

  get component() {
    return this.frmFlight.controls;
  }

  isSubmitted: boolean = false;

  async addFlight(flight: flight) {
    if (this.frmFlight.invalid) {
      return;
    }
    
    const result: Create_Flight = await this.flightService.create(flight);
  }

  opentab() {
    this.isSubmitted = true;
  }

  closeTab() {
    this.isSubmitted = false;
  }
}
