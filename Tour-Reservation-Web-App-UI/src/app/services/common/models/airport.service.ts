import { Injectable } from '@angular/core';
import { airport } from 'src/app/entities/airport';
import { HttpClientService } from '../http-client.service';
import { Create_Airport } from 'src/app/contracts/users/create_airport';
import { Observable, firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AirportService {

  constructor(private httpClientService: HttpClientService) { }

  async create(airport: airport): Promise<Create_Airport>{
    const observable : Observable<Create_Airport | airport> = this.httpClientService.post<Create_Airport | airport>({
      controller:"tourElements/Post/Airport"
    }, airport);

    return await firstValueFrom(observable) as Create_Airport;
  }
}
