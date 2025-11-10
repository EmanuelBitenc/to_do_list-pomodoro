import { Component } from '@angular/core';
import { HeaderPages } from '../../components/header-pages/header-pages';

@Component({
  selector: 'app-home',
  imports: [HeaderPages],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
