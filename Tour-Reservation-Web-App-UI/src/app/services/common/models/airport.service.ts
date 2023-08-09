import { Injectable } from '@angular/core';
import { airport } from 'src/app/entities/airport';
import { HttpClientService } from '../http-client.service';
import { Create_Airport } from 'src/app/contracts/users/create_airport';
import { Observable, firstValueFrom } from 'rxjs';
import { List_Airport } from 'src/app/contracts/tour_elements/list_airport';
import { error } from 'jquery';
import { HttpErrorResponse } from '@angular/common/http';

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

  async read(page: number = 0, size: number = 50, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void): Promise<{ totalCount: number; airports: List_Airport[] }> {
    const promiseData: Promise<{ totalCount: number; airports: List_Airport[] }> = this.httpClientService.get<{ totalCount: number; airports: List_Airport[] }>({
      controller: "tourElements/Get/Airport",
      queryString: `page=${page}&size=${size}`
    }).toPromise();

    promiseData.then(d => successCallBack())
      .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message))

    return await promiseData;
  }

  async delete(id: string) {
    const deleteObservable: Observable<any> = this.httpClientService.delete<any>({
      controller: "tourElements/Delete/Airport"
    }, id);

    await firstValueFrom(deleteObservable);
  }
}



  