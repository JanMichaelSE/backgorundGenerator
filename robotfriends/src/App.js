import React, { Fragment } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox.js";
import { robots } from "./robots";

const App = () => {
  return (
    <Fragment>
      <div className="tc">
        <h1>RobotFriends</h1>
        <SearchBox />
        <CardList robots={robots} />
      </div>
    </Fragment>
  );
};

export default App;
