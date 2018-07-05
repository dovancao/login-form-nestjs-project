import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/users.interface';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){}

    @Get(':id')
        findOne(@Param('id') id){
            return `This action returns a #${id} user`;
    }

    @Post()
        create(@Body() createUserDto: CreateUserDto){
            this.userService.create(createUserDto);
            return 'This action adds a new user';
        }

}