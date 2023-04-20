import { SchemaDefinition } from 'mongoose'
import UserModel, { UserDocument } from '../models/user.model';
import { Omit } from 'lodash';

export async function createUser(input: SchemaDefinition<Omit<UserDocument, 'createdAt' | 'updatedAt' | 'comparePassword'>>) {
    try {
        return await UserModel.create(input)
    } catch (e: any) {
        throw new Error(e)
    }
}

export async function validatePassword({email, password}:{email: string, password: string}){
    const user = UserModel.findOne({email})

    if(!user){
        return false
    }

    const isValid = await user.comparePassword(password)
}