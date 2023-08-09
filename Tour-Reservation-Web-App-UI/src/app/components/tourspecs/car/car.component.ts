import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { data } from 'jquery';

import { ToastrService } from 'ngx-toastr';
import { List_Airport } from 'src/app/contracts/tour_elements/list_airport';
import { List_Vehicle } from 'src/app/contracts/tour_elements/list_vehicle';
import { Create_Vehicle } from 'src/app/contracts/users/create_vehicle';
import { vehicle } from 'src/app/entities/vehicle';
import { AirportService } from 'src/app/services/common/models/airport.service';
import { VehicleService } from 'src/app/services/common/models/vehicle.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private vehicleService: VehicleService,
    private airportService: AirportService,
    private toastr: ToastrService
  ) {}

  displayedColumns: string[] = [
    'Id',
    'VehicleCode',
    'VehicleRegion',
    'VehicleLicensePlate',
    'VehicleDriver',
    'VehicleType',
    'VehicleForPeople',
    'update',
    'delete',
  ];

  dataSource: MatTableDataSource<List_Vehicle> = null;
  Vehicle_List: List_Vehicle[];
  Airport_List: List_Airport[];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  frmVehicle: FormGroup;

  async getVehicles() {
    const allVehicles: { totalCount: number; vehicles: List_Vehicle[] } =
      await this.vehicleService.read(
        this.paginator ? this.paginator.pageIndex : 0,
        this.paginator ? this.paginator.pageSize : 5
      );
    const allFlis: { vehicles: List_Vehicle[] } =
      await this.vehicleService.read();

    this.dataSource = new MatTableDataSource<List_Vehicle>(
      allVehicles.vehicles
    );
    console.log(this.dataSource);
    this.paginator.length = allVehicles.totalCount;

    this.Vehicle_List = allFlis.vehicles;
  }
  async getAirports() {
    const allAirports: { totalCount: number; airports: List_Airport[] } =
      await this.airportService.read(
        this.paginator ? this.paginator.pageIndex : 0,
        this.paginator ? this.paginator.pageSize : 5
      );
    const allAir: { airports: List_Airport[] } =
      await this.airportService.read();

    this.Airport_List = allAir.airports;
  }

  async ngOnInit() {
    this.frmVehicle = this.formBuilder.group({
      VehicleCode: ['', [Validators.required]],
      VehicleRegion: ['', [Validators.required]],
    });
    await this.getVehicles();
    await this.getAirports();
  }

  get component() {
    return this.frmVehicle.controls;
  }

  isSubmitted: boolean = false;

  async addVehicle(vehicle: vehicle) {
    if (this.frmVehicle.invalid) {
      return;
    }

    this.toastr.success(
      "Kayıt Başarıyla Database'e Kaydedilmiştir.",
      'Uçuş Kaydı Başarılı!'
    );

    const result: Create_Vehicle = await this.vehicleService.create(vehicle);
    await this.getVehicles();
  }

  opentab() {
    this.isSubmitted = true;
  }

  closeTab() {
    this.isSubmitted = false;
  }

  async pageChanged() {
    await this.getVehicles();
  }
}
