import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';

import { ToastrService } from 'ngx-toastr';
import { List_Flight } from 'src/app/contracts/tour_elements/list_flight';
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
    private formBuilder: FormBuilder,
    private flightService: FlightService,
    private toastr: ToastrService,
  ) {}

  displayedColumns: string[] = ['Id', 'FlightCode', 'FlightRegion', 'update', 'delete'];
  dataSource: MatTableDataSource<List_Flight> = null;
  categories: List_Flight[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  frmFlight: FormGroup;

  async getFlights() {
    const allFlights: { totalCount: number; flights: List_Flight[] } = await this.flightService.read(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5)
    this.dataSource = new MatTableDataSource<List_Flight>(allFlights.flights);
    
    const allFlis: {flights: List_Flight[]} = await this.flightService.read()
    console.log(this.dataSource);
    debugger
    this.paginator.length = allFlights.totalCount;
    
    this.flightService.read()

    this.categories = allFlis.flights
  }

  async getAllFlightRegion(){

    
  }
  

  async ngOnInit(){
    this.frmFlight = this.formBuilder.group({
      FlightCode: ['', [Validators.required]],
      FlightRegion: ['', [Validators.required]],
    });

    await this.getFlights();
  }

  get component() {
    return this.frmFlight.controls;
  }

  isSubmitted: boolean = false;

  async addFlight(flight: flight) {
    if (this.frmFlight.invalid) {
      return;
    }
    
    this.toastr.success( "Kayıt Başarıyla Database'e Kaydedilmiştir.", "Uçuş Kaydı Başarılı!")
    
    const result: Create_Flight = await this.flightService.create(flight);
    await this.getFlights();
  }

  opentab() {
    this.isSubmitted = true;
  }

  closeTab() {
    this.isSubmitted = false;
  }

  async pageChanged() {
    await this.getFlights();
  }

}
