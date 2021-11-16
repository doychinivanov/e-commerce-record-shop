import pkg from 'mongoose';
const { Schema, model } = pkg;

const RecordSchema = new Schema({
    year: {
        type: Number,
        required: [true, 'Please enter a release date for this record!'],
        unique: true,
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
    }
});

export default model('Record', RecordSchema);
