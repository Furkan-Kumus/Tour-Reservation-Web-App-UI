import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource,  } from '@angular/material/table';
  
import { ToastrService } from 'ngx-toastr';
import { List_Country } from 'src/app/contracts/tour_elements/list_country';
import { Create_Country } from 'src/app/contracts/users/create_country';
import { country } from 'src/app/entities/country';
import { CountryService } from 'src/app/services/common/models/country.service';

  
type NewType = country;

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
 
  export class CountryComponent  implements OnInit {
    constructor(
      private formBuilder: FormBuilder,
      private countryService: CountryService,
      private toastr: ToastrService
    ) {}
  
    displayedColumns: string[] = ['Id', 'CountryCode', 'CountryName', 'update', 'delete'];
    dataSource: MatTableDataSource<List_Country> = null;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    
    frmCountry: FormGroup;
  
    async getCountry() {
      const allCountry: { totalCount: number; countrys: List_Country[] } = await this.countryService.read(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5)
      this.dataSource = new MatTableDataSource<List_Country>(allCountry.countrys);
      console.log(this.dataSource);
      this.paginator.length = allCountry.totalCount;
    }
  
    async ngOnInit(){
      this.frmCountry = this.formBuilder.group({
        CountryCode: ['', [Validators.required]],
        CountryName: ['', [Validators.required]],
      });
  
      await this.getCountry();
    }
  
    get component() {
      return this.frmCountry.controls;
    }
  
    isSubmitted: boolean = false;
  
    async addCountry(country: country) {
      if (this.frmCountry.invalid) {
        return;
      }
      
      this.toastr.success( "Kayıt Başarıyla Database'e Kaydedilmiştir.", "Havaalanı Kaydı Başarılı!")
      
      const result: Create_Country = await this.countryService.create(country);
      debugger
      await this.getCountry();
    }
  
    opentab() {
      this.isSubmitted = true;
    }
  
    closeTab() {
      this.isSubmitted = false;
    }
  
    async pageChanged() {
      await this.getCountry();
    }
  
  }
  