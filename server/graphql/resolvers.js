import userService from "../services/userService.js";
import recordService from "../services/recordService.js";
import newsletterService from "../services/newsletterService.js";
import { addCustomerRole, addAdminRole } from "../utils/userClaims.js";

const resolvers = {
    Query: {
        users: async () => userService.getAllUsers(),
        user: async (_, {email}, context) =>  {
            // if(!context.authData) throw new Error('Failed to login!');

            return userService.getUserByEmail(email)
        },
        records: async () => recordService.getAllRecords(),
        record: async(_, {id}) => recordService.getRecordById(id),
        recordsByOldestToNewest: async() =>  recordService.getAllRecordsInDescByYear(),
        recordsByNewestToOldest: async() => recordService.getAllRecordsInAscByYear(),
        newsletterEmails: async() => newsletterService.getAllEmailsThatRequestedNewsletter(),
    },
    Mutation: {
        createNewsletterEmail: (_, {email}) => {
            return newsletterService.addEmailForNewsletter(email);
        },
        createRegularUser: (_, {email, fullName}, context) => {
            // addAdminRole for admin | addCustomerRole for customer
            if(!context.authData) throw new Error('Failed to register!');

            addCustomerRole(context.authData.uid)
            return userService.createUser({email, fullName});
        },
        addRecordToFavorites: (_, {userId, recordId}, context) => {
            if(!context.authData) throw new Error('Unauthorized request!');

            return userService.addRecordToFavorites(userId, recordId)
        },
        removeRecordFromFavorites: (_, {userId, recordId}, context) => {
            if(!context.authData) throw new Error('Unauthorized request!');

            return userService.removeRecordFromFavorites(userId, recordId)
        },
        addRecordToCart: (_, {userId, recordId}, context) => {
            // if(!context.authData) throw new Error('Unauthorized request!');

            return userService.addRecordToCart(userId, recordId);
        }
    },
    User: {
        favorites: async (user) => (await user.populate('favorites')).favorites,
        cart: async (user) => userService.getUserCart(user._id)
    },
    ItemCart: {
        record: async(itemCart) => (await itemCart.populate('record')).record,
    }
}

export default resolvers;