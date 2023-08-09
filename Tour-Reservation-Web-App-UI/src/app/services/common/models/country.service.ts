import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { HttpClientService } from '../http-client.service';
import { Create_Country } from 'src/app/contracts/users/create_country';
import { country } from 'src/app/entities/country';
import { error } from 'jquery';
import { HttpErrorResponse } from '@angular/common/http';
import { List_Country } from 'src/app/contracts/tour_elements/list_country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor(private httpClientService: HttpClientService) { }

  async create(country: country): Promise<Create_Country>{
    const observable : Observable<Create_Country | country> = this.httpClientService.post<Create_Country | country>({
      controller:"tourElements/Post/Country"
    }, country);

    return await firstValueFrom(observable) as Create_Country;
  }

  async read(page: number = 0, size: number = 5, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void): Promise<{ totalCount: number; countrys: List_Country[] }> {
    const promiseData: Promise<{ totalCount: number; countrys: List_Country[] }> = this.httpClientService.get<{ totalCount: number; countrys: List_Country[] }>({
      controller: "tourElements/Get/Country",
      queryString: `page=${page}&size=${size}`
    }).toPromise();

    promiseData.then(d => successCallBack())
      .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message))

    return await promiseData;
  }

  async delete(id: string) {
    const deleteObservable: Observable<any> = this.httpClientService.delete<any>({
      controller: "tourElements/Delete/Country"
    }, id);

    await firstValueFrom(deleteObservable);
  }
}