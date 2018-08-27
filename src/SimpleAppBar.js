import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import PropTypes from "prop-types";
import ResetButton from "./ResetButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default class SimpleAppBar extends Component {
  static propTypes = {
    clickFunc: PropTypes.func.isRequired
  };

  render = () => {
    const { clickFunc } = this.props;
    return (
      <div>
        <AppBar position="absolute" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Pure Component Demonstration
            </Typography>
            <ResetButton clickFunc={clickFunc} />
          </Toolbar>
        </AppBar>
      </div>
    );
  };
}
