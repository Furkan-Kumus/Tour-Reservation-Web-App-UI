import { Injectable } from '@angular/core';
import { Create_Region } from 'src/app/contracts/users/create_region';
import { HttpClientService } from '../http-client.service';
import { Observable, firstValueFrom } from 'rxjs';
import { region } from 'src/app/entities/region';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private httpClientService: HttpClientService) { }

  async create(region: region): Promise<Create_Region>{
    const observable : Observable<Create_Region | region> = this.httpClientService.post<Create_Region | region>({
      controller:"tourElements/Post/Region"
    }, region);

    return await firstValueFrom(observable) as Create_Region;
  }
}
