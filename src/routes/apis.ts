import {Router} from 'express';
import aluguelController from '../app/controllers/aluguelController';
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

    api.use(authMiddleware);

    api.get('/carros/all', carrosController.all);
    api.post('/carros/register', carrosController.register);

    api.get('/aluguel/usuario/:id', aluguelController.usuario);
    api.post('/aluguel/register', aluguelController.register);
    api.delete('/aluguel/delete/:id', aluguelController.destroy);




    return api;
})()
