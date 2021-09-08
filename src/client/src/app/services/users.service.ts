import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [];

  constructor(private apiService: ApiService) {
      this.getUsers();
   }

   getUsers(){
      return this.apiService.getData<User[]>('users');

   }
}
