import userService from "../services/userService.js";
import recordService from "../services/recordService.js";
import newsletterService from "../services/newsletterService.js";

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
    User: {
        favorites: async (user) => (await user.populate('favorites')).favorites
    }
}

export default resolvers;