import React, { Component } from 'react';

export default class Home extends Component {

  render() {
    const renderSteps = () => {

      const { step, incrementStep } = this.props;

      switch(step) {
        case 0:
          return <div className={'step'}>
            <h1 className={'main-name'}>TICK TACK TOE</h1>
            <input name={'player_one'} type="text" placeholder={'Player 1'} onChange={this.onHandleChange} />
            <button className={'btn'} onClick={incrementStep}>NEXT</button>
          </div>;
        case 1:
          return <div className={'step'}>
            <h1 className={'main-name'}>TICK TACK TOE</h1>
            <input name={'player_two'} type="text" placeholder={'Player 2'} onChange={this.onHandleChange} />
            <button className={'btn'} onClick={incrementStep}>NEXT</button>
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