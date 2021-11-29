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

const addRecordToFavorites = async(userId, recordId) => {
    const user = await UserSchema.findById(userId);

    if(!user || user.favorites.includes(recordId)){
        throw new Error('You already have -recordName- in your favorites.');
    }

    user.favorites.push(recordId);
    return user.save();
}


export default {
    createUser,
    getUserById,
    getAllUsers,
    getUserByEmail,
    addRecordToFavorites
};