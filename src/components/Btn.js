import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Btn extends Component {
  render() {
    const { icon, text, action, NameClass } = this.props;

    return (
      <button onClick={ action } className={ NameClass }><i className={ icon } />{ text }</button>
    );
  }
}

Btn.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  NameClass: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};

Btn.displayName = 'Btn';

export default Btn;
