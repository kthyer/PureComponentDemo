import React, { Component } from "react";

import Message from "./Message";
import PropTypes from "prop-types";

export default class MessageList extends Component {
  static propTypes = {
    messages: PropTypes.array.isRequired
  };

  render = () => {
    const { messages } = this.props;
    return (
      <div>
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>
    );
  };
}
