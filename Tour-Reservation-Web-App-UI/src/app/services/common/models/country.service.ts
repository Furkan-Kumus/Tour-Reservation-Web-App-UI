import { Injectable } from '@angular/core';
import { Observable, firstValueFrom } from 'rxjs';
import { HttpClientService } from '../http-client.service';
import { Create_Country } from 'src/app/contracts/users/create_country';
import { country } from 'src/app/entities/country';

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
}
