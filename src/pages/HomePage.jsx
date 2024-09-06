import React, { Component } from "react";
import NoteSearch from "../components/NoteSearch";
import NotesList from "../components/NotesList";
import { getActiveNotes } from "../utils/local-data";
import { useSearchParams } from "react-router-dom";
import HomePageAction from "../components/HomePageAction";
import PropTypes from "prop-types";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getActiveNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const filteredNotes = this.state.notes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    const activeNotes = filteredNotes.filter((note) => note.archived === false);

    return (
      <>
        <section className="homepage">
          <NoteSearch
            keyword={this.state.keyword}
            keywordChange={this.onKeywordChangeHandler}
          />
          <NotesList notes={activeNotes} />
          <HomePageAction />
        </section>
      </>
    );
  }
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default HomePageWrapper;
