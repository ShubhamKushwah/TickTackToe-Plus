import React, {Component} from 'react';
import Grid from './Components/Grid';
import Home from './Components/Home';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      score: [0, 0],
      players: ['Player 1', 'Player 2'],
    };
  }

  incrementStep = () => {
    this.setState({
      step: this.state.step + 1,
    });
  };

  increaseScore = (player) => {
    let score = this.state.score;
    score[player - 1] = score[player - 1] + 1;

    this.setState({
      score,
    });
  };

  changePlayerName = (index, player_name) => {
    let players = this.state.players;
    players[index] = player_name;

    this.setState({
      players,
    });
  };

  reset = () => {
    this.setState({
      step: 0,
      score: [0, 0],
    });
  };

  render() {

    const { step, score, players } = this.state;

    return (
      <div className={'main'}>
        {
          step < 2 ?
          <Home
            step={step}
            incrementStep={this.incrementStep}
            changePlayerName={this.changePlayerName}
            players={players}
          />
          :
          <Grid
            score={score}
            players={players}
            reset={this.reset}
            increaseScore={this.increaseScore}
          />
        }
      </div>
    );
  }
}

export default App;
