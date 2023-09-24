import { Types } from 'mongoose';
import UserModel from '../database/models/user.model';
import IUser from '../interfaces/user.interface';

class UserService {

    async createUser(body: object): Promise<IUser> {
        return UserModel.create(body);
    }

    async getAllUsers(pagination: number) {
        return UserModel.find({ 'deleted': false })
            .limit(10)
            .skip(pagination)
            .sort({ createdAt: 'desc' })
            .select('-__v');
    }

    async updateUser(searchDetails: object, update: object): Promise<IUser | null> {
        return await UserModel.findOneAndUpdate({ ...searchDetails, deleted: false }, update, {
            new: true
        });
    }

    async findUsers(searchData: object) {
        return UserModel.find({ ...searchData, deleted: false }).select('-__v');
    }

    async findOneUser(searchData: object) {
        return UserModel.findOne({ ...searchData, deleted: false }).select('-__v');
    }


    softDeleteUser = async (searchParams: Partial<IUser>) => {
        return await UserModel.findOneAndUpdate({ ...searchParams, deleted: false }, { deleted: true }, {
            new: true
        });
    };

    hardDeleteUser = async (searchParams: Partial<IUser>) => {
        return await UserModel.findOneAndDelete(searchParams);
    };

    checkForDuplicate = async (username: string) => {
        // Check for duplicate email
        const existingEmail = await UserModel.findOne({ 'username': username });
        if (existingEmail) return existingEmail;

        return false; // No duplicates found
    }

}

export const userService = new UserService();