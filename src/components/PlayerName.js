import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PlayerName extends Component {
  render() {
    const { playerName } = this.props;

    return (
      <div className="player-name">{ playerName }</div>
    );
  }
}

PlayerName.propTypes = {
  playerName: PropTypes.string.isRequired
};

export default PlayerName;
