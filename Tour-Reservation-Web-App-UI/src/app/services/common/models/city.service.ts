import { Injectable } from '@angular/core';
import { city } from 'src/app/entities/city';
import { HttpClientService } from '../http-client.service';
import { Create_City } from 'src/app/contracts/users/create_city';
import { Observable, firstValueFrom } from 'rxjs';
import { List_City } from 'src/app/contracts/tour_elements/list_city';
import { error } from 'jquery';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  constructor(private httpClientService: HttpClientService) { }

  async create(city: city): Promise<Create_City>{
    const observable : Observable<Create_City | city> = this.httpClientService.post<Create_City | city>({
      controller:"tourElements/Post/City"
    }, city);

    return await firstValueFrom(observable) as Create_City;
  }

  async read(page: number = 0, size: number = 50, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void): Promise<{ totalCount: number; citys: List_City[] }> {
    const promiseData: Promise<{ totalCount: number; citys: List_City[] }> = this.httpClientService.get<{ totalCount: number; citys: List_City[] }>({
      controller: "tourElements/Get/City",
      queryString: `page=${page}&size=${size}`
    }).toPromise();

    promiseData.then(d => successCallBack())
      .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message))

    return await promiseData;
  }

  async delete(id: string) {
    const deleteObservable: Observable<any> = this.httpClientService.delete<any>({
      controller: "tourElements/Delete/City"
    }, id);

    await firstValueFrom(deleteObservable);
  }
}



  