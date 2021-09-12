// Coloque aqui suas actions
export const SET_LOGIN = 'SET_LOGIN';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const REQUEST_API = 'REQUEST_API';

export const setLogin = (email) => ({
  type: SET_LOGIN,
  email,
});

const addExpenses = (expense) => ({
  type: ADD_EXPENSES,
  expense,
});

const requestAPI = () => ({
  type: REQUEST_API,
});

export function setExpenses(expense) {
  return (dispatch) => {
    dispatch(requestAPI());
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((results) => {
        expense.exchangeRates = results;
        dispatch(addExpenses(expense));
      });
  };
}
