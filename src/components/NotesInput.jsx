import React, { Component } from "react";
import { FiCheck } from "react-icons/fi";
import PropTypes from "prop-types";

class NotesInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <section className="note-input">
        <form onSubmit={this.onSubmitEventHandler}>
          <h2>What is on your mind?</h2>
          <input
            className="note-input__title"
            type="text"
            placeholder="Title..."
            required
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          ></input>
          <div
            className="note-input__body"
            contentEditable="true"
            data-placeholder="Take a note..."
            onInput={this.onBodyChangeEventHandler}
          ></div>
          <div className="note-input__action">
            <button className="action" type="submit" title="Save">
              <FiCheck />
            </button>
          </div>
        </form>
      </section>
    );
  }
}

NotesInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NotesInput;
