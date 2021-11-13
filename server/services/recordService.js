import Recordchema from '../models/Record.js';

const getAllRecords = () => {
    return Recordchema.find({});
}



export default {
    getAllRecords
    // getUserById,
    // getAllUsers,
    // updateUser,
    // getUserByEmail,
};
