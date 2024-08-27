import mongoose from "mongoose";

const clientschema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
    
});
const clientModel = mongoose.models.Clientschema  ||mongoose.model('Clientschema',clientschema);

export default clientModel 
