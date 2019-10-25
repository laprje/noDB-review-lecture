require('dotenv').config();
const express = require('express');
const {SERVER_PORT} = process.env;
const ctrl = require('./controllers/controller')

//TOP LEVEL MIDDLEWARE (READS RAW DATA AS JSON)
const app = express();
app.use(express.json());

//ENDPOINTS:
app.post('/api/pokemon', ctrl.catch)
app.get('/api/pokemon', ctrl.getPokedex)
app.put('/api/pokemon/:id', ctrl.rename)
app.delete('/api/pokemon/:id', ctrl.release)

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}.`))