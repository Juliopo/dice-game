import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PlayerTotalScore extends Component {
  render() {
    const { playerTotalScore } = this.props;

    return (
      <div className='player-current-box'>
        <div className='player-current-label'>Current</div>
        <div className="player-current-score">{ playerTotalScore }</div>
      </div>
    );
  }
}

PlayerTotalScore.propTypes = {
  playerTotalScore: PropTypes.number.isRequired
};

PlayerTotalScore.displayName = 'PlayerTotalScore';

export default PlayerTotalScore;
