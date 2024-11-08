/**
 * notetaker.js implements the functionality of the note taker application:
 * - Tracks an array with the current notes
 * - Displays the notes on the web page
 * - Adds notes entered by the user
 * - Removes notes selected by the user
 */

let notes = [];

updatePageContent();

document.getElementById("add").addEventListener("click", addNote);
document.getElementById("delete").addEventListener("click", removeNote);

/**
 * Function which sets up the logic to update the page based on the current notes
 */
function updatePageContent() {
  if (notes.length == 0) {
    document.getElementById("display-notes").classList.add("display-none");
    document.getElementById("delete-note").classList.add("display-none");
  } else {
    updateNotesList();
    updateOptionsList();
  }
}

/**
 * Generates notes in the notelist element based on the value of the notes array
 */
function updateNotesList() {
  let noteList = document.getElementById("notelist");
  noteList.innerHTML = "";

  for (i = 0; i < notes.length; i++) {
    let newNote = document.createElement("li");
    newNote.textContent = notes[i];
    noteList.appendChild(newNote);
  }
  document.getElementById("display-notes").classList.remove("display-none");
}

/**
 * Updates options for delete list
 */
function updateOptionsList() {
  let optionList = document.getElementById("noteselection");
  optionList.innerHTML = "";
  for (i = 0; i < notes.length; i++) {
    let newOption = document.createElement("option");
    newOption.textContent = notes[i];
    optionList.appendChild(newOption);
  }
  document.getElementById("delete-note").classList.remove("display-none");
}

/**
 * Function which adds a new note to the notes list
 */
function addNote() {
  let newInput = document.getElementById("newnote").value;
  notes.push(newInput);
  document.getElementById("newnote").value = "";
  updatePageContent();
}

/**
 * Function which removes a note from the notes list
 */
function removeNote() {
  let removeOption = document.getElementById("noteselection").value;

  for (i = 0; i < notes.length; i++) {
    if (removeOption == notes[i]) {
      notes.splice(i, 1);
    }
  }
  updatePageContent();
}
