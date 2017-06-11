import _ from 'lodash';

import { ROLL_DICE_START, ROLL_DICE_END, PLAYER_TURN, NEW_GAME, EVALUATE_DICE_RESULT } from '../actions/actionTypes';

const ROLL_DICE_DURATION = 250;

export const rollDiceStart = () => ({
  type: ROLL_DICE_START
});

export const rollDiceEnd = () => ({
  type: ROLL_DICE_END
});

export const evaluateDiceResult = diceResult => ({
  type: EVALUATE_DICE_RESULT,
  diceResult
});


export const rollDice = diceResult => (dispatch) =>  {
  dispatch(rollDiceStart());
  _.delay(() => {
    dispatch(evaluateDiceResult(diceResult));
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
