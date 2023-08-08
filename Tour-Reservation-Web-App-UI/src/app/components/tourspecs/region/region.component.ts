
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource,  } from '@angular/material/table';
  
import { ToastrService } from 'ngx-toastr';
import { List_Region } from 'src/app/contracts/tour_elements/list_region';
import { Create_Region } from 'src/app/contracts/users/create_region';
import { region } from 'src/app/entities/region';
import { RegionService } from 'src/app/services/common/models/region.service';
type NewType = region;
  


@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent  implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private regionService: RegionService,
    private toastr: ToastrService
  ) {}

  displayedColumns: string[] = ['Id', 'RegionCode', 'RegionName', 'RegionDistance','update', 'delete'];
  dataSource: MatTableDataSource<List_Region> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  frmRegion: FormGroup;

  async getRegion() {
    const allRegion: { totalCount: number; region: List_Region[] } = await this.regionService.read(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5)
    this.dataSource = new MatTableDataSource<List_Region>(allRegion.region);
    console.log(this.dataSource);
    
    this.paginator.length = allRegion.totalCount;
  }

  async ngOnInit(){
    this.frmRegion = this.formBuilder.group({
      RegionCode: ['', [Validators.required]],
      RegionName: ['', [Validators.required]],
      RegionDistance: ['', [Validators.required]],
    });

    await this.getRegion();
  }

  get component() {
    return this.frmRegion.controls;
  }

  isSubmitted: boolean = false;

  async addRegion(region: region) {
    if (this.frmRegion.invalid) {
      return;
    }
    
    this.toastr.success( "Kayıt Başarıyla Database'e Kaydedilmiştir.", "Havaalanı Kaydı Başarılı!")
    
    const result: Create_Region = await this.regionService.create(region);
    await this.getRegion();
  }

  opentab() {
    this.isSubmitted = true;
  }

  closeTab() {
    this.isSubmitted = false;
  }

  async pageChanged() {
    await this.getRegion();
  }

}

  
 

  
    
