import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const model = mongoose.model;

const characterSchema = new Schema(
{
    name: {type: String}, 
    cond1: {type: Boolean}, 
    cond2: {type: Boolean} 
});

export default model('Character', characterSchema, 'characters', false);
