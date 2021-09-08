import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [];

  constructor(private apiService: ApiService) {
   }

   getUsers(){
      this.apiService.getData('users');

   }
}
