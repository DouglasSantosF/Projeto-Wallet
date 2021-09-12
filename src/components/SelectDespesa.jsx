import React from 'react';
import PropTypes from 'prop-types';

class SelectDespesa extends React.Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label htmlFor="despesa-input">
        Tag:
        <select id="despesa-input" value={ value } name="tag" onChange={ handleChange }>
          <option value="Alimentação"> Alimentação </option>
          <option value="Lazer"> Lazer </option>
          <option value="Trabalho"> Trabalho </option>
          <option value="Transporte"> Transporte </option>
          <option value="Saúde"> Saúde </option>
        </select>
      </label>
    );
  }
}

SelectDespesa.propTypes = {
  value: PropTypes.string,
}.isRequired;

export default SelectDespesa;
