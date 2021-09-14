import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestAPI } from '../actions';
import './Table.css';

class Table extends Component {
  constructor(props) {
    super(props);

    this.tableDespesa = this.tableDespesa.bind(this);
  }

  tableDespesa() {
    const { despesaRedux, loadingRedux } = this.props;
    const loading = <h1>Loading...</h1>;
    return loadingRedux ? loading : (
      despesaRedux.map((despesa, indice) => (
        <tr key={ indice }>
          <td className="td-dc">{despesa.description}</td>
          <td className="td-tag">{despesa.tag}</td>
          <td className="td-method">{despesa.method}</td>
          <td className="td-value">{despesa.value}</td>
          <td className="td-cy">
            {(despesa.exchangeRates[despesa.currency].name)
              .split('/')[0]}
          </td>
          <td className="td-moedas">
            {Number(despesa.exchangeRates[despesa.currency].ask)
              .toFixed(2)}
          </td>
          <td className="td-moedas">
            {Number(despesa.exchangeRates[despesa.currency].ask * despesa.value)
              .toFixed(2)}
          </td>
          <td className="td-moedas">Real</td>
          <button className="btn" type="button">Editar</button>
          <button className="btn2" type="button">Excluir</button>
        </tr>)));
  }

  render() {
    return (
      <div>
        <table>
          <thead className="table-title">
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <thead className="table-body">
            {this.tableDespesa()}
          </thead>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loadingRedux: state.wallet.loading,
  expensesRedux: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  isLoading: () => dispatch(requestAPI()),
});

Table.propTypes = {
  expensesRedux: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Table);
