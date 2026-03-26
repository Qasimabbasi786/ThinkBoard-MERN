import mongoose from "mongoose";


// 1st step: Create a schema for notes
const noteSchema = new mongoose.Schema(
    {
        title: { 
            type: String, 
            required: true 
        },
        content: { 
            type: String, 
            required: true 
        },
    },
    {timestamps: true}  // Automatically manage createdAt and updatedAt fields
);


// 2nd step: Create a model for notes based on the schema
const Note = mongoose.model("Note", noteSchema);


export default Note;