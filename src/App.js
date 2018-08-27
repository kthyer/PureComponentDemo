import React, { Component } from "react";

import MessageList from "./MessageList";
import SimpleAppBar from "./SimpleAppBar";
import TextField from "@material-ui/core/TextField";

const styles = {
  app: {
    fontFamily: "Roboto, sans-serif",
    margin: 0,
    padding: 0,
    textAlign: "center"
  },
  textArea: {
    width: "75vw",
    marginTop: "5em"
  }
};

export default class App extends Component {
  state = {
    messages: []
  };

  getLastMessage = () => {
    const { messages } = this.state;
    const lastMessage = messages[messages.length - 1];
    return lastMessage === undefined ? "" : lastMessage;
  };

  onMessageChange = event => {
    const { messages } = this.state;
    messages.push(event.target.value);
    this.setState({ messages });
  };

  resetMessages = () => {
    this.setState({ messages: [] });
  };

  render = () => {
    const { messages } = this.state;
    return (
      <div style={styles.app}>
        <SimpleAppBar clickFunc={this.resetMessages} />
        <TextField
          style={styles.textArea}
          type="text"
          value={this.getLastMessage()}
          onChange={this.onMessageChange}
          label="Enter Text"
          multiline={true}
        />

        <MessageList messages={messages} />
      </div>
    );
  };
}
