import React from "react";
import "./App.css";
import ConnectedCompanies from "../Companies";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ConnectedCompanies />
      </div>
    );
  }
}

export default App;
