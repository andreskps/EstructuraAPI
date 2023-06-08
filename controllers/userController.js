import { request, response } from "express";
import UserService from "../services/userService.js";

const userService = new UserService();
class UserController {

  async getUsers(req = request, res = response) {

    const users = await userService.getUsers();

    res.json(users);
  }
  
  async create(req = request, res = response) {
    const user = req.body;
    const response = await userService.create(user);
    
    res.status(201).json(response);
  }

  async update(req, res) {
    const {id} = req.params;
    const user = req.body;

    const response =  await userService.update(id,user);

    res.json(response);
  }

  async delete(req, res) {
    const {id} = req.params;

    const response = await userService.delete(id);

    res.json(response);
  }
}

export default UserController;
