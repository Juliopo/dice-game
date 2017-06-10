import React, { Component } from 'react';
import PropTypes from 'prop-types';
import rollingDice from '../images/rollingDice.gif';
import diceImg1 from '../images/huge-dice1.png';
import diceImg2 from '../images/huge-dice2.png';
import diceImg3 from '../images/huge-dice3.png';
import diceImg4 from '../images/huge-dice4.png';
import diceImg5 from '../images/huge-dice5.png';
import diceImg6 from '../images/huge-dice6.png';

const diceArrayResult = [diceImg1, diceImg2, diceImg3, diceImg4, diceImg5, diceImg6];


export class Dice extends Component {
  render() {
    const { diceResult, isDiceRolling } = this.props;
    const [diceImgResult] = diceArrayResult.filter((imgItem, key) => {
      return diceResult === (key + 1);
    });
    const diceImg = isDiceRolling ? rollingDice : diceImgResult;

    return (
      <img src={ diceImg } alt="Dice" className="dice" />
    );
  }
}

Dice.propTypes = {
  diceResult: PropTypes.number.isRequired,
  isDiceRolling: PropTypes.bool.isRequired
};

export default Dice;
