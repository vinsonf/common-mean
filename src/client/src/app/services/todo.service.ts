import { Todo } from './../model/todo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private _todo: Todo[] = [];
  constructor() { }
}
