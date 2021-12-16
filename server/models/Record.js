import pkg from 'mongoose';
const { Schema, model } = pkg;

const RecordSchema = new Schema({
    year: {
        type: Number,
        required: [true, 'Please enter a release date for this record!'],
    },
    name: {
        type: String,
        required: [true, 'Please enter valid record name!']
    },
    creatorArtist: {
        type: String,
        required: [true, 'Please enter valid name for album\'s creator!']
    },
    label: {
        type: String,
        required: [true, 'Please enter valid name for record label!']
    },
    imageUrl: {
        type: String,
        default: ''
    },
    category: {
        type: String,
        required: [true, 'A category is required!']
    },
    price: {
        type: Number,
        required: [true, 'Please enter valid record price!']
    },
    description: {
        type: String,
        required: [true, 'A description is required!'],
        minlength: [20, 'The description must be at lease 20 characters!'],
        maxlength: [800, 'The description must not exceed 800 characters!']
    },
});

export default model('Record', RecordSchema);
