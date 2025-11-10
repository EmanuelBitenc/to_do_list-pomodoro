import { Component } from '@angular/core';
import { MenuItems } from '../menu-items/menu-items';

@Component({
  selector: 'app-menu',
  imports: [MenuItems],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {}
