import { Component, inject } from '@angular/core';
import { HeaderPages } from '../../components/header-pages/header-pages';
import { TodosService } from '../../service/todos-service';

@Component({
  selector: 'app-todo',
  imports: [HeaderPages],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  readonly todosService = inject(TodosService);

  addTodo(event: Event) {
    event.preventDefault();

    const inputElement = event.target as HTMLInputElement;

    const title = inputElement.value.trim();
    if (!title) return;

    this.todosService.addTask(title);
    inputElement.value = '';
  }
}
