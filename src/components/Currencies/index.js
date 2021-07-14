/* eslint-disable max-len */
import React from 'react';
import './currencies.scss';
import PropTypes from 'prop-types';
import CurrenciesName from './Currencies';

const List = ({ currencies, isOpen, coucou }) => (
  <div className={isOpen ? 'currencies currencies--open' : 'currencies'}>
    <h2>Currencies</h2>
    <ul>
      {currencies.map((currency) => (
        <CurrenciesName key={currency.name} {...currency} coucou={coucou} />
      ))}
    </ul>
  </div>
);

List.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  coucou: PropTypes.func.isRequired,
};

export default List;
