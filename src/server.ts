import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ messge: 'Hello World!' });
});

app.listen(3334);
