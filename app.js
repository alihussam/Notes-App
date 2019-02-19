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
    var content = notes.getNote(argv.title);
    if(content){
        console.log(content);
    }
} 
else if (command === "rem") 
{
    var message = notes.remNote(argv.title) 
            ? `\'${argv.title}\' note removed` 
            : `\'${argv.title}\' note NOT removed`;
    console.log(message);
} 
else 
{
    console.log(`\'${command}\' not recognized!`);
}