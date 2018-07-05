import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './interfaces/users.interface';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(
    @Inject('UserModelToken')
        private readonly usersModel: Model<User>,
    ){}

    async create(createUserDto: CreateUserDto): Promise<User>{
        const createUser = new this.usersModel(createUserDto);
        return await createUser.save();
    }

    async findOneById(userId): Promise<User>{
        return await this.usersModel.findOne(userId);
    }

}