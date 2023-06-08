import { Router } from "express";
import ProductoController from "../controllers/productoController.js";

const router = Router();
const productoController = new ProductoController();

router.get('/',productoController.getProducts);

router.post('/',productoController.create);

router.put('/:id',productoController.update);

router.delete('/:id',productoController.delete);


export default router;