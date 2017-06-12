/* global describe expect it :true*/
import _ from 'lodash';

import { rollDice, playerTurnAction, newGameAction, evaluateDiceResult } from '../../src/actions';
import gameReducer, { defaultState } from '../../src/reducers/game';

describe('Game Reducer', () => {
  it('should return the initial state', () => {
    expect(
      gameReducer(undefined, {})
    ).toEqual(defaultState);
  });

  it('should change the player turn', () => {
    const expectedResult = _.assign({}, defaultState, {
      playerTurn: 'player2'
    });

    expect(
      gameReducer(defaultState, playerTurnAction('player2'))
    ).toEqual(expectedResult);
  });

  it('should reset all the data for a new game', () => {
    const initialState = _.assign({}, defaultState, {
      playerTurn: 'player2',
      player1: {
        score: 10,
        name: 'Julio',
        id: 1,
        totalScore: 2
      },
      player2: {
        score: 98,
        name: 'Julio',
        id: 2,
        totalScore: 3
      }
    });

    expect(
      gameReducer(initialState, newGameAction())
    ).toEqual(defaultState);
  });

  it('should add the dice result to the current score of the player', () => {
    const diceResult = 5;
    const expectedResult = _.assign({}, defaultState, {
      diceResult: 5,
      playerTurn: 'player1',
      player1: { id: 1, name: 'Player1', score: 5, totalScore: 0 }
    });

    expect(
      gameReducer(defaultState, evaluateDiceResult(diceResult))
    ).toEqual(expectedResult);
  });

  it('should change the turn due to the dice result is 1', () => {
    const diceResult = 1;
    const initialState = _.assign({}, defaultState, {
      diceResult: 5,
      playerTurn: 'player1',
      player1: { id: 1, name: 'Player1', score: 23, totalScore: 1 }
    });
    const expectedResult = _.assign({}, defaultState, {
      diceResult: 1,
      playerTurn: 'player2',
      player1: { id: 1, name: 'Player1', score: 0, totalScore: 1 }
    });

    expect(
      gameReducer(initialState, evaluateDiceResult(diceResult))
    ).toEqual(expectedResult);
  });


  it('should change the turn due to the dice result is 1', () => {
    const diceResult = 5;
    const initialState = _.assign({}, defaultState, {
      diceResult: 5,
      playerTurn: 'player1',
      player1: { id: 1, name: 'Player1', score: 98, totalScore: 0 }
    });
    const expectedResult = _.assign({}, defaultState, {
      diceResult: 5,
      playerTurn: 'player2',
      player1: { id: 1, name: 'Player1', score: 0, totalScore: 1 }
    });

    expect(
      gameReducer(initialState, evaluateDiceResult(diceResult))
    ).toEqual(expectedResult);
  });
});
