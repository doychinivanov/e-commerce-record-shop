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


export default {
    createUser,
    getUserById,
    getAllUsers,
    // updateUser,
    // getUserByEmail,
};