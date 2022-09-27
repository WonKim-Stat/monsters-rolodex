import { Component } from "react";
import "./App.css";

class AppReview extends Component {
  constructor() {
    super(); //call the super class constructor and pass in ()

    this.state = {
      monsters: [],
    }; // always json object format. Key value pairs // // initial state
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users") // promise that we will have value ,then value
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          //Either I can pass Object or function inside of setState()
          () => {
            return { monsters: users }; // now monsters points to users
          },
          () => {
            console.log(this.state); // to check state got updated correctly
          }
        )
      );
  }
  render() {
    return (
      <div className="AppReview">
        <input
          className="search-box"
          type="seach"
          placeholder="Search Monsters"
          onChange={(event) => {
            const searchString1 = event.target.value.toLowerCase();
            const filteredMonsters1 = this.state.monsters.filter((monster) => {
              return monster.name.toLowerCase().includes(searchString1);
            });
            this.setState(() => {
              return { monsters: filteredMonsters1 };
            });
          }}
        ></input>
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

export default AppReview;
