import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../model/model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private  Api = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  getAllCountry(){
    return this.http.get<Country[]>(`${this.Api}/all`);
  }

  getCountryByname(name: string): Observable<Country> {
    return this.http.get<Country>(`${this.Api}/name/${name}`);
  }

  getByCode(codes: string[]){
    return this.http.get<Country>(`${this.Api}/alpha?codes=${codes.join(';')}`);
  }
}
