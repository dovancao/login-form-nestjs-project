import request from 'supertest';
import { Test } from '@nestjs/testing';
import { UsersController } from '../src/users/users.controller';
import { UsersService } from '../src/users/users.service';

describe('UsersController', () => {
    let usersController: UsersController;
    let usersService: UsersService;

    beforeEach(() => {
        usersService = new UsersService();
        usersController = new UsersController(usersService)
    });

    describe('create', ())
})