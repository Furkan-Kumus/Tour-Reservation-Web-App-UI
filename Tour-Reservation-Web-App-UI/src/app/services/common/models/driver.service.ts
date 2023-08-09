import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { driver } from 'src/app/entities/driver';
import { Create_Driver } from 'src/app/contracts/users/create_driver';
import { Observable, firstValueFrom } from 'rxjs';
import { List_Driver } from 'src/app/contracts/tour_elements/list_driver';
import { error } from 'jquery';
import { HttpErrorResponse } from '@angular/common/http';

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

  async read(page: number = 0, size: number = 5, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void): Promise<{ totalCount: number; drivers: List_Driver[] }> {
    const promiseData: Promise<{ totalCount: number; drivers: List_Driver[] }> = this.httpClientService.get<{ totalCount: number; drivers: List_Driver[] }>({
      controller: "tourElements/Get/Driver",
      queryString: `page=${page}&size=${size}`
    }).toPromise();

    promiseData.then(d => successCallBack())
      .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message))

    return await promiseData;
  }

  async delete(id: string) {
    const deleteObservable: Observable<any> = this.httpClientService.delete<any>({
      controller: "tourElements/Delete/Driver"
    }, id);

    await firstValueFrom(deleteObservable);
  }
}
