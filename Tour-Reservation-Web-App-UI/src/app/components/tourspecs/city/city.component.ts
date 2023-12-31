import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource,  } from '@angular/material/table';
  
import { ToastrService } from 'ngx-toastr';
import { List_City } from 'src/app/contracts/tour_elements/list_city';
import { List_Country } from 'src/app/contracts/tour_elements/list_country';
import { Create_City } from 'src/app/contracts/users/create_city';
import { city } from 'src/app/entities/city';
import { CityService } from 'src/app/services/common/models/city.service';
import { CountryService } from 'src/app/services/common/models/country.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
 
  export class CityComponent  implements OnInit {
    constructor(
      private formBuilder: FormBuilder,
      private cityService: CityService,
      private countryService: CountryService,
      private toastr: ToastrService
    ) {}
  
    displayedColumns: string[] = ['Id', 'CityCountry', 'CityName', 'CityDistance','update', 'delete'];
    dataSource: MatTableDataSource<List_City> = null;
    Country_List: List_Country[];
    
    @ViewChild(MatPaginator) paginator: MatPaginator;
    
    frmCity: FormGroup;
  
    async getCity() {
      const allCity: { totalCount: number; citys: List_City[] } = await this.cityService.read(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5)
      this.dataSource = new MatTableDataSource<List_City>(allCity.citys);
      console.log(this.dataSource);
      this.paginator.length = allCity.totalCount;
    }

    async getCountrys(){
      const allCountrys: { totalCount: number; countrys: List_Country[] } = await this.countryService.read(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5)
      const allAir: {countrys: List_Country[]} = await this.countryService.read()
      
      this.Country_List = allAir.countrys;
    }
  
    async ngOnInit(){
      this.frmCity = this.formBuilder.group({
        CityCountry: ['', [Validators.required]],
        CityName: ['', [Validators.required]],
        CityDistance: [0, [Validators.required]],
      });
  
      await this.getCity();
      await this.getCountrys();
    }
  
    get component() {
      return this.frmCity.controls;
    }
  
    isSubmitted: boolean = false;
  
    async addCity(city: city) {
      if (this.frmCity.invalid) {
        return;
      }
      
      this.toastr.success( "Kayıt Başarıyla Database'e Kaydedilmiştir.", "Şehir Kaydı Başarılı!")
      
      const result: Create_City = await this.cityService.create(city);
      await this.getCity();
    }
  
    opentab() {
      this.isSubmitted = true;
    }
  
    closeTab() {
      this.isSubmitted = false;
    }
  
    async pageChanged() {
      await this.getCity();
    }
  
  }
  