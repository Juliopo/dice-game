import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PlayerName from '../components/PlayerName';
import PlayerScore from '../components/PlayerScore';
import PlayerTotalScore from '../components/PlayerTotalScore';

export class PlayerPanelContainer extends Component {
  render() {
    const { playerInfo, isMyTurn } = this.props;
    const currentPlayer = playerInfo.id === 1 ? 'player-0-panel' : 'player-1-panel';
    const scorePosition = playerInfo.id === 1 ? 'left' : 'right';
    const activeTurn = isMyTurn ? 'active' : '';

    return (
      <div className={`${currentPlayer} ${activeTurn}`}>
        <PlayerName playerName={ `${playerInfo.name}`} />
        <PlayerScore playerScore={ playerInfo.score } position={ scorePosition } />
        <PlayerTotalScore playerTotalScore={ playerInfo.totalScore } />
      </div>
    );
  }
}

PlayerPanelContainer.propTypes = {
  playerInfo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    totalScore: PropTypes.number.isRequired
  }).isRequired,
  isMyTurn: PropTypes.bool.isRequired,
};

export default PlayerPanelContainer;
