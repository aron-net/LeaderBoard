import loadScores from './refresh-scores.js';

const submitScore = (user, score) => {
  if (user || score !== '') {
    const sentToApi = async () => {
      const request = await fetch(
        'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2c76ee20-0dca-11ed-abd9-a7c3a9dc1282/scores/',
        {
          method: 'POST',
          body: JSON.stringify({
            user: `${user}`,
            score,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        },
      );
      return request.status;
    };
    sentToApi()
      .then((res) => res)
      .then(() => {
        loadScores();
      });
  }
};

export default submitScore;
