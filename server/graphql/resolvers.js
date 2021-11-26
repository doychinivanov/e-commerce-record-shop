import userService from "../services/userService.js";
import recordService from "../services/recordService.js";
import newsletterService from "../services/newsletterService.js";
import { addCustomerRole, addAdminRole } from "../utils/userClaims.js";

const resolvers = {
    Query: {
        users: async () => userService.getAllUsers(),
        user: async (_, {id}) =>  userService.getUserById(id),
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
            addCustomerRole(context.authData.uid)
            return userService.createUser({email, fullName});
        }
    },
    User: {
        favorites: async (user) => (await user.populate('favorites')).favorites
    }
}

export default resolvers;