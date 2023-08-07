import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Observable, firstValueFrom } from 'rxjs';
import { Create_Vehicle } from 'src/app/contracts/users/create_vehicle';
import { vehicle } from 'src/app/entities/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpClientService: HttpClientService) { }

  async create(vehicle: vehicle): Promise<Create_Vehicle>{
    const observable : Observable<Create_Vehicle | vehicle> = this.httpClientService.post<Create_Vehicle | vehicle>({
      controller:"tourElements/Post/Vehicle"
    }, vehicle);

    return await firstValueFrom(observable) as Create_Vehicle;
  }
}
