import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] 
})
export class HomeComponent {
  menuAberto = false;


services = [
    { title: 'Análise Clínica', image: 'assets/img/isis.jpg' },
    { title: 'RCP', image: 'assets/video/rcp.gif' },
    { title: 'Diagnóstico por Imagem',  image: 'assets/img/pauli.jpg' }
  ]

  toggleMenu() {
    this.menuAberto = !this.menuAberto;
  }
}
