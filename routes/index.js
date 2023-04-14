const express = require('express');
const routes = express.Router();
const {facultyGetMethod, facultyGetById, facultyPostMethod, facultyPutMethod, deleteFacultyMethod} = require('../controllers/facultyController');

// All related Faculty Routes.
routes.get('/faculty', facultyGetMethod);
routes.get('/faculty/:id', facultyGetById);
routes.post('/faculty', facultyPostMethod);
routes.put('/faculty/:id', facultyPutMethod);
routes.delete('/faculty/:id', deleteFacultyMethod);

module.exports = routes;