import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { flight } from 'src/app/entities/flight';
import { Create_Flight } from 'src/app/contracts/users/create_flight';
import { Observable, firstValueFrom } from 'rxjs';
import { List_Flight } from 'src/app/contracts/tour_elements/list_flight';
import { error } from 'jquery';
import { HttpErrorResponse } from '@angular/common/http';

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

  async read(page: number = 0, size: number = 5, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void): Promise<{ totalCount: number; flights: List_Flight[] }> {
    const promiseData: Promise<{ totalCount: number; flights: List_Flight[] }> = this.httpClientService.get<{ totalCount: number; flights: List_Flight[] }>({
      controller: "tourElements/Get/Flight",
      queryString: `page=${page}&size=${size}`
    }).toPromise();

    promiseData.then(d => successCallBack())
      .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message))

    return await promiseData;
  }

  async delete(id: string) {
    const deleteObservable: Observable<any> = this.httpClientService.delete<any>({
      controller: "tourElements/Delete/Flight"
    }, id);

    await firstValueFrom(deleteObservable);
  }
}
