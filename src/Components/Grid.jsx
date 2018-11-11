import React, {Component} from 'react';

export default class Grid extends Component {

  constructor(props) {
    super(props);

    this.state = {
      grid: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      player: 1,
    };

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler = (out_index, in_index, e) => {
    e.preventDefault();
    e.target.disabled = true;

    let { grid, player } = this.state;

    grid[out_index][in_index] = player;

    this.setState({
      grid,
      player: player === 1 ? 2 : 1,
    });
  };

  render() {

    const {grid} = this.state;

    const renderBlocks = () => {

      let blockStyle = {
        background: '#ff0033',
      };

      return grid.map((row, out_index) => {
        return <div key={out_index} className={'row'}>
          {row.map((block, in_index) => {
            if (block === 1) {
              blockStyle = {
                background: '#323232',
                pointerEvents: 'none',
              };
            } else if (block === 2) {
              blockStyle = {
                background: '#009688',
                pointerEvents: 'none',
              };
            } else {
              blockStyle = {
                background: '#ff0033',
              };
            }
            return <div key={out_index+in_index} onClick={(e) => this.onClickHandler(out_index, in_index, e)} className={'block'} style={blockStyle} />;
          })}
        </div>
      });
    };

    return (
      <div className={'grid'}>
        {renderBlocks()}
      </div>
    );
  }
}