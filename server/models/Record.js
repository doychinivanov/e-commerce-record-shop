import pkg from 'mongoose';
const { Schema, model } = pkg;

const RecordSchema = new Schema({
    year: {
        type: String,
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
    imageUrl: {
        type: String,
        default: ''
    },
});

export default model('Record', RecordSchema);
