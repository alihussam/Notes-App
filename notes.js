var addNote = (title, body) => {
    console.log('Adding note', title, body);
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

