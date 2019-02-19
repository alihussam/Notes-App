/*Module Imports*/
const yargs = require("yargs");
const notes = require("./notes.js");

/*Var Initializing*/
const argv = yargs.argv;
const command = argv._[0];

/*Program logic starts here*/
if (command === 'add') {
    if(notes.addNote(argv.title,argv.body)){
        console.log(`\'${argv.title}\' note created!`);
    }else{
        console.log("Note creation failed!");
    }
} 
else if (command === "read") 
{
    //getNote returns a JSON object
    var content = notes.getNote(argv.title);
    if(content.length > 0){
        console.log(content);
    }else {
        console.log(`\'${argv.title}\' note not found!`);
    }
}
else if (command === "rem") 
{
    var message = notes.remNote(argv.title) 
            ? `\'${argv.title}\' note removed` 
            : `\'${argv.title}\' note NOT removed`;
    console.log(message);
}
else if (command === "list"){
    var holdNotes = notes.getAll()
    console.log("ALL NOTES:");
    holdNotes.forEach((note) => console.log(note));
} 
else 
{
    console.log(`\'${command}\' not recognized!`);
}