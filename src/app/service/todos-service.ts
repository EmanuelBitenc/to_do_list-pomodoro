import { effect, Injectable, signal } from '@angular/core';
import { Todo } from '../model/todo.entity';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  readonly _items = signal<Array<Todo>>([]);

  readonly items = this._items.asReadonly();

  constructor() {
    this._load();

    effect(() => {
      const items = this._items();
      localStorage.setItem('todos', JSON.stringify(items));
    });
  }

  addTask(title: string) {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };
    this._items.update((items) => [...items, newTodo]);
  }

  toggleStatus(id: string) {
    this._items.update((items) =>
      items.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item))
    );
  }

  removeTask(id: string) {
    this._items.update((items) => items.filter((item) => item.id !== id));
  }

  private _load() {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      this._items.set(JSON.parse(storedTodos));
    } else {
      this._items.set([
        { id: crypto.randomUUID(), title: 'Ajustar responsividade do header', completed: false },
        {
          id: crypto.randomUUID(),
          title: 'Adicionar validação simples no formulário de tarefas',
          completed: false,
        },
        {
          id: crypto.randomUUID(),
          title: 'Configurar deploy de demonstração (Netlify)',
          completed: true,
        },
      ]);
    }
  }
}
