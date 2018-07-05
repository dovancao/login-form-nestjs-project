import { Connection } from 'mongoose';
import { UsersSchema } from './schemas/users.schema';
import { connect } from 'tls';

export const UsersProviders = [
    {
        provide: 'UserModelToken',
        useFactory: (connection: Connection) => connection.model('User', UsersSchema),
        inject: ['DbConnectionToken'],
    },
];