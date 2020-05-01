const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

// Set yargs version
yargs.version('1.1.0');

// Register Add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler({ title, body }) {
    notes.addNote(title, body);
  }
})

// Register Remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a new note',
  handler({ title }) {
    notes.removeNote(title)
  }
})

// Register list command
yargs.command({
  command: 'list',
  describe: 'list notes',
  handler() {
    console.log('Listing notes')
  }
})

// Register read command
yargs.command({
  command: 'read',
  describe: 'read note',
  handler() {
    console.log('Reading notes')
  }
})

yargs.parse()