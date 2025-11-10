import { Routes } from '@angular/router';
import { Home } from './screens/home/home';
import { Pomodoro } from './screens/pomodoro/pomodoro';
import { Todo } from './screens/todo/todo';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'todo',
    component: Todo,
  },
  { path: 'pomodoro', component: Pomodoro },
];
