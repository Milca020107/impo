import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
  
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Secundaria', url: '/tutorial', icon: 'library' },
    { title: 'Primaria', url: '/prim', icon: 'nutrition' },
    { title: 'Derechos', url: '/rights', icon: 'heart' },
    { title: 'Muro de la fama', url: '/fame', icon: 'star-half' },
    { title: 'Contacto', url: '/contact', icon: 'call' },

  ];
  public labels = ['Amor propio', 'Esfuerzo', 'Perseverancia', 'Sigue tus sueños', 'Compasión', 'Paciencia'];
  constructor() {}
}
