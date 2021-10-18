import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestAPI, removeItem } from '../actions';
import ButtonTable from './ButtonTable';
import './Table.css';

class Table extends Component {
  constructor(props) {
    super(props);

    this.tableDespesa = this.tableDespesa.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(id) {
    const { despesaRedux, removeItemRedux } = this.props;
    const filteredArray = despesaRedux.filter((despesa) => despesa.id !== id);
    removeItemRedux(filteredArray);
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
          { /* esse split() eu me basiei no código do repositório do '[Gessé Carlos]' */ }
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
          <ButtonTable id={ despesa.id } deleteItem={ this.deleteItem } />
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
          <tbody className="table-body">
            {this.tableDespesa()}
          </tbody>
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
  removeItemRedux: (payload) => dispatch(removeItem(payload)),
});

Table.propTypes = {
  expensesRedux: PropTypes.array,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Table);
