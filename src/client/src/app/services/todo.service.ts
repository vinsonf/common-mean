import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _todos: Todo[] = [];

  constructor(private apiService: ApiService) {


  }

  get todos(){
  return this._todos ;
  }

  set todos(todos){
  this._todos = todos;
  }

  getTodos(){
    return this.apiService.getData<Todo[]>('todos')
  }
}
