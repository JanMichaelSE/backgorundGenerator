import React, { Fragment } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox.js";
import Scroll from "../components/Scroll";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({ robots: users });
      });
  }

  onSearch = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if (robots.length === 0) {
      return <h1 className="tc f1">Loading Components</h1>;
    } else {
      return (
        <Fragment>
          <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange={this.onSearch} />
            <Scroll>
              <CardList robots={filteredRobots} />
            </Scroll>
          </div>
        </Fragment>
      );
    }
  }
}

export default App;
