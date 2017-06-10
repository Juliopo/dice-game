import _ from 'lodash';

import { ROLL_DICE_START, ROLL_DICE_END, PLAYER_TURN, NEW_GAME } from '../actions/actionTypes';

const ROLL_DICE_DURATION = 250;

const rollDiceStart = () => ({
  type: ROLL_DICE_START
});

const rollDiceEnd = () => ({
  type: ROLL_DICE_END
});

export const rollDice = () => (dispatch) =>  {
  dispatch(rollDiceStart());
  _.delay(() => {
    dispatch(rollDiceEnd());
  }, ROLL_DICE_DURATION);
};

export const playerTurnAction = whichTurn => ({
  type: PLAYER_TURN,
  whichTurn
});

export const newGameAction = () => ({
  type: NEW_GAME
});
