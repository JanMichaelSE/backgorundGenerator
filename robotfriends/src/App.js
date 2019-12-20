import React, { Fragment } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox.js";
import { robots } from "./robots";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: ""
    };
  }

  onSearch = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
        return robot.name
          .toLowerCase()
          .includes(this.state.searchField.toLowerCase());
      });
    return (
        
      <Fragment>
        <div className="tc">
          <h1>RobotFriends</h1>
          <SearchBox searchChange={this.onSearch} />
          <CardList robots={filteredRobots} />
        </div>
      </Fragment>
    );
  }
}

export default App;
