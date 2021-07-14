import './header.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ baseAmount }) => (
  <header className="header">
    <h1 className="header__title">Converter</h1>
    <h2 className="header__amount">{baseAmount}</h2>
  </header>
);

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
};

export default Header;
