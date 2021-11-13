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
    favorites: [{
        type: Schema.Types.ObjectId,
        ref: 'Record',
        default: []
    }],
    imageUrl: {
        type: String,
        default: ''
    },
});

export default model('User', UserSchema);