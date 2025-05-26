const container = document.getElementById('puzzle-container');
const pieceCount = 230;
const rows = 15;
const cols = 15;
const imageURL = 'assets/mexico_landscape.jpg';

function createPuzzle() {
  container.style.display = 'grid';
  container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  container.style.width = '800px';
  container.style.height = '800px';
  container.style.border = '2px solid #444';

  for (let i = 0; i < pieceCount; i++) {
    const piece = document.createElement('div');
    piece.classList.add('puzzle-piece');
    const x = i % cols;
    const y = Math.floor(i / cols);
    piece.style.backgroundImage = `url('${imageURL}')`;
    piece.style.backgroundSize = `${cols * 100}% ${rows * 100}%`;
    piece.style.backgroundPosition = `${(x / (cols - 1)) * 100}% ${(y / (rows - 1)) * 100}%`;
    container.appendChild(piece);
  }
}

createPuzzle();
