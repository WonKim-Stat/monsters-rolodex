import { Component } from "react";
import "./App.css";

// Class Component
class App extends Component {
  constructor() {
    super(); //call the super class constructor and pass in ()

    this.state = {
      monsters: [], // initial state
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users") // promise that we will have value ,then value
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            //Either I can pass Object or function inside of setState()
            return { monsters: users }; // now monsters points to users
          },
          () => {
            console.log(this.state);
          } // to check our state updated correctly.
        )
      );
  }

  render() {
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(event) => {
            const searchString = event.target.value.toLowerCase(); // make it lower case
            const filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name.toLowerCase().includes(searchString); // make it lower case
            });

            this.setState(() => {
              return { monsters: filteredMonsters };
            });
          }}
        />

        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
