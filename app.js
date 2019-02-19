/*Module Imports*/
const yargs = require("yargs");
const notes = require("./notes.js");

/*Var Initializing*/
const argv = yargs.argv;
const command = argv._[0];

/*Program logic starts here*/
if (command === 'add') {
    if(notes.addNote(argv.title,argv.body)){
        console.log("add SUCCESS ");
    }
} 
else if (command === "read") 
{
    var content = notes.getNote(argv.title);
    if(content){
        console.log(content);
    }
} 
else if (command === "rem") 
{
    notes.remNote(argv.title);
} 
else 
{
    console.log(`\'${command}\' not recognized!`);
}