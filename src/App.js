import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { Searchbox } from "./components/searchbox/searchbox.component";

// function App() {
class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "Scary Monsters",
      name: "",
      // monsters: [
      //   { name: "Dracula", id: 0 },
      //   {
      //     name: "Frankenstein",
      //     id: 1,
      //   },
      //   {
      //     name: "The Thing",
      //     id: 2,
      //   },
      // ],
      monsters: [],
    };

    // this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (value) => {
    this.setState({
      name: value,
    });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          monsters: data,
        });
      });
  }

  render() {
    const { monsters, name } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(name.toLowerCase());
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1>{this.state.title}</h1>
          {/* <input
            onChange={(e) => this.setState({ name: e.target.value })}
            value={this.state.name}
            placeholder="Enter monster name"
          /> */}
          <Searchbox
            handleChange={this.handleChange}
            placeholder="Enter monster name"
          />
          <CardList monsters={name ? filteredMonsters : monsters} />
        </header>
      </div>
    );
  }
}
// }

export default App;
