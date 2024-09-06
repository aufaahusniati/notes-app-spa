import React, { Component } from "react";
import NoteDetail from "../components/NoteDetail";
import PropTypes from "prop-types";
import {
  deleteNote,
  archiveNote,
  unarchiveNote,
  getNote,
} from "../utils/local-data";
import { useParams, useNavigate } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

function DetailNotePageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  return <DetailNotePage navigate={navigate} id={id} />;
}

class DetailNotePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getNote(props.id),
    };

    this.onDeleteNotesHandler = this.onDeleteNotesHandler.bind(this);
    this.onArchiveNotesHandler = this.onArchiveNotesHandler.bind(this);
    this.onUnarchiveNotesHandler = this.onUnarchiveNotesHandler.bind(this);
  }

  onDeleteNotesHandler(id) {
    deleteNote(id);
    this.props.navigate("/");
  }

  onArchiveNotesHandler(id) {
    archiveNote(id);
    this.props.navigate("/");
  }

  onUnarchiveNotesHandler(id) {
    unarchiveNote(id);
    this.props.navigate("/archives");
  }

  render() {
    if (this.state.notes === "") {
      return <p>Catatan tidak ditemukan</p>;
    }

    if (this.state.notes === null) {
      return <NotFoundPage />;
    }

    return (
      <>
        <NoteDetail
          onDelete={this.onDeleteNotesHandler}
          onArchive={this.onArchiveNotesHandler}
          onUnarchive={this.onUnarchiveNotesHandler}
          {...this.state.notes}
        />
      </>
    );
  }
}

DetailNotePage.propTypes = {
  id: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};
export default DetailNotePageWrapper;
