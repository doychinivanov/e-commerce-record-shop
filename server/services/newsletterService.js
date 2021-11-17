import NewsletterEmailSchema from '../models/NewsletterEmail.js';

const addEmailForNewsletter = (newEmail) => {
    return NewsletterEmailSchema.create(newEmail);
}

const getAllEmailsThatRequestedNewsletter = () => {
    return NewsletterEmailSchema.find({});
}

export default {
    addEmailForNewsletter,
    getAllEmailsThatRequestedNewsletter
}