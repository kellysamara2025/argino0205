let screenWidth = 800; // Largura da tela
let screenHeight = 600; // Altura da tela
let horizon = screenHeight * 0.6; // Linha do horizonte (60% da altura da tela)

function setup() {
  createCanvas(screenWidth, screenHeight);
  // Não desenhamos o background aqui para poder dividi-lo
}

function draw() {
  // --- Desenha o Campo ---
  // Céu do campo (ou parte superior da paisagem rural)
  background(135, 206, 235); // Azul claro para o céu

  // Grama
  fill(34, 139, 34); // Verde floresta
  noStroke();
  rect(0, horizon, screenWidth, screenHeight - horizon); // Retângulo da grama

  // Sol no campo
  fill(255, 204, 0); // Amarelo
  ellipse(screenWidth * 0.2, horizon * 0.8, 80, 80); // Círculo para o sol

  // --- Desenha a Cidade ---
  // Área da cidade (parte superior da tela)
  // Prédios (silhuetas cinzas)
  fill(80, 80, 80); // Cinza escuro para os prédios
  let numBuildings = 8;
  let buildingWidth = screenWidth / numBuildings;

  for (let i = 0; i < numBuildings; i++) {
    let buildingHeight = random(screenHeight * 0.3, screenHeight * 0.5); // Altura aleatória dos prédios
    rect(i * buildingWidth, screenHeight - buildingHeight, buildingWidth - 5, buildingHeight); // Retângulo do prédio
  }

  // Janelas (opcional, para dar mais detalhe aos prédios)
  fill(255, 255, 100, 150); // Amarelo claro e semi-transparente
  for (let i = 0; i < numBuildings; i++) {
    let buildingBaseX = i * buildingWidth;
    let buildingBaseY = screenHeight - random(screenHeight * 0.3, screenHeight * 0.5); // A altura base precisa ser consistente
    let currentBuildingHeight = screenHeight - buildingBaseY;

    // Desenha algumas janelas aleatoriamente
    for (let j = 0; j < 3; j++) { // 3 fileiras de janelas
      for (let k = 0; k < 2; k++) { // 2 janelas por fileira
        rect(buildingBaseX + 10 + k * (buildingWidth / 2 - 15),
             buildingBaseY + 10 + j * (currentBuildingHeight / 4),
             15, 20);
      }
    }
  }


  // Uma nuvem simples no céu da cidade
  fill(255, 255, 255); // Branco
  ellipse(screenWidth * 0.7, screenHeight * 0.2, 100, 50);
  ellipse(screenWidth * 0.75, screenHeight * 0.18, 80, 40);
  ellipse(screenWidth * 0.65, screenHeight * 0.22, 90, 45);

  // Linha divisória sutil entre campo e cidade
  stroke(150); // Cinza médio
  strokeWeight(2);
  line(0, horizon, screenWidth, horizon);
}

// Para executar este código:
// 1. Vá para o editor online do p5.js (editor.p5js.org).
// 2. Apague o código padrão que está lá.
// 3. Cole este código no editor.
// 4. Clique no botão "Play" para ver o resultado.