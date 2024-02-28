import { Component } from '@angular/core';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrl: './equipe.component.scss'
})
export class EquipeComponent {
  equipe = [
    { nome: 'Dra. Isis Kovesdy Bravo', image: 'assets/img/IsisFoto.jpg'},
    { nome: 'Dra. Pauli Vicente', image: 'assets/img/PauliFoto.jpg' },
    // Adicione mais membros da equipe conforme necessário
  ];
}