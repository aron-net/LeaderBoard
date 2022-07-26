const addScore = (name, score, id) => {
  const ScoresContainer = document.getElementById('leaders-container');

  const scoreHTML = document.createElement('div');
  scoreHTML.classList.add('leader-item');
  if (id % 2 === 0) {
    scoreHTML.classList.add('gray');
  }
  scoreHTML.innerHTML = `
        <p class="name">${name}:</p>
        <p class="score">${score}</p>
    `;
  ScoresContainer.appendChild(scoreHTML);
};

export default addScore;