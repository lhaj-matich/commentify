import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import ErrorBoundry from "../components/ErrorBoundry";
import Scroll from "../components/Scroll";

import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { setSearchField, fetchComments } from "../actions";

import "./Style.css";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchComments.searchField,
    isPending: state.requestComments.isPending,
    Comments: state.requestComments.comments,
    Error: state.requestComments.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestComments: () => fetchComments(dispatch),
  };
};

class App extends Component {
  state = {
    Comments: [],
  };

  componentDidMount() {
    this.props.onRequestComments();
  }

  render() {
    const { searchField, onSearchChange, Comments } = this.props;
    const filtered = Comments.filter((comment) => {
      return comment.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="container tc">
        <header className="header">
          <h3 className="header__text">Commentify</h3>
          <SearchBox onSearchChange={onSearchChange} />
        </header>
        <ErrorBoundry>
          <Scroll>
            {filtered.length > 0 ? (
              <CardList comments={filtered} />
            ) : (
              <div className="loading">
                <FontAwesomeIcon
                  icon={faSpinner}
                  className="loading__icon"
                  spin
                />
              </div>
            )}
          </Scroll>
        </ErrorBoundry>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
