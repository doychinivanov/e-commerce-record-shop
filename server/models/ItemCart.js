import pkg from 'mongoose';
const { Schema, model } = pkg;

const ItemCartSchema = new Schema({
    record: {
        type: Schema.Types.ObjectId,
        ref: 'Record',
        required: [true, 'Record ID is required!']
    },
    custumer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User ID is required!']
    },
    quantity: {
        type: Number,
        default: 1
    },
});

export default model('ItemCart', ItemCartSchema);