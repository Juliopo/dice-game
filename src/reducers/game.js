import _ from 'lodash';
import { ROLL_DICE_START, ROLL_DICE_END, PLAYER_TURN, NEW_GAME, EVALUATE_DICE_RESULT } from '../actions/actionTypes';
import { deepCopy } from '../helpers/deepCopy';

const FORBIDEN_NUMBER = 1;
const SCORE_TO_WIN = 100;

export const defaultState = {
  isDiceRolling: false,
  diceResult: 6,
  playerTurn: 'player1',
  player1: {
    id: 1,
    name: 'Player1',
    score: 0,
    totalScore: 0
  },
  player2: {
    id: 2,
    name: 'Player2',
    score: 0,
    totalScore: 0
  }
};

export default (state = deepCopy(defaultState), action) => {
  switch (action.type) {
    case ROLL_DICE_START:
      return _.assign({}, state, {
        isDiceRolling: true
      });

    case ROLL_DICE_END:
      return _.assign({}, state, {
        isDiceRolling: false
      });

    case PLAYER_TURN:
      return _.assign({}, state, {
        playerTurn: action.whichTurn
      });

    case NEW_GAME:
      return deepCopy(defaultState);

    case EVALUATE_DICE_RESULT:
      let tempState = deepCopy(state);
      const playerScore = tempState[state.playerTurn].score;
      const nextTurn = state.playerTurn === 'player1' ? 'player2' : 'player1';

      tempState.diceResult = action.diceResult;

      if (playerScore + action.diceResult >= SCORE_TO_WIN) {
        tempState[state.playerTurn].score = 0;
        tempState[state.playerTurn].totalScore += 1;
        tempState.playerTurn = nextTurn;
        return tempState;
      }

      if (action.diceResult === FORBIDEN_NUMBER) {
        tempState.playerTurn = nextTurn;
        tempState[state.playerTurn].score = 0;
      } else {
        tempState[state.playerTurn].score += action.diceResult;
      }

      return tempState;

    default:
      return state;
  }
};
