import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { HttpClientService } from '../http-client.service';
import { Create_Users } from 'src/app/contracts/users/create_users';
import { users } from 'src/app/entities/users';
import { error } from 'jquery';
import { HttpErrorResponse } from '@angular/common/http';
import { List_Users } from 'src/app/contracts/tour_elements/list_users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private httpClientService: HttpClientService) { }

  async create(users: users): Promise<Create_Users>{
    const observable : Observable<Create_Users | users> = this.httpClientService.post<Create_Users | users>({
      controller:"tourElements/Post/Users"
    }, users);

    return await firstValueFrom(observable) as Create_Users;
  }

  async read(page: number = 0, size: number = 5, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void): Promise<{ totalCount: number; users: List_Users[] }> {
    const promiseData: Promise<{ totalCount: number; users: List_Users[] }> = this.httpClientService.get<{ totalCount: number; users: List_Users[] }>({
      controller: "tourElements/Get/Users",
      queryString: `page=${page}&size=${size}`
    }).toPromise();

    promiseData.then(d => successCallBack())
      .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message))

    return await promiseData;
  }

  async delete(id: string) {
    const deleteObservable: Observable<any> = this.httpClientService.delete<any>({
      controller: "tourElements/Delete/Users"
    }, id);

    await firstValueFrom(deleteObservable);
  }
}