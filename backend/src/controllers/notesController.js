import note from '../models/note.js';


export async function getAllNotes(req, res) {
    try {
        const notes = await note.find().sort({ createdAt: -1 }); // -1 will sort in desc order (newest first)
        res.status(200).json(notes);
    } catch (error) {
        console.error('Error in getAllNotes controller: ', error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}


export async function getNoteById(req, res) {
    try {
        const noteId = req.params.id;
        const noteGet = await note.findById(noteId);

        if (!noteGet) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.status(200).json(noteGet);
    } catch (error) {
        console.error('Error in getNoteById controller: ', error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}


export async function createNote(req, res) {
    try {
        const { title, content } = req.body;

        const newNote = new note({
            title,
            content
        });
        await newNote.save();

        res.status(201).json({ message: "Note created Successfully!" });
    } 
    catch (error) {
        console.error('Error in createNote controller: ', error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}


export async function updateNote(req, res) {
    try {
        const{ title, content } = req.body;
        const noteId = req.params.id;

        const updatedNote = await note.findByIdAndUpdate(noteId, { title, content }, { new: true });

        if (!updatedNote) {
            return res.status(404).json({ message: "Note not found" });
        }


        // res.status(200).json({ message: 'Note updated Successfully!' });
        res.status(200).json(updatedNote);
    } catch (error) {
        console.error('Error in updateNote controller: ', error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}


export async function deleteNote(req, res) {
    try {
        const noteId = req.params.id;
    
        const deletedNote = await note.findByIdAndDelete(noteId);

        if (!deletedNote) {
            return res.status(404).json({ message: "Note not found" });
        }

        res.status(200).json({ message: 'Note deleted Successfully!' });
        
    } catch (error) {
        console.error('Error in deleteNote controller: ', error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}