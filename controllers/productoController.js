import ProductoService from "../services/productoService.js";

const productoService = new ProductoService();

class productoController {

    async getProducts(req,res) {

        const products = await productoService.getProducts();
        res.json(products);
    }

    async create(req,res) {
        console.log(req.body);
        const producto = req.body;
        const response = await productoService.create(producto);
        res.status(201).json(response);
    }

    async update(req,res) {
        const {id} = req.params
        const producto = req.body;

        const response = await productoService.update(id,producto);

        res.json(response);

    }

    async delete(req,res) {
        const {id} = req.params
        const response = await productoService.delete(id);
        res.json(response);
    }
}

export default productoController;