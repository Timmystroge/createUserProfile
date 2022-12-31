import React, { useState } from "react";

const CreateArea = ({ onAdd }) => {
  const [isExpanded, setExpanded] = useState(false);

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
      return true;
    } else {
      // onAdd props
      onAdd(note);
    }

    // clear the input by setting the note state to empty value
    setNote({
      title: "",
      content: "",
    });

    // set isExpanded back to false to hide input
    setExpanded(false);
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div className="create">
      <form action="create-note">
        {isExpanded && (
          <input
            name="title"
            value={note.title}
            placeholder="Title"
            onChange={handleChange}
          />
        )}
        <textarea
          name="content"
          value={note.content}
          placeholder="Take a Note..."
          rows={isExpanded ? 3 : 1}
          onChange={handleChange}
          onClick={expand}
        />
        {isExpanded && <button onClick={submitNote}>+</button>}
      </form>
    </div>
  );
};

export default CreateArea;
