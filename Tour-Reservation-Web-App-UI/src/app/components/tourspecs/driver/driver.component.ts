import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource,  } from '@angular/material/table';

import { ToastrService } from 'ngx-toastr';
import { List_Driver } from 'src/app/contracts/tour_elements/list_driver';
import { Create_Driver } from 'src/app/contracts/users/create_driver';
import { driver } from 'src/app/entities/driver';
import { DriverService } from 'src/app/services/common/models/driver.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css'],
})
export class DriverComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private driverService: DriverService,
    private toastr: ToastrService,
  ) {}

  displayedColumns: string[] = ['Id', 'DriverName', 'DriverSurname', 'update', 'delete'];
  dataSource: MatTableDataSource<List_Driver> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  frmDriver: FormGroup;

  async getDrivers() {
    const allDrivers: { totalCount: number; drivers: List_Driver[] } = await this.driverService.read(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5)
    this.dataSource = new MatTableDataSource<List_Driver>(allDrivers.drivers);
    console.log(this.dataSource);

    this.paginator.length = allDrivers.totalCount;
  }

  async ngOnInit(){
    this.frmDriver = this.formBuilder.group({
      DriverName: ['', [Validators.required]],
      DriverSurname: ['', [Validators.required]],
    });

    await this.getDrivers();
  }

  get component() {
    return this.frmDriver.controls;
  }

  isSubmitted: boolean = false;

  async addDriver(driver: driver) {
    if (this.frmDriver.invalid) {
      return;
    }

    this.toastr.success( "Kayıt Başarıyla Database'e Kaydedilmiştir.", "Şoför Kaydı Başarılı!")

    const result: Create_Driver = await this.driverService.create(driver);
    await this.getDrivers();
  }

  opentab() {
    this.isSubmitted = true;
  }

  closeTab() {
    this.isSubmitted = false;
  }

  async pageChanged() {
    await this.getDrivers();
  }

}