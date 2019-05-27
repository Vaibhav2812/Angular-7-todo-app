import { Injectable } from '@angular/core';
import { Todo } from './models/todo';

const DEFAULT_TODO_LIST = [
  {
    id: 1,
    title: 'Prof.',
    salution: 'Mr.',
    firstName: 'Mark',
    middleName: 'Jacob',
    lastName: 'Otto',
    phone: '1234567890',
    email: 'mark_otto@gmail.com'
  },
  {
    id: 2,
    title: 'Dr.',
    salution: 'Mr.',
    firstName: 'Jacob',
    middleName: 'Mark',
    lastName: 'Thornton',
    phone: '0987654321',
    email: 'jacob_thornton@gmail.com'
  }
];
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  public getAllToDos(): Todo[] {
    const todoArray = JSON.parse(sessionStorage.getItem('localData'));
    return todoArray;
  }

  public updateTodoById(todo: Todo) {
    const todoArray = JSON.parse(sessionStorage.getItem('localData'));
    let data = [];
    if (todoArray) {
      todo.id = todoArray.length;
      data = [...todoArray, { ...todo }];
    } else {
      todo.id = 0;
      data = [todo];
    }
    const stringifyData = JSON.stringify(data);
    sessionStorage.setItem('localData', stringifyData);
  }
}
