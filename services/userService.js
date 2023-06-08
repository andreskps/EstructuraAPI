import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserService {
  async getUsers() {
    //mostrar los usuarios con state true
    const users = await prisma.user.findMany({
      where: {
        state: true,
      },
    });
    return users;
  }
  async create(user) {
    const { name, email, password} = user;

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return { message: "se creo el usario correctamente", newUser };
  }

  async update(id, user) {
    console.log(id);
    console.log(user);
    const { name, email, password, edad } = user;

    const updateUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name,
        email,
        password,
        edad,
      },
    });

    return { message: "se actualizo el usario correctamente", updateUser };
  }
  async delete(id) {
    // const deleteUser = await prisma.user.delete({
    //   where: {
    //     id: id,
    //   }
    // })

    const deleteUser = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        state: false,
      },
    });
    return { message: "se elimino el usario correctamente", deleteUser };
  }
}

export default UserService;
