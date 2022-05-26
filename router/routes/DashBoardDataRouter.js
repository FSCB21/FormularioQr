const router = require("express").Router();

const { DashBoardDataController } = require("../../controller/DashBoardDataController");
const { validationGetMensualData } = require("../../validations/validationDashBoardData");

router.get('/get-data-cards', DashBoardDataController.getDataCartas)

router.get('/get-data-count-lugar-registro', validationGetMensualData, DashBoardDataController.getDataConteoMensualLugarRegistro)

router.get('/get-data-age', DashBoardDataController.getDataAge)

module.exports =  router