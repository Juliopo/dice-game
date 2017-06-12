import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';

import '../styles/styles.css';
import PlayerPanelContainer from './PlayerPanelContainer';
import Dice from '../components/Dice';
import Btn from '../components/Btn';
import { rollDice, playerTurnAction, newGameAction } from '../actions';

export class AppContainer extends Component {
  newGameAction = () => {
    this.props.dispatchNewGameAction();
  };

  rollsDiceAction = () => {
    const diceResult = _.random(1, 6);
    this.props.dispatchRollDice(diceResult);
  };

  holdAction = () => {
    const { playerTurn, dispatchPlayerTurn } = this.props;
    if (playerTurn === 'player1') {
      dispatchPlayerTurn('player2');
    } else {
      dispatchPlayerTurn('player1');
    }
  };

  render() {
    const { isDiceRolling, playerTurn, player1, player2, diceResult } = this.props;

    return (
      <div className="wrapper clearfix">
        <PlayerPanelContainer
          playerInfo={ player1 }
          isMyTurn={ playerTurn === 'player1'}
        />
        <PlayerPanelContainer
          playerInfo={ player2 }
          isMyTurn={ playerTurn === 'player2' }
        />
        <Btn
          NameClass='btn-new'
          text='New Game'
          icon='ion-ios-plus-outline'
          action={ this.newGameAction }
        />
        <Btn
          NameClass='btn-roll'
          text='Rolls Dice'
          icon='ion-ios-loop'
          action={ this.rollsDiceAction }
        />
        <Btn
          NameClass='btn-hold'
          text='Hold'
          icon='ion-ios-download-outline'
          action={ this.holdAction }
        />
        <Dice diceResult={ diceResult } isDiceRolling={ isDiceRolling } />
      </div>
    );
  }
}

AppContainer.propTypes = {
  dispatchRollDice: PropTypes.func.isRequired,
  isDiceRolling: PropTypes.bool.isRequired,
  playerTurn: PropTypes.string.isRequired,
  dispatchPlayerTurn: PropTypes.func.isRequired,
  diceResult: PropTypes.number.isRequired,
  dispatchNewGameAction: PropTypes.func.isRequired,
  player1: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    totalScore: PropTypes.number.isRequired
  }).isRequired,
  player2: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    totalScore: PropTypes.number.isRequired
  }).isRequired
};

const mapStateToProps = state => ({
  isDiceRolling: state.game.isDiceRolling,
  playerTurn: state.game.playerTurn,
  diceResult: state.game.diceResult,
  player1: state.game.player1,
  player2: state.game.player2
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    dispatchRollDice: rollDice,
    dispatchPlayerTurn: playerTurnAction,
    dispatchNewGameAction: newGameAction
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
