import RecordSchema from '../models/Record.js';

const getAllRecords = () => {
    return RecordSchema.find({});
}

const getRecordById = (recordId) => {
    return RecordSchema.findById(recordId);
}

const getAllRecordsInDescByYear = () => {
    return RecordSchema.find({}).sort({'year': 'desc'});
}

const getAllRecordsInAscByYear = () => {
    return RecordSchema.find({}).sort({'year': 'asc'});
}



export default {
    getAllRecords,
    getRecordById,
    getAllRecordsInDescByYear,
    getAllRecordsInAscByYear
};
