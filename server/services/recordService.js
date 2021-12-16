import RecordSchema from '../models/Record.js';

const getAllRecords = async (desiredCategory, query) => {
    if(desiredCategory === 'all' && !query) return RecordSchema.find({});

    if(desiredCategory === 'all' && query) return RecordSchema.find({$or: [{name: { $regex : new RegExp(query, "i") }}, {creatorArtist: { $regex : new RegExp(query, "i") }}]});

    if(desiredCategory !== 'all' && query) return RecordSchema.find({category: desiredCategory, $or: [{name: { $regex : new RegExp(query, "i") }}, {creatorArtist: { $regex : new RegExp(query, "i") }}]});

    if(desiredCategory !== 'all' && !query) return RecordSchema.find({category: desiredCategory});
}

const createNewRecord = (recordData) => {
    const newRecord = new RecordSchema(recordData);

    return newRecord.save();
}

const getRecordById = (recordId) => {
    return RecordSchema.findById(recordId);
}

const getThreeNewestRecords = () => {
    return RecordSchema.find({}).sort({'year': 'desc'}).limit(3);
}

const getAllRecordsInDescByYear = () => {
    return RecordSchema.find({}).sort({'year': 'desc'});
}

const getAllRecordsInAscByYear = () => {
    return RecordSchema.find({}).sort({'year': 'asc'});
}

const deleteRecord = async (recordId) => {
    return await RecordSchema.findByIdAndDelete(recordId);
}

const updateRecord = async (recordId, newRecordData) => {
    return await RecordSchema.findByIdAndUpdate(recordId, newRecordData, {new: true});
}

export default {
    getAllRecords,
    getRecordById,
    getAllRecordsInDescByYear,
    getAllRecordsInAscByYear,
    createNewRecord,
    deleteRecord,
    updateRecord,
    getThreeNewestRecords
};
