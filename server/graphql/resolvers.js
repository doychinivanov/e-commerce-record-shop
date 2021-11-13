import userService from "../services/userService.js";
import recordService from "../services/recordService.js";

const resolvers = {
    Query: {
        users: async () => userService.getAllUsers(),
        user: async (_, {id}) =>  userService.getUserById(id),
        records: async () => recordService.getAllRecords(),
        record: async(_, {id}) => recordService.getRecordById(id)
        
    }
}

export default resolvers;