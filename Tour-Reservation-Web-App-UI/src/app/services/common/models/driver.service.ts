import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_Driver } from 'src/app/contracts/users/create_driver';
import { driver } from 'src/app/entities/driver';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private httpClientService: HttpClientService) { }

  async create(driver: driver): Promise<Create_Driver>{
    const observable : Observable<Create_Driver | driver> = this.httpClientService.post<Create_Driver | driver>({
      controller:"tourElements/Post/Driver"
    }, driver);

    return await firstValueFrom(observable) as Create_Driver;
  }
}
