import { User } from "../infra/entities/user.entity";
import { Repository } from "typeorm";
import bcrypt from 'bcrypt'

export default class UserServices {
    
    public constructor(
        private readonly userRepository: Repository<User>
    ){ }

    public async createUser(user: User) {
        user.password = await bcrypt.hash(user.password, 10)
        return this.userRepository.save(user)
    }
}