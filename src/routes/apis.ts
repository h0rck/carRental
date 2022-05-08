import {Router} from 'express';
// import authMiddleware from '../middleware/auth.js';
import authController from '../app/controllers/authController';

/*
    Aqui são feitas as APIs
*/
export default (() => {

    const api:Router = Router();

    api.get('/user/all', authController.all);
    api.post('/user/register', authController.register);
    api.post('/user/authenticate', authController.authenticate);


    // api.use(authMiddleware);
    // api.get('/allUser', authController.all)

    return api;
})()
