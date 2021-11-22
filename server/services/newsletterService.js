import NewsletterEmailSchema from '../models/NewsletterEmail.js';

const addEmailForNewsletter = (newEmail) => {
    const emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    if (newEmail.trim() === '' || !emailPattern.test(newEmail.trim())) {
        throw new Error("Please send us a valid email!");
    }

    return NewsletterEmailSchema.create({email:newEmail});
}

const getAllEmailsThatRequestedNewsletter = () => {
    return NewsletterEmailSchema.find({});
}

export default {
    addEmailForNewsletter,
    getAllEmailsThatRequestedNewsletter
}