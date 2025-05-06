import User from "../models/User";
import { CreateUserDTO } from "../dtos/CreateUserDTO";

export class UserRepository{
    static async createUser(data: CreateUserDTO){
        const user = new User(data);
        return user.save();
    }
    static async findAllUsers(){
        return User.find();
    }
    static async findUserById(id: string){
        return User.findById(id);
    }
    static async findUserByEmail(email: string){
        return User.findOne({email});
    }
}