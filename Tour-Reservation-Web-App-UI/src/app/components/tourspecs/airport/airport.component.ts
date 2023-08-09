import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource,  } from '@angular/material/table';
  
import { ToastrService } from 'ngx-toastr';
import { List_Airport } from 'src/app/contracts/tour_elements/list_airport';
import { Create_Airport } from 'src/app/contracts/users/create_airport';
import { airport } from 'src/app/entities/airport';
import { AirportService } from 'src/app/services/common/models/airport.service';

  
type NewType = airport;

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.css']
})
 
  export class AirportComponent  implements OnInit {
    constructor(
      private formBuilder: FormBuilder,
      private airportService: AirportService,
      private toastr: ToastrService
    ) {}
  
    displayedColumns: string[] = ['Id', 'AirportCode', 'AirportName', 'AirportCountry','update', 'delete'];
    dataSource: MatTableDataSource<List_Airport> = null;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    
    frmAirport: FormGroup;
  
    async getAirport() {
      const allAirport: { totalCount: number; airports: List_Airport[] } = await this.airportService.read(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5)
      this.dataSource = new MatTableDataSource<List_Airport>(allAirport.airports);
      console.log(this.dataSource);
      this.paginator.length = allAirport.totalCount;
    }
  
    async ngOnInit(){
      this.frmAirport = this.formBuilder.group({
        AirportCode: ['', [Validators.required]],
        AirportName: ['', [Validators.required]],
        AirportCountry: ['', [Validators.required]],
      });
  
      await this.getAirport();
    }
  
    get component() {
      return this.frmAirport.controls;
    }
  
    isSubmitted: boolean = false;
  
    async addAirport(airport: airport) {
      if (this.frmAirport.invalid) {
        return;
      }
      
      this.toastr.success( "Kayıt Başarıyla Database'e Kaydedilmiştir.", "Havaalanı Kaydı Başarılı!")
      
      const result: Create_Airport = await this.airportService.create(airport);
      await this.getAirport();
    }
  
    opentab() {
      this.isSubmitted = true;
    }
  
    closeTab() {
      this.isSubmitted = false;
    }
  
    async pageChanged() {
      await this.getAirport();
    }
  
  }
  