import React from "react";
import NotesItem from "./NotesItem";
import PropTypes from "prop-types";

export default function NotesList({ notes }) {
  if (!notes.length) {
    return (
      <section className="notes-list-empty">
        <p className="notes-list__empty">No Notes</p>
      </section>
    );
  }

  return (
    <section className="notes-list">
      {notes.map((note) => (
        <NotesItem key={note.id} id={note.id} {...note} />
      ))}
    </section>
  );
}

NotesList.propTypes = {
  notes: PropTypes.array,
};
