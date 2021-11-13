import pkg from 'mongoose';
const { Schema, model } = pkg;

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Please enter a valid email address!'],
        unique: true,
    },
    fullName: {
        type: String,
        required: [true, 'Please enter your full name!']
    },
    imageUrl: {
        type: String,
        default: ''
    },
});

export default model('User', UserSchema);