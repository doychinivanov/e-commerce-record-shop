import RecordSchema from '../models/Record.js';

const getAllRecords = (desiredCategory, query) => {

    if(desiredCategory === 'all' && !query) return RecordSchema.find({});

    if(desiredCategory === 'all' && query) return RecordSchema.find({$or: [{name: { $regex : new RegExp(query, "i") }}, {creatorArtist: { $regex : new RegExp(query, "i") }}]});

    if(desiredCategory !== 'all' && query) return RecordSchema.find({category: desiredCategory, $or: [{name: { $regex : new RegExp(query, "i") }}, {creatorArtist: { $regex : new RegExp(query, "i") }}]});

    if(desiredCategory !== 'all' && !query) return RecordSchema.find({category: desiredCategory});
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
