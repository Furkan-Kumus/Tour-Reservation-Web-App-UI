import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';

import { ToastrService } from 'ngx-toastr';
import { List_Hotel } from 'src/app/contracts/tour_elements/list_hotel';
import { Create_Hotel } from 'src/app/contracts/users/create_hotel';
import { hotel } from 'src/app/entities/hotel';
import { HotelService } from 'src/app/services/common/models/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private hotelService: HotelService,
    private toastr: ToastrService
  ) {}

  displayedColumns: string[] = ['Id', 'HotelCode', 'HotelRegion', 'update', 'delete'];
  dataSource: MatTableDataSource<List_Hotel> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  frmHotel: FormGroup;

  async getHotel() {
    const allHotel: { totalCount: number; hotel: List_Hotel[] } = await this.hotelService.read(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5)
    this.dataSource = new MatTableDataSource<List_Hotel>(allHotel.hotel);
    console.log(this.dataSource);
    
    this.paginator.length = allHotel.totalCount;
  }

  async ngOnInit(){
    this.frmHotel = this.formBuilder.group({
      HotelCode: ['', [Validators.required]],
      HotelRegion: ['', [Validators.required]],
    });

    await this.getHotel();
  }

  get component() {
    return this.frmHotel.controls;
  }

  isSubmitted: boolean = false;

  async addHotel(hotel: hotel) {
    if (this.frmHotel.invalid) {
      return;
    }
    
    this.toastr.success( "Kayıt Başarıyla Database'e Kaydedilmiştir.", "Hotel Kaydı Başarılı!")
    
    const result: Create_Hotel = await this.hotelService.create(hotel);
    await this.getHotel();
  }

  opentab() {
    this.isSubmitted = true;
  }

  closeTab() {
    this.isSubmitted = false;
  }

  async pageChanged() {
    await this.getHotel();
  }

}
