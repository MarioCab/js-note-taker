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
document.getElementById('remove').addEventListener('click', removeOperand);


/**
 * Function which sets up the logic to update the page based on the current notes
 */
function updatePageContent() {
  let noteList = document.getElementById("notelist");
  let optionList = document.getElementById("noteselection");
  let newOption = document.createElement("option");
  let newNote = document.createElement("li");

  if (notes.length == 0) {
    document.getElementById("display-notes").classList.add("display-none");
    document.getElementById("delete-note").classList.add("display-none");
  } else {
    document.getElementById("display-notes").classList.remove("display-none");
    document.getElementById("delete-note").classList.remove("display-none");

    for (i = 0; i < notes.length; i++) {
      newNote.textContent = notes[i];
      noteList.appendChild(newNote);

      newOption.textContent = toString(i);
      optionList.appendChild(newOption);
    }
  }
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
  notes.splice(removeOption, 1);
  updatePageContent();
}
