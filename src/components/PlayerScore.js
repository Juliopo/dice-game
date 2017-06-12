import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PlayerScore extends Component {
  render() {
    const { playerScore, position } = this.props;

    return (
      <div className={`player-score player-score-${position}`}>{ playerScore }</div>
    );
  }
}

PlayerScore.propTypes = {
  position: PropTypes.string.isRequired,
  playerScore: PropTypes.number.isRequired
};

PlayerScore.displayName = 'PlayerScore';

export default PlayerScore;
