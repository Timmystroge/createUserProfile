import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
// import notes from "./data/notes";
import CreateArea from "./components/CreateArea";

// ====>>>>><<<<<<======== //

const App = () => {
  //create and save notes array to state
  const [notes, setNotes] = useState([]);

  // addNote fn is passed in as a prop from createAreas
  function addNote(newNote) {
    // get older datas in the array and add the new datas coming from newNotes passed as a parameter
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    // get all notes in the array and filter them out using the id passed as a parameter
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {/* map through the note array to display the datas */}
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default App;
