import UserSchema from '../models/User.js';
import RecordSchema from '../models/Record.js';
import ItemCartSchema from '../models/ItemCart.js';

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

const addRecordToFavorites = async (userId, recordId) => {
    const user = await UserSchema.findById(userId);
    const recordName = await RecordSchema.findById(recordId, { name: 1, _id: 0 });

    if (!user) throw new Error(`Unauthorized.`);

    if (user.favorites.includes(recordId)) {
        throw new Error(`You already have ${recordName.name} in your favorites.`);
    }

    user.favorites.push(recordId);
    return user.save();
}

const removeRecordFromFavorites = async (userId, recordId) => {
    const user = await UserSchema.findById(userId);

    if (!user) throw new Error(`Unauthorized.`);

    if (!user.favorites.includes(recordId)) {
        throw new Error(`You can\'t remove a course you have not added.`);
    }

    user.favorites.splice(user.favorites.indexOf(recordId), 1);
    return user.save();
}

const addRecordToCart = async (userId, recordId) => {
    if (!userId || !recordId) throw new Error(`Unauthorized.`);

    const existingCartItem = await ItemCartSchema.findOne({record: recordId, custumer: userId});

    if(!existingCartItem) {
        const cartItem = new ItemCartSchema({record: recordId, custumer: userId});

        return cartItem.save();
    } else {
        existingCartItem.quantity += 1;
        return existingCartItem.save();
    }
}

const removeFromCart = async (userId, recordId) => {
    if (!userId || !recordId) throw new Error(`Unauthorized.`);

    const existingCartItem = await ItemCartSchema.findOne({record: recordId, custumer: userId});

    if(!existingCartItem) throw new Error('No such item in cart!');

    existingCartItem.quantity -= 1;
    existingCartItem.save();

    if(existingCartItem.quantity <= 0) {
        return ItemCartSchema.findOneAndDelete({record: recordId});
    }

    return existingCartItem;
}

const deleteItemFromCart = async (itemCartId) => ItemCartSchema.findByIdAndDelete(itemCartId);

const updateItemQuanityInCart = async(userId, cartItemId, newQuantity) => {
    if(newQuantity <= 0) throw new Error('Invalid quantity!');

    const existingCartItem = await ItemCartSchema.findOne({_id: cartItemId, custumer: userId});

    if(!existingCartItem) throw new Error('No such item in cart!');

    existingCartItem.quantity = newQuantity;
    
    return existingCartItem.save();
}

const getUserCart = (userId) => ItemCartSchema.find({custumer: userId});


export default {
    createUser,
    getUserById,
    getAllUsers,
    getUserByEmail,
    addRecordToFavorites,
    removeRecordFromFavorites,
    addRecordToCart,
    getUserCart,
    removeFromCart,
    updateItemQuanityInCart,
    deleteItemFromCart
};