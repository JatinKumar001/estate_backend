import mongoose from 'mongoose'

const PropertySchema = new mongoose.Schema({
    picture: {
        type: [String]
    },
    location:{
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    propertytitle:{
        type: String,
        required: true
    },
    ownername:{
        type: String,
        required: true
    },
    ownerdesc:{
        type: String,
        required: true
    },
    ownerprofession:{
        type: String,
        required: true
    },
    ownerphoneno:{
        type: String,
        required: true
    },
    owneremailid:{
        type: String,
        required: true
    },
    bhk: {
        type: Number,
        required: true
    },
    propertytype: {
        type: String,
        requreid: true
    },
    feature: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    entrancehall: {
        type: String,
        required: true
    },
    lounge: {
        type: String,
        required: true
    },
    kitchen: {
        type: String,
        required: true
    },
    noofbedrooms: {
        type: Number,
        required: true
    },
    bedroomdimensions: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
});

export default mongoose.model("Propery", PropertySchema);