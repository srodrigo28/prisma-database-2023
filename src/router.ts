import { Router } from 'express'

import { 
        CreateLoginController, DeleteLoginController,
        FindAllLoginController, FindLoginController, UpdateLoginController
} from './controllers/Login';

const router = Router();

/* TODOS METHODOS LOGIN */
const findAllLogin = new FindAllLoginController
const findLogin = new FindLoginController
const createLogin = new CreateLoginController
const deleteLogin = new DeleteLoginController
const updateLogin = new UpdateLoginController

/* ROTAS USUARIOS */
router.get('/login', findAllLogin.handle)
router.post('/login', createLogin.handle)
router.put('/login/:id', updateLogin.handle)
router.get('/login/:id', findLogin.handle)
router.delete('/login/:id', deleteLogin.handle)

export { router }