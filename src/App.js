import React from 'react';
import './App.css';
import CardList from "./CardList.js";
import {robots} from "./robots.js";
import SearchBox from "./SearchBox.js";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: " "
    }
  } 

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
    .then(users => this.setState({ robots: users}));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value})
  }

  render() {
    const filteredRobots = this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className = 'tc'>
        <h1 className = 'f2'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots}/>
      </div>
    );
  }
}

export default App;
