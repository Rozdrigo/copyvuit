const express = require('express');
const infoPoints = require('../controllers/infoPointController');

const InfoPointRouter = express.Router();

InfoPointRouter.post('/create', infoPoints.createInfoPoint);
InfoPointRouter.get('/getAll', infoPoints.getAllInfoPoints);
InfoPointRouter.get('/getById', infoPoints.getInfoPointById);
InfoPointRouter.put('/update', infoPoints.updateInfoPoint);
InfoPointRouter.delete('/delete', infoPoints.deleteInfoPoint);

module.exports = InfoPointRouter;