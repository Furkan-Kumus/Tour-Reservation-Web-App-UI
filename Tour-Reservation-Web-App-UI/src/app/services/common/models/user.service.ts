import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { user } from 'src/app/entities/user';
import { Create_User } from 'src/app/contracts/users/create_user';
import { Observable, firstValueFrom } from 'rxjs';
import { TokenResponse } from 'src/app/contracts/token/tokenResponse';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClientService: HttpClientService, /* private toastrService: CustomToastrService */) { }

  async create(user: user): Promise<Create_User>{
    const observable : Observable<Create_User | user> = this.httpClientService.post<Create_User | user>({
      controller:"users/CreateUser"
    }, user);

    return await firstValueFrom(observable) as Create_User;
  }
  async login(userNameOrEmail: string, password: string,callBackFunction?: () => void): Promise<any> {
    const observable: Observable<any | TokenResponse> = this.httpClientService.post<any | TokenResponse>({
      controller: "users",
      action: "login"
    }, { userNameOrEmail, password })

    const tokenResponse: TokenResponse = await firstValueFrom(observable) as TokenResponse;
    if (tokenResponse) {
      localStorage.setItem("accessToken", tokenResponse.token.accessToken); 
      /* this.toastrService.message("Kullanıcı girişi başarıyla sağlanmıştır.", "Giriş Başarılı", {messageType: ToastrMessageType.Success,        position: ToastrPosition.TopRight}) */
    }


    await firstValueFrom(observable);
    callBackFunction();
  }
}
