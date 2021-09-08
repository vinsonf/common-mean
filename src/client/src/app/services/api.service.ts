import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = "http://localhost:3001/"

  constructor(private http:HttpClient) { }

  get<T>(path:string){
    return this.http.get<T>(this.baseUrl + path);
  }
}
