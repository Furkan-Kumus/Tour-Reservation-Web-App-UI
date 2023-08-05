import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { flight } from 'src/app/entities/flight';
import { Create_Flight } from 'src/app/contracts/users/create_flight';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private httpClientService: HttpClientService) { }

  async create(flight: flight): Promise<Create_Flight>{
    const observable : Observable<Create_Flight | flight> = this.httpClientService.post<Create_Flight | flight>({
      controller:"tourElements/Post/Flight"
    }, flight);

    return await firstValueFrom(observable) as Create_Flight;
  }
}
