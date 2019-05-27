import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todos: Todo[];
  constructor(private todoService: TodoService,
              private router: Router) { }

  public ngOnInit() {
    this.loadAllTodoList();
  }

  loadAllTodoList() {
    this.todos = this.todoService.getAllToDos();
  }

  public onAdd(e) {
    console.log('==========>');
  }

  public onEdit({id}) {
    this.router.navigate(['/todo-detail'], {queryParams: {id}});
  }
}
