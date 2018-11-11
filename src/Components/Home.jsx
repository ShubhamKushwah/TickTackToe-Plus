import React, { Component } from 'react';

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      player_name: '',
    };
  }

  onHandleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };

  render() {
    const renderSteps = () => {

      const { step, incrementStep, changePlayerName, players } = this.props;

      const nextClicked = (index) => {
        changePlayerName(index, this.state.player_name ? this.state.player_name : players[index]);
        this.setState({
          player_name: '',
        });
        incrementStep();
      };

      switch(step) {
        case 0:
          return <div className={'step'}>
            <h1 className={'main-name'}>TICK TACK TOE</h1>
            <input name={'player_name'} type="text" placeholder={players[0]} onChange={this.onHandleChange} value={this.state.player_name} />
            <button className={'btn'} onClick={() => nextClicked(0)}>NEXT</button>
          </div>;
        case 1:
          return <div className={'step'}>
            <h1 className={'main-name'}>TICK TACK TOE</h1>
            <input name={'player_name'} type="text" placeholder={players[1]} onChange={this.onHandleChange} value={this.state.player_name} />
            <button className={'btn'} onClick={() => nextClicked(1)}>NEXT</button>
          </div>;
        default:
          return <div>Not Found!</div>
      }
    };

    return (
      <div className={'home'}>
        {renderSteps()}
      </div>
    );
  }
}