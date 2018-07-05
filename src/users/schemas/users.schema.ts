import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
    username : String,
    email : String,
    password : String,
});