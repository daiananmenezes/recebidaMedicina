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
    const icon = document.getElementById("icon") as HTMLButtonElement;

    const phrases = [
      "1 shotzinho",
      "Fale o nome completo da Pauli e da Isis. Se não souber, tome um shot",
      "Chame alguém para uma competição de dança. Quem perder, bebe",
      "Gire a roleta",
      "Escolha alguém para beber um shot",
      "Se deu mal, 2 shots",
      "Qual a idade da Isis e da Pauli? Se não souber, beba um shot",
      "Fale o nome completo da Pauli e da Isis. Se não souber, tome um shot",
      "Desafie alguém para uma competição de dança. Quem perder, bebe",
      "Gire a roleta",
      "Beba um shot e escolha alguém para beber junto",
      "Conte uma piada engraçada. Se ninguém rir, tome um shot",
      "Qual a idade da Isis e da Pauli? Se não souber, beba um shot",
      "Desafie alguém para um duelo de polegar. Quem perder, bebe",
      "Você se safou! Escolha duas pessoas para beber"
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
  spinBtn.classList.add("disabled"); 
  spinBtn.style.opacity = '0.1'; 
  spinBtn.style.cursor = 'not-allowed'; 
  spinBtn.style.background = 'rgb(56, 54, 54)'; 
  spinBtn.style.color = 'rgb(97, 95, 95)';
  icon.style.color  = 'rgb(97, 95, 95)';

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
      spinBtn.style.opacity = '1'; // Restaurar a opacidade
      spinBtn.style.cursor = 'pointer'; // Restaurar o cursor
      spinBtn.style.background = 'white'; // Restaurar o fundo
      spinBtn.style.color = 'rgb(173, 11, 11)'; // Restaurar a cor do texto
      icon.style.color  = 'rgb(173, 11, 11)';
    }
  }, 200); // Tempo de exibição de cada frase (200 milissegundos)
});




}
}

