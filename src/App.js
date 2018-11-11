import React, {Component} from 'react';
import Grid from './Components/Grid';
import Home from './Components/Home';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      step: 0,
    };
  }

  incrementStep = () => {
    this.setState({
      step: this.state.step + 1,
    });
  };


  reset = () => {
    this.setState({
      step: 0,
    });
  };

  render() {

    const { step } = this.state;

    return (
      <div className={'main'}>
        {
          step < 2 ?
          <Home step={step} incrementStep={this.incrementStep}/>
          :
          <Grid reset={this.reset} />
        }
      </div>
    );
  }
}

export default App;
