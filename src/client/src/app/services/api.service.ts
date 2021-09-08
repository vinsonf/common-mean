import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl= 'http://localhost:3502/';

  constructor(private http: HttpClient) { }

  getData<T>(resource:string){
   return this.http.get<T>(this.baseUrl + resource)
  }

}
