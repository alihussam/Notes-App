const fs = require('fs');

var fetchNote = () => {
    try{
        var notesString = fs.readFileSync('notes_data.json');
        return JSON.parse(notesString);
    } catch(e){
        return [];
    }
};

var saveNote = (notes) => {
    fs.writeFileSync('notes_data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNote();
    var note = {
        title,
        body,
    };

    if(notes.filter((note) => note.title ===title).length === 0){
        notes.push(note);
        saveNote(notes);
        return true;
    }else{
        console.log(`A note with same name \'${title}\' already exists!`);
        return false;
    }
    
};

var getAll = () => {
    return fetchNote();
};

var getNote = (title) => {
    var notes = fetchNote();
    return notes.filter((note) => note.title === title);
};

var remNote = (title) => {
    var notes = fetchNote();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNote(filteredNotes);
    if (notes.length !== filteredNotes.length) {
        return true;
    } else {
        return false;
    }
};

module.exports = {
    addNote,
    getAll,
    getNote,
    remNote,
};

