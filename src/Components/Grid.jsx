import React, {Component} from 'react';

export default class Grid extends Component {

  constructor(props) {
    super(props);

    this.state = {
      grid: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      player: 1,
    };
  }

  getCurrentPlayer = () => {
    return this.state.player === 1 ? 2 : 1;
  };

  getTwoBlocks = (b1, b2) => {

    //forward diagonal
    if (b1 === b2 && b1 === 0) {
      //00
      return [[[0, 1], [0, 2]], [[1, 0], [2, 0]], [[1, 1], [2, 2]]];
    } else if (b1 === b2 && b1 === 1) {
      //11
      return [[[0, 0], [2, 2]], [[0, 2], [2, 0]], [[0, 1], [2, 1]], [[1, 0], [1, 2]]];
    } else if (b1 === b2 && b1 === 2) {
      //22
      return [[[0, 0], [1, 1]], [[0, 2], [1, 2]], [[2, 0], [2, 1]]];
    }

    //reverse diagonal
    else if (b1 === 0 && b2 === 2) {
      //02
      return [[[0, 0], [0, 1]], [[2, 0], [1, 1]], [[1, 2], [2, 2]]];
    } else if (b1 === 2 && b2 === 0) {
      //20
      return [[[0, 0], [1, 0]], [[2, 1], [2, 2]], [[1, 1], [0, 2]]];
    }

    //remaining
    else if (b1 === 1 && b2 === 0) {
      //10
      return [[[0, 0], [2, 0]], [[1, 1], [1, 2]]];
    } else if (b1 === 0 && b2 === 1) {
      //01
      return [[[0, 0], [0, 2]], [[1, 1], [2, 1]]];
    } else if (b1 === 2 && b2 === 1) {
      //21
      return [[[2, 0], [2, 2]], [[0, 1], [1, 1]]];
    } else if (b1 === 1 && b2 === 2) {
      //12
      return [[[0, 2], [2, 2]], [[1, 0], [1, 1]]];
    } else {
      return [];
    }

    // this ugly ass hard coded shit could be turned into a 6 line algo, but later...
  };

  validate = (b1, b2) => {
    const { grid } = this.state;

    const counters = this.getTwoBlocks(b1, b2);

    for (let i = 0; i < 4; i++) {
      let compare = [];
      for (let j = 0; j < 2; j++) {
        if (counters[i]) {
          let x, y;
          x = counters[i][j][0];
          y = counters[i][j][1];
          console.log('grid: ', grid[x][y]);
          compare.push(grid[x][y]);
        } else {
        }
      }
      if (compare.length !== 0) {
        if (compare[0] === compare[1] && compare[0] !== 0 && compare[0] === this.getCurrentPlayer()) {
          alert('Player ' + this.getCurrentPlayer() + ' won!');
        }
      }
    }
  };

  onClickHandler = async (out_index, in_index, e) => {
    e.preventDefault();
    e.target.disabled = true;

    let {grid, player} = this.state;

    grid[out_index][in_index] = player;

    await this.setState({
      grid,
      player: this.getCurrentPlayer(),
    });

    this.validate(out_index, in_index);
  };

  render() {

    const { grid } = this.state;

    const { reset } = this.props;

    const renderBlocks = () => {

      let blockStyle = {
        background: '#f1f1f1',
      };

      return grid.map((row, out_index) => {
        return <div key={out_index} className={'row'}>
          {row.map((block, in_index) => {
            if (block === 1) {
              blockStyle = {
                background: `url('assets/cookie.svg')`,
                pointerEvents: 'none',
              };
            } else if (block === 2) {
              blockStyle = {
                background: `url('assets/skull.svg')`,
                pointerEvents: 'none',
              };
            } else {
              blockStyle = {
                background: '#f1f1f1',
              };
            }
            return <div key={out_index + in_index} onClick={(e) => this.onClickHandler(out_index, in_index, e)}
                        className={'block'} style={blockStyle}/>;
          })}
        </div>
      });
    };

    return (
      <div>
        <div className={'top_container'}>
          <span className={'player'}>Shubham Kushwah</span>
          <span className={'player'}>v/s</span>
          <span className={'player'}>Saumya Kushwah</span>
        </div>
        <div className={'grid'}>
          {renderBlocks()}
        </div>
        <div className={'bottom_container'}>
          <button className={'btn'} onClick={() => reset()}>RESTART</button>
          <button className={'btn clear'} onClick={() => this.setState({ grid: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],}) }>CLEAR</button>
        </div>
      </div>
    );
  }
}