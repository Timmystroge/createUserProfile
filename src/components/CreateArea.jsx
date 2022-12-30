import React, { useState } from "react";

const CreateArea = ({ onAdd }) => {
  // create and save user input  notes to a state
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  // getting the values of the inputs
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();

    // Destructure Note object E.g note.title = title and note.content = content : )
    const { title, content } = note;

    //checking if note is empty
    if (title === "" || content === "") {
      alert("Empty Field!");
    } else {
      // onAdd props
      onAdd(note);
    }

    // clear the input by setting the note state to empty value
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div className="create">
      <form action="">
        <input
          name="title"
          value={note.title}
          placeholder="Title"
          onChange={handleChange}
        />
        <textarea
          name="content"
          value={note.content}
          placeholder="Take a Note..."
          rows="3"
          onChange={handleChange}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
};

export default CreateArea;
