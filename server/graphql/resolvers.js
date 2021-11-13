import userService from "../services/userService.js";
import recordService from "../services/recordService.js";

const resolvers = {
    Query: {
        users: async () => userService.getAllUsers(),
        user: async (_, {id}) =>  userService.getUserById(id),
        records: async () => recordService.getAllRecords()
        
    }
}

export default resolvers;