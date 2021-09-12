import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import Header from '../components/Header';
import Input from '../components/Input';
import SelectPagamento from '../components/SelectPagamento';
import SelectDespesa from '../components/SelectDespesa';
import './Wallet.css';
import { setExpenses } from '../actions';

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      result: '',
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.getApiMoedas = this.getApiMoedas.bind(this);
    this.getOptions = this.getOptions.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.getApiMoedas();
  }

  onSubmit() {
    const { setStateExpenses } = this.props;
    const { value, description, currency, method, tag } = this.state;
    setStateExpenses({ value, description, currency, method, tag });
  }

  async getApiMoedas() {
    const getAPI = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await getAPI.json();
    delete data.USDT;

    this.setState({
      result: data,
    }, () => this.setState({ loading: false }));
  }

  getOptions() {
    const { result } = this.state;
    const arrayResult = Object.keys(result);
    return arrayResult
      .map((moeda, indice) => (
        <option value={ moeda } key={ indice }>{ moeda }</option>
      ));
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { emailReducer, despesaRedux } = this.props;
    const { loading, value, description, currency, tag, method } = this.state;
    const Loading = <h1>Loading...</h1>;
    return (
      <div>
        <Header email={ emailReducer } expense={ despesaRedux } />
        { loading ? Loading : (
          <form className="form">
            <Input
              id="valor-input"
              value={ value }
              text="Valor:"
              name="value"
              handleChange={ this.handleChange }
            />
            <Input
              id="descricao-input"
              value={ description }
              text="Descrição:"
              name="description"
              handleChange={ this.handleChange }
            />
            <label htmlFor="moeda-input">
              Moeda:
              <select
                name="currency"
                onChange={ this.handleChange }
                value={ currency }
                id="moeda-input"
              >
                {this.getOptions()}
              </select>
            </label>
            <SelectPagamento value={ method } handleChange={ this.handleChange } />
            <SelectDespesa value={ tag } handleChange={ this.handleChange } />
            <Button onSubmit={ this.onSubmit } />
          </form>
        )}
      </div>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  emailReducer: state.user.email,
  despesaRedux: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  setStateExpenses: (state) => dispatch(setExpenses(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
