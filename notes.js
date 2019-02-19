const fs = require('fs');

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body,
    };

    try{
        var notesString = fs.readFileSync('notes_data.json');
        notes = JSON.parse(notesString);
    } catch(e){

    }

    if(notes.filter((note) => note.title ===title).length === 0){
        notes.push(note);
        fs.writeFileSync('notes_data.json', JSON.stringify(notes));
    } else {
        console.log("Note with same name already exists!");
    }

    
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log('Getting Note', title);
};

var remNote = (title) => {
    console.log(`Removing Note ${title}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    remNote,
};

