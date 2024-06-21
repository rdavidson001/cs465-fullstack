import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';

import { Trip } from '../models/trips';
import { User } from '../models/user';
import { AuthResponse } from '../models/authresponse';
import { BROWSER_STORAGE } from '../storage';
import { response } from 'express';


@Injectable()
export class TripDataService {

  constructor(private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) {}
  private apiBaseUrl = 'http://localhost:3000/api';
  private url = 'http://localhost:3000/api/trips';

  public Error(error: any):Promise<any> {
    return Promise.reject(error.message || error);
  }

  public getTrips():Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url);
  }


  public  addTrip(formData: Trip) : Observable<Trip>{
    return this.http.post<Trip>(this.url, formData);
    
  
  }

  public getTrip(tripCode: string) : Observable<Trip[]>{
    return this.http.get<Trip[]>(this.url + '/' + tripCode);
  
  }

  public updateTrip(formData: Trip) : Observable<Trip>{
    return this.http.put<Trip>(this.url + '/' + formData.code, formData);
  }
  
  

  public login(user: User):Promise<AuthResponse>{
    return this.makeAuthApiCall('login', user);
  }

  public register(user: User):Promise<AuthResponse>{
    return this.makeAuthApiCall('register', user);
  }

  private handleError(error: any): Promise<any>{
    console.error('Something went wrong, sorry', error);
    return Promise.reject(error.message || error);
  }

  private makeAuthApiCall(urlPath: string, user: User):Promise<AuthResponse>{
   const URL: string = '${this.apiBaseUrl}/${urlPath}';
   return this.http
    .post(URL, user)
    .toPromise()
    .then(response=> response.json() as AuthResponse)
    .catch(this.handleError);
    

  }

  
  
}
