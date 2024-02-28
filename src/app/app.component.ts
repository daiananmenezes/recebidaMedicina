import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-poc';

  menuAberto = false;

  services = [
    { title: 'Analise Clinica', description: 'Tratamento de doenças do coração', image: 'assets/img/isis.jpg' },
    { title: 'RCP', description: 'Cuidados médicos para crianças', image: 'assets/video/rcp.gif' },
    { title: 'Diagnostico de imagem', description: 'Tratamento de doenças da pele', image: 'assets/img/pauli.jpg' }
  ];

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }
}
