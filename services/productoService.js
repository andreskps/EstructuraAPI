import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class productoService {
  async getProducts() {
    const products = await prisma.producto.findMany();
    return products;
  }

  async create(producto) {
    const { nombre, precio, descripcion } = producto;
    const product = await prisma.producto.create({
      data: { nombre, precio, descripcion },
    });
    return product;
  }

  async update(id, producto) {
    const {nombre, precio, descripcion} = producto;
    const product = await prisma.producto.update({
      where: { id },
      data: { nombre, precio, descripcion }
    });
    return product;
  }

  async delete(id) {
    const product = await prisma.producto.delete({ where: { id} });
    return product;
  }
}


export default productoService;
