import { UserRepository } from "../repository/User.repository";
import { CreateUserDTO } from "../dtos/CreateUserDTO";

export class UserService{
    static async createUser(data: CreateUserDTO){
        const existingUser = await UserRepository.findUserByEmail(data.email);
        if (existingUser){
            return {status: 400, data: {message: 'email já registrado'}};
        }
        const newUser = await UserRepository.createUser(data);
        return {status: 201, data: newUser};
    }
    static async getAllUsers(){
        const users = await UserRepository.findAllUsers();
        return {status: 200, data: users};
    }

    static async getUserById(id: string){
        const user = await UserRepository.findUserById(id);
        if(!user){
            return {status: 404, data: {message: 'usuário não encontrado'}};
        }
        return {status: 200, data: user};
    }
}