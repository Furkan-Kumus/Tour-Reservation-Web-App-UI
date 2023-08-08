import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_Hotel } from 'src/app/contracts/users/create_hotel';
import { Observable, firstValueFrom } from 'rxjs';
import { List_Hotel } from 'src/app/contracts/tour_elements/list_hotel';
import { error } from 'jquery';
import { HttpErrorResponse } from '@angular/common/http';
import { hotel } from 'src/app/entities/hotel';


@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private httpClientService: HttpClientService) { }

  async create(hotel:hotel): Promise<Create_Hotel>{
    const observable : Observable<Create_Hotel | hotel> = this.httpClientService.post<Create_Hotel | hotel>({
      controller:"tourElements/Post/Hotel"
    }, hotel);

    return await firstValueFrom(observable) as Create_Hotel;
  }

  async read(page: number = 0, size: number = 5, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void): Promise<{ totalCount: number;  hotel: List_Hotel[] }> {
    const promiseData: Promise<{ totalCount: number; hotel: List_Hotel[] }> = this.httpClientService.get<{ totalCount: number; hotel: List_Hotel[] }>({
      controller: "tourElements/Get/Hotel",
      queryString: `page=${page}&size=${size}`
    }).toPromise();

    promiseData.then(d => successCallBack())
      .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message))

    return await promiseData;
  }

  async delete(id: string) {
    const deleteObservable: Observable<any> = this.httpClientService.delete<any>({
      controller: "tourElements/Delete/Hotel"
    }, id);

    await firstValueFrom(deleteObservable);
  }
}
