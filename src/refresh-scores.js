import addScore from './addScore.js';

const loadScores = () => {
  const ScoresContainer = document.getElementById('leaders-container');
  ScoresContainer.innerHTML = '';
  const getScoresData = async () => {
    const request = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2c76ee20-0dca-11ed-abd9-a7c3a9dc1282/scores/',
    );
    const data = await request.json();
    return data.result;
  };

  getScoresData().then(
    (value) => {
      value.forEach((score, id) => {
        addScore(score.user, score.score, id);
      });
    },
    (error) => {
      throw error;
    },
  );
};

export default loadScores;
