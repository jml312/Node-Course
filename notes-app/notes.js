const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  debugger

  if (!duplicateNote) {
    notes.push({ title, body });
    saveNotes(notes);
    console.log(chalk.green.bold("New note added"));
  } else {
    console.log(chalk.red.bold("Note title taken!"));
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const newNotes = notes.filter((note) => note.title !== title);
  if (notes.length !== newNotes.length) {
    saveNotes(newNotes);
    console.log(chalk.green.bold("Note removed!"));
  } else {
    console.log(chalk.red.bold("No note found!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue.bold("Your notes: "));
  notes.forEach(({ title, body }) => {
    console.log("title: " + title + ", body: " + body);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.bold("title: " + title));
    console.log("body: " + note.body);
  } else {
    console.log(chalk.red.bold("Note not found"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote,
};
