import './index.css';
import addScore from './addScore.js';

const newPromise = new Promise((Resolve, Reject) => {
  const scores = [
    {
      name: 'aron',
      score: '69',
    },
    {
      name: 'milu',
      score: '80',
    },
    {
      name: 'abraham',
      score: '60',
    },
    {
      name: 'Jone',
      score: '80',
    },
    {
      name: 'lemlem',
      score: '69',
    },
    {
      name: 'Gebru',
      score: '80',
    },
  ];

  if (scores.length > 0) {
    Resolve(scores);
  } else {
    Reject(new Error('no Data'));
  }
});

newPromise.then(
  (value) => {
    value.forEach((score, id) => {
      addScore(score.name, score.score, id);
    });
  },
  (error) => {
    throw error;
  },
);
