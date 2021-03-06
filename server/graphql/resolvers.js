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
        userCart: async (_, {userId}, context) => {
            // check if userId matches the id of currently logged user
            return userService.getUserCart(userId);
        },
        records: async (_, {category, query, pageNumber}) => recordService.getAllRecords(category, query, pageNumber),
        record: async(_, {id}) => recordService.getRecordById(id),
        recordsByOldestToNewest: async() =>  recordService.getAllRecordsInDescByYear(),
        recordsByNewestToOldest: async() => recordService.getAllRecordsInAscByYear(),
        newsletterEmails: async() => newsletterService.getAllEmailsThatRequestedNewsletter(),
        getThreeNewestRecords: async() => recordService.getThreeNewestRecords()
    },
    Mutation: {
        createNewsletterEmail: (_, {email}) => {
            return newsletterService.addEmailForNewsletter(email);
        },
        createRegularUser: (_, {email, fullName}, context) => {
            // addAdminRole for admin | addCustomerRole for customer
            if(!context.authData) throw new Error('Failed to register!');

            addCustomerRole(context.authData.uid)
            // addAdminRole(context.authData.uid);
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
            if(!context.authData) throw new Error('Unauthorized request!');

            return userService.addRecordToCart(userId, recordId);
        },
        removeFromCart: (_, {userId, recordId}, context) => {
            if(!context.authData) throw new Error('Unauthorized request!');

            return userService.removeFromCart(userId, recordId);
        },
        updateItemQuanityInCart: (_, {userId, cartItem, quantity}, context) => {
            if(!context.authData) throw new Error('Unauthorized request!');

            return userService.updateItemQuanityInCart(userId, cartItem, quantity);
        },
        deleteItemFromCart: (_, {cartItem}, context) => {
            if(!context.authData) throw new Error('Unauthorized request!');

            return userService.deleteItemFromCart(cartItem);
        },
        createNewRecord: (_, {name, year, creatorArtist, label, imageUrl, category, price, description}, context) => {
            if(context.authData.role !== 'admin') throw new Error('Unauthorized!');

            return recordService.createNewRecord({name, year, creatorArtist, label, imageUrl, category, price, description});
        },
        deleteRecord: (_, {recordId}, context) => {
            if(context.authData.role !== 'admin') throw new Error('Unauthorized!');

            return recordService.deleteRecord(recordId);
        },
        updateRecord: (_, {recordId, name, year, creatorArtist, label, imageUrl, category, price, description}, context) => {
            if(context.authData.role !== 'admin') throw new Error('Unauthorized!');

            return recordService.updateRecord(recordId, {name, year, creatorArtist, label, imageUrl, category, price, description});
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