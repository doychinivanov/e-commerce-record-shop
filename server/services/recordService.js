import RecordSchema from '../models/Record.js';

const getAllRecords = () => {
    return RecordSchema.find({});
}

const getRecordById = (recordId) => {
    return RecordSchema.findById(recordId);
}



export default {
    getAllRecords,
    getRecordById
};
