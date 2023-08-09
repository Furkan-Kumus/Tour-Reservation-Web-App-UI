import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { ToastrService } from 'ngx-toastr';
import { List_Vehicle } from 'src/app/contracts/tour_elements/list_vehicle';
import { Create_Vehicle } from 'src/app/contracts/users/create_vehicle';
import { vehicle } from 'src/app/entities/vehicle';
import { VehicleService } from 'src/app/services/common/models/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
})
export class VehicleComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private vehicleService: VehicleService,
    private toastr: ToastrService
  ) {}

  displayedColumns: string[] = [
    'Id',
    'VehicleCode',
    'VehicleLicensePlate',
    'VehicleDriver',
    'VehicleType',
    'VehicleForPeople',
    'update',
    'delete',
  ];
  dataSource: MatTableDataSource<List_Vehicle> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  frmVehicle: FormGroup;

  async getVehicles() {
    const allVehicles: { totalCount: number; vehicles: List_Vehicle[] } =
      await this.vehicleService.read(
        this.paginator ? this.paginator.pageIndex : 0,
        this.paginator ? this.paginator.pageSize : 5
      );
    this.dataSource = new MatTableDataSource<List_Vehicle>(
      allVehicles.vehicles
    );
    console.log(this.dataSource);

    this.paginator.length = allVehicles.totalCount;
  }

  async ngOnInit() {
    this.frmVehicle = this.formBuilder.group({
      VehicleCode: ['', [Validators.required]],
      VehicleLicensePlate: ['', [Validators.required]],
      VehicleDriver: ['', [Validators.required]],
      VehicleType: ['', [Validators.required]],
      VehicleForPeople: ['', [Validators.required]],
    });

    await this.getVehicles();
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
      'Araba Kaydı Başarılı!'
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
