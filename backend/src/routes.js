const express = require('express');

const ongController = require('./controllers/ong_controller')
const incidentsController = require('./controllers/incident_controller');
const profileController = require('./controllers/profile_controller');
const sessionController = require('./controllers/session_controller');

const routes = express.Router();

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);
//routes.delete('/ongs/:id', ongController.delete);

routes.get('/incidents', incidentsController.index);
routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id', incidentsController.delete);

routes.get('/profile', profileController.index);

routes.post('/session', sessionController.create);

module.exports = routes;
