import React from 'react';
import PropTypes from 'prop-types';

class SelectPagamento extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="method">
        Método de pagamento:
        <select
          id="method"
          value={ value }
          name="method"
          onChange={ handleChange }
        >
          <option value="Dinheiro"> Dinheiro </option>
          <option value="Cartão de crédito"> Cartão de crédito </option>
          <option value="Cartão de débito"> Cartão de débito </option>
        </select>
      </label>
    );
  }
}

SelectPagamento.propTypes = {
  value: PropTypes.func,
}.isRequired;

export default SelectPagamento;
