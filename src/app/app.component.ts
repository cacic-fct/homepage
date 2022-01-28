import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Página inicial', url: '/home', icon: 'home' },
    { title: 'Pandemia da COVID-19', url: '/pandemia', icon: 'medkit' },
    { title: 'Calouros', url: '/calouros', icon: 'people' },
    { title: 'Transparência', url: '/transparencia', icon: 'folder-open' },
    { title: 'Árvore de links', url: '/links', icon: 'list' },
  ];
  constructor() {}
}
