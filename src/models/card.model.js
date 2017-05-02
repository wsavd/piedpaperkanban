import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
        title:{
                type: String
        },
        createdAt: {
                type: Date,
                default: Date.now
        },
}, { versionKey: false });

export default mongoose.model('Card', cardSchema);