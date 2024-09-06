import React from "react";
import NotesInput from "../components/NotesInput";
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";

function AddNotePage() {
  const navigate = useNavigate();

  function onAddNotesHandler(notes) {
    addNote(notes);
    navigate("/");
  }

  return <NotesInput addNote={onAddNotesHandler} />;
}

export default AddNotePage;
