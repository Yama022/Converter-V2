import React from 'react';
import './currencies.scss';
import PropTypes from 'prop-types';

const CurrenciesName = ({ name, coucou }) => {
  const test = () => {
    coucou(name);
  };
  return (
    <li
      onClick={test}
      className="name"
    >
      {name}
    </li>

  );
};

CurrenciesName.propTypes = {
  name: PropTypes.string.isRequired,
  coucou: PropTypes.func.isRequired,
};

export default CurrenciesName;
