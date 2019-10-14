import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  URL:string='https://cors-anywhere.herokuapp.com/http://ec2-13-229-233-153.ap-southeast-1.compute.amazonaws.com:3000/countries';

  constructor(private httpSvc: HttpClient) { }

  getCountries(): Promise<any>{
    return this.httpSvc.get(this.URL).toPromise();
  }

}
