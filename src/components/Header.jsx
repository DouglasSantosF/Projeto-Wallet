import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import imagem from '../trybe-logo-login.png'; // lembrar de descomentar linha 11
import './Header.css';

class Header extends React.Component {
  constructor() {
    super();
    this.somaTotal = this.somaTotal.bind(this);
  }

  somaTotal() {
    const { expense, loadingRedux } = this.props;
    if (!loadingRedux) {
      const total = expense.reduce((acc, valores) => {
        const { value, currency, exchangeRates } = valores;
        const rate = exchangeRates[currency].ask;
        acc += (parseFloat(value) * parseFloat(rate));
        return acc;
      }, 0);
      return total.toFixed(2);
    }
  }

  render() {
    const { email, loadingRedux } = this.props;
    const LOADING = <h1>Loading... </h1>;
    return (
      <div>
        {loadingRedux ? LOADING : (
          <div>
            <header className="header-container">
              <img className="logo" src={ imagem } alt="" />
              <div className="valor">
                <h4 data-testid="email-field">{`Email: ${email}`}</h4>
                <div className="preco">
                  <h4 data-testid="total-field">{this.somaTotal()}</h4>
                  <h4 data-testid="header-currency-field">BRL</h4>
                </div>
              </div>
            </header>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loadingRedux: state.wallet.loading,
});

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
