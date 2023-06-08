import {Router} from 'express';
import UserController from '../controllers/userController.js';

const router = Router();
const userController = new UserController();

router.get('/',userController.getUsers);

router.post('/create',userController.create)

router.put('/update/:id',userController.update );

router.delete('/delete/:id', userController.delete);


export default router;