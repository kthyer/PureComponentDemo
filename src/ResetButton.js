import React, { PureComponent } from "react";

import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import RefreshIcon from "@material-ui/icons/Refresh";

const styles = {
  button: {
    marginLeft: "auto"
  }
};

export default class ResetButton extends PureComponent {
  static propTypes = {
    clickFunc: PropTypes.func.isRequired
  };

  render = () => {
    const { clickFunc } = this.props;
    return (
      <Button
        style={styles.button}
        onClick={clickFunc}
        variant="contained"
        color="secondary"
      >
        Reset
        <RefreshIcon />
      </Button>
    );
  };
}
