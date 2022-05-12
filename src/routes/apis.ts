import {Router} from 'express';
import reservasController from '../app/controllers/reservasController';
import authMiddleware from '../middleware/auth';
import authController from '../app/controllers/authController';
import carrosController from '../app/controllers/carrosController';

/*
    Aqui são feitas as APIs
*/
export default (() => {

    const api:Router = Router();

    api.get('/user/all', authController.all);
    api.post('/user/register', authController.register);
    api.post('/user/authenticate', authController.authenticate);

    // api.use(authMiddleware);

    api.get('/carros', carrosController.all);
    api.post('/carro', carrosController.register);

    api.get('/reserva/:placa', reservasController.busca);

    api.post('/reserva', reservasController.register);
    api.delete('/reserva/:id', reservasController.destroy);




    return api;
})()
