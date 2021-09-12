// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { ADD_EXPENSES, REQUEST_API } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  id: 0,
  loading: false,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, { ...action.expense, id: state.id }],
      id: state.id + 1,
      loading: false,
    };
  case REQUEST_API:
    return {
      ...state,
      loading: true,
    };
  default:
    return state;
  }
};

export default wallet;
