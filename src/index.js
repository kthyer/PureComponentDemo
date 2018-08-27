import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import registerServiceWorker from "./registerServiceWorker";

WebFont.load({
  google: {
    families: ["Roboto:300,400,500", "Material Icons", "sans-serif"]
  }
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
