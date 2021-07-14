import React from 'react';
import PropTypes from 'prop-types';

import './TogglerList.scss';

const TogglerList = ({ isListOpen, onToggle }) => (
  <button onClick={onToggle} type="button" className={isListOpen ? 'toggle-list toggle-list--open' : 'toggle-list'}>=</button>
);

TogglerList.propTypes = {
  isListOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default TogglerList;
