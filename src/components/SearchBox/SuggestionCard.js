import React, { Component, Fragment } from "react";

import { SuggestionItem } from "./style";

export default class SuggestionCard extends Component {
  constructor(props) {
    super(props);
    this.itemRef = React.createRef();
  }

  componentDidUpdate() {
    if (this.props.isActive) {
      this.itemRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start"
      });
    }
  }
  render() {
    const {
      datum,
      isActive,
      handleItemClick,
      handleMouseOver,
      index,
      userInput
    } = this.props;

    return (
      <SuggestionItem
        isActive={isActive}
        onClick={ev => handleItemClick(ev)}
        onMouseEnter={ev => handleMouseOver(ev, index)}
        ref={this.itemRef}
      >
        <p>{datum.id}</p>
        <i>{datum.name}</i>

        {datum.items.toString().includes(userInput.toLowerCase()) ? (
          <Fragment>
            <hr />
            <span>"{userInput}" Found in items</span>
            <hr />
          </Fragment>
        ) : null}

        <p>
          {datum.address}, {datum.pincode}
        </p>
      </SuggestionItem>
    );
  }
}
