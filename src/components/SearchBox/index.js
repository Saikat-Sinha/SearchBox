import React, { Component, Fragment } from "react";

import SuggestionCard from "./SuggestionCard";

import {
  SearchForm,
  SearchInput,
  SuggestionsContainer,
  SuggestionItem
} from "./style";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSuggestions: false,
      activeSuggestion: null,
      userInput: "",
      filteredSuggestion: []
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleKey = this.handleKey.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  handleSearch(ev) {
    const { data } = this.props;
    const userInput = ev.target.value;

    const filteredSuggestions = data.filter(suggestion => {
      return (
        suggestion.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1 ||
        suggestion.id.indexOf(userInput.toLowerCase()) > -1 ||
        suggestion.items.toString().includes(userInput.toLowerCase()) ||
        suggestion.address.toLowerCase().indexOf(userInput.toLowerCase()) >
          -1 ||
        suggestion.pincode.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );
    });
    this.setState({
      activeSuggestion: null,
      filteredSuggestion: filteredSuggestions,
      showSuggestions: userInput.length === 0 ? false : true,
      userInput: ev.currentTarget.value
    });
  }

  handleKey(ev) {
    const { activeSuggestion, filteredSuggestion } = this.state;

    const ENTER_KEY = 13;
    const ARROW_UP_KEY = 38;
    const ARROW_DOWN_KEY = 40;

    if (ev.keyCode === ENTER_KEY) {
      if (filteredSuggestion[activeSuggestion]) {
        this.setState({
          activeSuggestion: 0,
          showSuggestions: false,
          userInput: filteredSuggestion[activeSuggestion].name
        });
      }
    } else if (ev.keyCode === ARROW_UP_KEY) {
      if (activeSuggestion === null) {
        return;
      }
      if (activeSuggestion === 0) {
        this.setState({ activeSuggestion: null });
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    } else if (ev.keyCode === ARROW_DOWN_KEY) {
      if (activeSuggestion === filteredSuggestion.length - 1) {
        return;
      }
      if (activeSuggestion === null) {
        this.setState({ activeSuggestion: 0 });
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  }

  handleItemClick(ev) {
    const { activeSuggestion, filteredSuggestion } = this.state;

    this.setState({
      activeSuggestion: 0,
      showSuggestions: false,
      userInput: filteredSuggestion[activeSuggestion].name
    });
  }

  handleMouseOver(ev, index) {
    this.setState({
      activeSuggestion: index
    });
  }

  render() {
    const {
      showSuggestions,
      activeSuggestion,
      filteredSuggestion,
      userInput
    } = this.state;

    return (
      <div>
        <SearchForm onSubmit={e => e.preventDefault()}>
          <SearchInput
            type="text"
            placeholder="Search Users"
            onChange={this.handleSearch}
            onKeyDown={this.handleKey}
            value={userInput}
          />
          {showSuggestions ? (
            <SuggestionsContainer>
              {filteredSuggestion.length === 0 ? (
                <SuggestionItem key="no-data">
                  <p>No User Found</p>
                </SuggestionItem>
              ) : (
                <Fragment>
                  {filteredSuggestion.map((datum, ind) => (
                    <SuggestionCard
                      datum={datum}
                      key={datum.id}
                      isActive={activeSuggestion === ind}
                      userInput={userInput}
                      index={ind}
                      handleItemClick={this.handleItemClick}
                      handleMouseOver={this.handleMouseOver}
                    />
                  ))}
                </Fragment>
              )}
            </SuggestionsContainer>
          ) : null}
        </SearchForm>
      </div>
    );
  }
}

export default SearchBox;
