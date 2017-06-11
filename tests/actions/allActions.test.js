/* global describe test expect :true*/
import { ROLL_DICE_START, ROLL_DICE_END, PLAYER_TURN, NEW_GAME, EVALUATE_DICE_RESULT } from '../../src/actions/actionTypes';
import { rollDiceStart, rollDiceEnd, playerTurnAction, newGameAction, evaluateDiceResult } from '../../src/actions';

describe('All redux actions expected', () => {
  test('ROLL_DICE_START is equal to the expected action', () => {
    const expectedAction = {
      type: ROLL_DICE_START,
    };

    expect(rollDiceStart()).toEqual(expectedAction);
  });

  test('ROLL_DICE_END is equal to the expected action', () => {
    const expectedAction = {
      type: ROLL_DICE_END
    };

    expect(rollDiceEnd()).toEqual(expectedAction);
  });

  test('Player turn action to be the expected action', () => {
    const expectedAction = {
      type: PLAYER_TURN,
    };

    expect(playerTurnAction()).toEqual(expectedAction);
  });

  test('New game action to be as expected action', () => {
    const expectedAction = {
      type: NEW_GAME,
    };

    expect(newGameAction()).toEqual(expectedAction);
  });

  test('evaluate Dice Result action to be as expected', () => {
    const expectedAction = {
      type: EVALUATE_DICE_RESULT,
      diceResult: 5
    };

    expect(evaluateDiceResult(5)).toEqual(expectedAction);
  });
});
