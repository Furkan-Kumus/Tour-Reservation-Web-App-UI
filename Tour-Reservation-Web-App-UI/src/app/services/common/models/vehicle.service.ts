import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Observable, firstValueFrom } from 'rxjs';
import { Create_Vehicle } from 'src/app/contracts/users/create_vehicle';
import { vehicle } from 'src/app/entities/vehicle';
import { error } from 'jquery';
import { HttpErrorResponse } from '@angular/common/http';
import { List_Vehicle } from 'src/app/contracts/tour_elements/list_vehicle';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private httpClientService: HttpClientService) {}

  async create(vehicle: vehicle): Promise<Create_Vehicle> {
    const observable: Observable<Create_Vehicle | vehicle> =
      this.httpClientService.post<Create_Vehicle | vehicle>(
        {
          controller: 'tourElements/Post/Vehicle',
        },
        vehicle
      );

    return (await firstValueFrom(observable)) as Create_Vehicle;
  }

  async read(
    page: number = 0,
    size: number = 50,
    successCallBack?: () => void,
    errorCallBack?: (errorMessage: string) => void
  ): Promise<{ totalCount: number; vehicles: List_Vehicle[] }> {
    const promiseData: Promise<{
      totalCount: number;
      vehicles: List_Vehicle[];
    }> = this.httpClientService
      .get<{ totalCount: number; vehicles: List_Vehicle[] }>({
        controller: 'tourElements/Get/Vehicle',
        queryString: `page=${page}&size=${size}`,
      })
      .toPromise();

    promiseData
      .then((d) => successCallBack())
      .catch((errorResponse: HttpErrorResponse) =>
        errorCallBack(errorResponse.message)
      );

    return await promiseData;
  }

  async delete(id: string) {
    const deleteObservable: Observable<any> =
      this.httpClientService.delete<any>(
        {
          controller: 'tourElements/Delete/Vehicle',
        },
        id
      );

    await firstValueFrom(deleteObservable);
  }
}
