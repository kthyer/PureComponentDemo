import React, { PureComponent } from "react";

import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";

const styles = {
  messageContainer: {
    width: "75vw",
    marginLeft: "auto",
    marginRight: "auto"
  },
  message: {
    paddingTop: "15px",
    paddingBottom: "15px"
  }
};

export default class Message extends PureComponent {
  static propTypes = {
    message: PropTypes.string.isRequired
  };

  render = () => {
    const { message } = this.props;
    return (
      <Paper style={styles.messageContainer} rounded elevation={5}>
        <h3 style={styles.message}>{message}</h3>
      </Paper>
    );
  };
}
