import RecordSchema from '../models/Record.js';

const getAllRecords = (desiredCategory) => {
    if(desiredCategory === 'all') return RecordSchema.find({});

    return RecordSchema.find({category: desiredCategory});
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
