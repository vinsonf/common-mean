import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
private _todo: Todo [] = []
  constructor(private api: ApiService) {
this.getTodo()
   }

   get todos(){
     return this._todo
   }
   getTodo(){
 this.api.get<Todo[]>('todos').subscribe(todos => {
   this._todo = todos
 })
   }
}
