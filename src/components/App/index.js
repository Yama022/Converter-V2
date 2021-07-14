/* eslint-disable max-len */
// == Import npm
import React from 'react';

// == Import
import './app.scss';
import Header from 'src/components/Header';
import data from 'src/data/currencies';
import List from 'src/components/Currencies';
import Footer from 'src/components/Footer';
import TogglerList from 'src/components/TogglerList';

// == Composant
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isListOpen: false,
      baseAmount: 1,
      selectedCurrency: 'Canadian Dollar',
    };

    this.handleClick = this.handleClick.bind(this);
    this.selectCurrency = this.selectCurrency.bind(this);
  }

  // fonction pour changer la valeur de isListOpen et rotate le bouton et fermer ou ouvrir la Liste
  handleClick() {
    const { isListOpen } = this.state;
    this.setState({
      isListOpen: !isListOpen,
    });
  }

  makeConversion() {
    const { selectedCurrency, baseAmount } = this.state;
    const foundCurrency = data.find((currency) => currency.name === selectedCurrency);
    const result = foundCurrency.rate * baseAmount;

    return Math.round(result * 100) / 100;
  }

  selectCurrency(name) {
    // console.log('Target', name);
    this.setState({ selectedCurrency: name });
    this.makeConversion();
  }

  render() {
    const {
      baseAmount, isListOpen, selectedCurrency,
    } = this.state;
    // console.log('Coucou', this.selectCurrency);
    return (
      <div className="app">
        <Header baseAmount={baseAmount} />
        <TogglerList isListOpen={isListOpen} onToggle={this.handleClick} />
        <List
          currencies={data}
          isOpen={isListOpen}
          coucou={(e) => {
            this.selectCurrency(e);
          }}
        />
        <Footer currency={selectedCurrency} value={this.makeConversion()} />
      </div>

    );
  }
}

// == Export
export default App;
