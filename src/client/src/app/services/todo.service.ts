import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _todos: Todo[] = [];

  constructor(private apiService: ApiService) { }


}
