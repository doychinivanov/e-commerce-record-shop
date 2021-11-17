import pkg from 'mongoose';
const { Schema, model } = pkg;

const NewsletterEmailSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Please enter a valid email address!'],
        unique: true,
    }


});

export default model('NewsletterEmail', NewsletterEmailSchema);