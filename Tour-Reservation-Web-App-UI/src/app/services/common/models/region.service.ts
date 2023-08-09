import { Injectable } from '@angular/core';
import { Create_Region } from 'src/app/contracts/users/create_region';
import { HttpClientService } from '../http-client.service';
import { Observable, firstValueFrom } from 'rxjs';
import { region } from 'src/app/entities/region';


import { error } from 'jquery';
import { HttpErrorResponse } from '@angular/common/http';
import { List_Region } from 'src/app/contracts/tour_elements/list_region';


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
  async read(page: number = 0, size: number = 5, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void): Promise<{ totalCount: number; regions: List_Region[] }> {
    const promiseData: Promise<{ totalCount: number; regions: List_Region[] }> = this.httpClientService.get<{ totalCount: number; regions: List_Region[] }>({
      controller: "tourElements/Get/Region",
      queryString: `page=${page}&size=${size}`
    }).toPromise();

    promiseData.then(d => successCallBack())
      .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message))

    return await promiseData;
  }

  async delete(id: string) {
    const deleteObservable: Observable<any> = this.httpClientService.delete<any>({
      controller: "tourElements/Delete/Region"
    }, id);

    await firstValueFrom(deleteObservable);
  }
}







