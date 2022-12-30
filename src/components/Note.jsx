import React from "react";
const Note = ({ id, title, content, onDelete }) => {

  return (
    <>
      <main className="guestLayout">
        <div className="note">
          <h1>{title}</h1>
          <p>{content}</p>
          <p
            onClick={() => {
              // when this button is clicked ==> Execute this function
              onDelete(id);
            }}
          >
            DELETE
          </p>
        </div>
      </main>
    </>
  );
};

export default Note;
