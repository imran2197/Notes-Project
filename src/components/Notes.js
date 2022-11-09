import React, { useState } from "react";
import "../styles/Notes.css";
import NoteItems from "./NoteItems";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleSubmit = () => {
    notes.push({
      title: newTitle,
      description: newDescription,
    });
    setNotes([...notes]);
    setNewTitle("");
    setNewDescription("");
  };
  const deleteHandler = (idx) => {
    notes.splice(idx, 1);
    setNotes([...notes]);
  };
  const editHandler = (editedTitle, editedDescription, idx) => {
    notes[idx] = { title: editedTitle, description: editedDescription };
    setNotes([...notes]);
  };

  return (
    <>
      <h1>Hello</h1>
      <div className="main">
        <div className="container">
          <input
            type="text"
            placeholder="TITLE"
            onChange={(e) => setNewTitle(e.target.value)}
            value={newTitle}
          />
          <textarea
            placeholder="DESCRIPTION"
            className="description"
            onChange={(e) => setNewDescription(e.target.value)}
            value={newDescription}
          />
          <button
            className="submit"
            onClick={handleSubmit}
            disabled={newTitle.length === 0 || newDescription.length === 0}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="notes">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {notes
          .filter((value) => {
            if (search === "") {
              return value;
            } else {
              return value.title.toLowerCase().startsWith(search);
            }
          })
          .map((note, idx) => (
            <NoteItems
              title={note.title}
              description={note.description}
              key={`${note.title}_${idx}`}
              idx={idx}
              deleteHandler={deleteHandler}
              editHandler={editHandler}
            />
          ))}
      </div>
    </>
  );
};

export default Notes;
