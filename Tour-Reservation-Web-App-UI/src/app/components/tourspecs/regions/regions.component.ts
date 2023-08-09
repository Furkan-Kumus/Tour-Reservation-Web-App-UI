
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource} from '@angular/material/table';
  
import { ToastrService } from 'ngx-toastr';
import { List_Region } from 'src/app/contracts/tour_elements/list_region';
import { Create_Region } from 'src/app/contracts/users/create_region';
import { region } from 'src/app/entities/region';
import { RegionService } from 'src/app/services/common/models/region.service';  


@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent  implements OnInit {
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
    const allRegions: { totalCount: number; regions: List_Region[] } = await this.regionService.read(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5)
    this.dataSource = new MatTableDataSource<List_Region>(allRegions.regions);
    console.log(this.dataSource);
    
    this.paginator.length = allRegions.totalCount;
  }

  async ngOnInit(){
    this.frmRegion = this.formBuilder.group({
      RegionCode: ['', [Validators.required]],
      RegionName: ['', [Validators.required]],
      RegionDistance: [0, [Validators.required]],
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

  
 

  
    
