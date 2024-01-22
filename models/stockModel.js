import mongoose from 'mongoose'

const Schema = mongoose.Schema

const riskScoreSchema = new Schema({
    nigerianStock: {
        type: Number,
        required: true
    },
    foreignStock: {
        type: Number,
        required: true
    },
    techStock: {
        type: Number,
        required: true
    },
    emergencyStock: {
        type: Number,
        required: true
    },
    nigerianBond: {
        type: Number,
        required: true
    },
    foreignBond: {
        type: Number,
        required: true
    },
    commodities: {
        type: Number,
        required: true
    },
    realEstate: {
        type: Number,
        required: true
    },
    tBills: {
        type: Number,
        required: true
    },
    alternative: {
        type: Number,
        required: true
    },

});



const riskScore = mongoose.model('risk score', riskScoreSchema);

export default riskScore;
