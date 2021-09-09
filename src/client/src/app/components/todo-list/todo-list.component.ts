import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todos$!: Observable<Todo[]>

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

}
