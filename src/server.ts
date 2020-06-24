import express from 'express';
import '@controllers/UserController';

const app = express();

app.get('/', (request, response) => {
  return response.json({ messge: 'Hello World!' });
});

app.listen(3334);
