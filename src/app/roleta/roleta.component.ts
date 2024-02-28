import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-roleta',
  templateUrl: './index.html',
  styleUrls: ['./roleta.component.scss']
})
export class RoletaComponent {

  ngOnInit() {
    // Obter referências aos elementos HTML
    const wheel = document.getElementById("wheel") as HTMLCanvasElement;
    const spinBtn = document.getElementById("spin-btn") as HTMLButtonElement;
    const finalValue = document.getElementById("final-value") as HTMLElement;

// Array de frases para a roda
const phrases = [
  "1 shotzinho",
  "Fale o nome completo da Pauli e da Isis, ou tome um shot",
  "Chame alguém para uma competição de dança, quem perder, bebe",
  "Gire a roleta",
  "Escolha alguém para beber um shot",
  "Se deu mal, 2 shots",
  "Fale o nome completo da Pauli e da Isis, ou tome um shot",
  "Chame alguém para uma competição de dança, quem perder, bebe",
  "Gire a roleta",
  "Beba um shot e escolha alguém para beber junto",
];

// Função para selecionar uma frase aleatória
const getRandomPhrase = () => {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex];
};

// Lidar com o clique no botão para iniciar a rotação
spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true;
  finalValue.innerHTML = ""; // Limpar o conteúdo anterior

  // Adicionar frase aleatória em um elemento de parágrafo para animação
  const p = document.createElement("p");
  finalValue.appendChild(p);

  let currentIndex = 0;
  let phraseInterval = setInterval(() => {
    p.textContent = phrases[currentIndex];
    currentIndex++;

    if (currentIndex >= phrases.length) {
      clearInterval(phraseInterval);
      // Selecionar uma frase aleatória e exibir
      finalValue.innerHTML = `<p>${getRandomPhrase()}</p>`;
      spinBtn.disabled = false;
    }
  }, 200); // Tempo de exibição de cada frase (200 milissegundos)
});




}
}

