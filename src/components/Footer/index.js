import React from 'react';
import './footer.scss';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';

const Footer = ({ currency, value }) => (
  <footer className="footer">
    <CountUp className="converted" decimals={2} duration={0.3} end={value} />
    <div className="selectedCurrency">{currency}</div>
  </footer>
);

Footer.propTypes = {
  currency: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default Footer;
