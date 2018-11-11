import React, { Component } from 'react';

export default class Grid extends Component {
  render() {
    return (
      <div className={'grid'}>
        <div className={'row'}>
          <div className={'block'} />
          <div className={'block'} />
          <div className={'block'} />
        </div>
        <div className={'row'}>
          <div className={'block'} />
          <div className={'block'} />
          <div className={'block'} />
        </div>
        <div className={'row'}>
          <div className={'block'} />
          <div className={'block'} />
          <div className={'block'} />
        </div>
      </div>
    );
  }
}