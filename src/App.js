import { Component } from "react";
import "./App.css";
import heroes from "./constant/heroes.json";
import { PlayerContent } from "./PlayerContent";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hero: heroes.heroes,
      team1: [],
      team2: [],
    };
  }

  startAttack() {
    console.log(this.state.hero);

    let randomTeam1 = [];
    let randomTeam2 = [...this.state.hero];

    while (randomTeam1.length < randomTeam2.length) {
      let randomNum = Math.floor(Math.random() * randomTeam2.length);

      let randomDeletePlayer = randomTeam2.splice(randomNum, 1)[0];
      randomTeam1 = [...randomTeam1, randomDeletePlayer];
    }

    this.setState({ team1: randomTeam1, team2: randomTeam2 });

    console.log(randomTeam1, "randomTeam1");
    console.log(randomTeam2, "randomTeam2");
  }

  render() {
    let team1Point = this.state.team1.reduce(
      (sum, hero) => sum + hero.power,
      0
    );
    let team2Point = this.state.team2.reduce(
      (sum, hero) => sum + hero.power,
      0
    );
    console.log(this.state.team1);
    console.log(this.state.team2);
    return (
      <div className="App">
        <br />
        <PlayerContent data={this.state.team1} />
        {team1Point > team2Point ? "Win" : "Lost"} - {team1Point}
        <br />
        <br />
        <button onClick={() => this.startAttack()}>Start Attack</button>
        <br />
        <br />
        {team1Point < team2Point ? "Win" : "Lost"} - {team2Point}
        <PlayerContent data={this.state.team2} />
      </div>
    );
  }
}

export default App;
