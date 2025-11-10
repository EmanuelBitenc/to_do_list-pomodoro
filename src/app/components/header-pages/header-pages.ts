import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header-pages',
  imports: [],
  templateUrl: './header-pages.html',
  styleUrl: './header-pages.css',
})
export class HeaderPages {
  readonly pageName = input.required<string>();
  readonly pageSub = input.required<string>();
}
