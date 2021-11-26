import UserSchema from '../models/User.js';

const createUser = (userData) => {
    const user = new UserSchema(userData);

    return user.save();
}

const getUserById = (userId) => {
    return UserSchema.findById(userId);
}

const getAllUsers = () => {
    return UserSchema.find({});

}


const getUserByEmail = async (email) => {
    const pattern = new RegExp(`^${email}$`, 'i');
    const user = await UserSchema.findOne({ email: { $regex: pattern } });
    return user;
}


export default {
    createUser,
    getUserById,
    getAllUsers,
    getUserByEmail,
    // updateUser,
};